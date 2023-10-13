'use client'
import { useLivePreview } from '@payloadcms/live-preview-react'
import React from 'react'

import type { Project } from '../../../../payload/payload-types'

import { Blocks } from '../../../_components/Blocks'
import { ProjectHero } from '../../../_heros/ProjectHero'

export const ProjectClient: React.FC<{ project: Project }> = ({ project: initialProject }) => {
  const { data } = useLivePreview<Project>({
    depth: 1,
    initialData: initialProject,
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL,
  })

  return (
    <React.Fragment>
      <ProjectHero project={data} />
      <Blocks
        blocks={[
          ...(data.layout as any),
          {
            blockName: 'Related Projects',
            blockType: 'relatedPosts',
            docs: data.relatedProjects,
            introContent: [
              {
                children: [
                  {
                    text: 'Related projects',
                  },
                ],
                type: 'h4',
              },
              {
                children: [
                  {
                    text: 'The projects displayed here are individually selected for this page. Admins can select any number of related projects to display here and the layout will adjust accordingly. Alternatively, you could swap this out for the "Archive" block to automatically populate projects by category complete with pagination. To manage related projects, ',
                  },
                  {
                    children: [
                      {
                        text: 'navigate to the admin dashboard',
                      },
                    ],
                    type: 'link',
                    url: `/admin/collections/projects/${data.id}`,
                  },
                  {
                    text: '.',
                  },
                ],
                type: 'p',
              },
            ],
            relationTo: 'projects',
          },
        ]}
      />
    </React.Fragment>
  )
}
