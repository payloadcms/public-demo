'use client'
import React from 'react'
import { useLivePreview } from '@payloadcms/live-preview-react'

import { Project } from '../../../../payload/payload-types'
import { Blocks } from '../../../_components/Blocks'
import { ProjectHero } from '../../../_heros/ProjectHero'

export const ProjectClient: React.FC<{ project: Project }> = ({ project: initialProject }) => {
  const { data } = useLivePreview<Project>({
    initialData: initialProject,
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL,
    depth: 1,
  })

  return (
    <React.Fragment>
      <ProjectHero project={data} />
      <Blocks
        blocks={[
          ...data.layout,
          {
            blockType: 'relatedPosts',
            blockName: 'Related Projects',
            relationTo: 'projects',
            introContent: [
              {
                type: 'h4',
                children: [
                  {
                    text: 'Related projects',
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    text: 'The projects displayed here are individually selected for this page. Admins can select any number of related projects to display here and the layout will adjust accordingly. Alternatively, you could swap this out for the "Archive" block to automatically populate projects by category complete with pagination. To manage related projects, ',
                  },
                  {
                    type: 'link',
                    url: `/admin/collections/projects/${data.id}`,
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
            docs: data.relatedProjects,
          },
        ]}
      />
    </React.Fragment>
  )
}
