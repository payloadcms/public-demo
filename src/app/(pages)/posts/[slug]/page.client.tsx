'use client'
import { useLivePreview } from '@payloadcms/live-preview-react'
import React from 'react'

import type { Comment, Post } from '../../../../payload/payload-types'

import { Blocks } from '../../../_components/Blocks'
import { PremiumContent } from '../../../_components/PremiumContent'
import { PostHero } from '../../../_heros/PostHero'

export const PostClient: React.FC<{ comments: Comment[]; post: Post }> = ({
  comments,
  post: initialPost,
}) => {
  const { data } = useLivePreview<Post>({
    depth: 1,
    initialData: initialPost,
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL,
  })

  return (
    <React.Fragment>
      <PostHero post={data} />
      <Blocks blocks={data.layout} />
      {data.enablePremiumContent && <PremiumContent disableTopPadding postSlug={data.slug} />}
      <Blocks
        blocks={[
          {
            blockName: 'Comments',
            blockType: 'comments',
            comments,
            doc: data,
            introContent: [
              {
                children: [
                  {
                    text: 'Comments',
                  },
                ],
                type: 'h4',
              },
              {
                children: [
                  {
                    text: 'Authenticated users can leave comments on this post. All new comments are given the status "draft" until they are approved by an admin. Draft comments are not accessible to the public and will not show up on this page until it is marked as "published". To manage all comments, ',
                  },
                  {
                    children: [
                      {
                        text: 'navigate to the admin dashboard',
                      },
                    ],
                    type: 'link',
                    url: '/admin/collections/comments',
                  },
                  {
                    text: '.',
                  },
                ],
                type: 'p',
              },
            ],
            relationTo: 'posts',
          },
          {
            blockName: 'Related Posts',
            blockType: 'relatedPosts',
            docs: data.relatedPosts,
            introContent: [
              {
                children: [
                  {
                    text: 'Related posts',
                  },
                ],
                type: 'h4',
              },
              {
                children: [
                  {
                    text: 'The posts displayed here are individually selected for this page. Admins can select any number of related posts to display here and the layout will adjust accordingly. Alternatively, you could swap this out for the "Archive" block to automatically populate posts by category complete with pagination. To manage related posts, ',
                  },
                  {
                    children: [
                      {
                        text: 'navigate to the admin dashboard',
                      },
                    ],
                    type: 'link',
                    url: `/admin/collections/posts/${data.id}`,
                  },
                  {
                    text: '.',
                  },
                ],
                type: 'p',
              },
            ],
            relationTo: 'posts',
          },
        ]}
        disableTopPadding
      />
    </React.Fragment>
  )
}
