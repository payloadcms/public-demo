import type { AfterReadHook } from 'payload/dist/collections/config/types'

import type { Page, Post } from '../payload-types'

export const populateArchiveBlock: AfterReadHook = async ({ doc, req: { payload } }) => {
  // pre-populate the archive block if `populateBy` is `collection`
  // then hydrate it on your front-end

  const layoutWithArchive = await Promise.all(
    doc.layout.map(async (block) => {
      if (block.blockType === 'archive') {
        const archiveBlock = block as Extract<Page['layout'][0], { blockType: 'archive' }> & {
          populatedDocs: Array<{
            relationTo: 'pages' | 'posts'
            value: string
          }>
        }

        if (archiveBlock.populateBy === 'collection') {
          const res = await payload.find({
            collection: archiveBlock.relationTo,
            limit: archiveBlock.limit || 10,
            sort: '-publishedDate',
            where: {
              ...(archiveBlock?.categories?.length > 0
                ? {
                    categories: {
                      in: archiveBlock.categories
                        .map((cat) => {
                          if (typeof cat === 'string') return cat
                          return cat.id
                        })
                        .join(','),
                    },
                  }
                : {}),
            },
          })

          return {
            ...block,
            populatedDocs: res.docs.map((thisDoc: Post) => ({
              relationTo: archiveBlock.relationTo,
              value: thisDoc.id,
            })),
            populatedDocsTotal: res.totalDocs,
          }
        }
      }

      return block
    }),
  )

  return {
    ...doc,
    layout: layoutWithArchive,
  }
}
