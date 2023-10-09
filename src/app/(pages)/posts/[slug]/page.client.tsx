'use client'
import React from 'react'
import { useLivePreview } from '@payloadcms/live-preview-react'

import { Comment, Post } from '../../../../payload/payload-types'
import { Blocks } from '../../../_components/Blocks'
import { PremiumContent } from '../../../_components/PremiumContent'
import { PostHero } from '../../../_heros/PostHero'

export const PostClient: React.FC<{ post: Post; comments: Comment[] }> = ({
  post: initialPost,
  comments,
}) => {
  const { data } = useLivePreview<Post>({
    initialData: initialPost,
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL,
    depth: 1,
  })

  return (
    <React.Fragment>
      <PostHero post={data} />
      <Blocks blocks={data.layout} />
      {data.enablePremiumContent && (
        <PremiumContent postSlug={data.slug as string} disableTopPadding />
      )}
      <Blocks
        disableTopPadding
        blocks={[
          {
            blockType: 'comments',
            blockName: 'Comments',
            relationTo: 'posts',
            introContent: [
              {
                type: 'h4',
                children: [
                  {
                    text: 'Comments',
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    text: 'Authenticated users can leave comments on this post. All new comments are given the status "draft" until they are approved by an admin. Draft comments are not accessible to the public and will not show up on this page until it is marked as "published". To manage all comments, ',
                  },
                  {
                    type: 'link',
                    url: '/admin/collections/comments',
                    children: [
                      {
                        text: 'navigate to the admin dashboard',
                      },
                    ],
                  },
                  {
                    text: '.',
                  },
                ],
              },
            ],
            doc: data,
            comments,
          },
          {
            blockType: 'relatedPosts',
            blockName: 'Related Posts',
            relationTo: 'posts',
            introContent: [
              {
                type: 'h4',
                children: [
                  {
                    text: 'Related posts',
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    text: 'The posts displayed here are individually selected for this page. Admins can select any number of related posts to display here and the layout will adjust accordingly. Alternatively, you could swap this out for the "Archive" block to automatically populate posts by category complete with pagination. To manage related posts, ',
                  },
                  {
                    type: 'link',
                    url: `/admin/collections/posts/${data.id}`,
                    children: [
                      {
                        text: 'navigate to the admin dashboard',
                      },
                    ],
                  },
                  {
                    text: '.',
                  },
                ],
              },
            ],
            docs: data.relatedPosts,
          },
        ]}
      />
    </React.Fragment>
  )
}
