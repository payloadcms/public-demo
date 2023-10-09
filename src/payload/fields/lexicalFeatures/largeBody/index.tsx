import { $setBlocksType } from '@lexical/selection'
import { FeatureProvider, SlashMenuOption } from '@payloadcms/richtext-lexical'
import { SectionWithEntries } from '@payloadcms/richtext-lexical/dist/field/features/format/common/floatingSelectToolbarSection'
import { $getSelection, $isRangeSelection } from 'lexical'

import { LargeBodyIcon } from './Icon'
import { $createLargeBodyNode, LargeBodyNode } from './nodes/LargeBodyNode'

import './index.scss'

export const LargeBodyFeature = (): FeatureProvider => {
  return {
    feature: ({ resolvedFeatures, unsanitizedEditorConfig }) => ({
      nodes: [
        {
          node: LargeBodyNode,
          type: LargeBodyNode.getType(),
        },
      ],
      floatingSelectToolbar: {
        sections: [
          SectionWithEntries([
            {
              ChildComponent: LargeBodyIcon,
              isActive: ({ editor, selection }) => false,
              key: 'largeBody',
              label: `Large Body`,
              onClick: ({ editor }) => {
                //setHeading(editor, headingSize)
                editor.update(() => {
                  const selection = $getSelection()
                  if ($isRangeSelection(selection)) {
                    $setBlocksType(selection, () => $createLargeBodyNode())
                  }
                })
              },
              order: 20,
            },
          ]),
        ],
      },
      slashMenu: {
        options: [
          {
            options: [
              new SlashMenuOption(`Large Body`, {
                Icon: LargeBodyIcon,
                keywords: ['largeBody'],
                onSelect: ({ editor }) => {
                  const selection = $getSelection()
                  if ($isRangeSelection(selection)) {
                    $setBlocksType(selection, () => $createLargeBodyNode())
                  }
                },
              }),
            ],
            title: 'Basic',
          },
        ],
      },
      props: null,
    }),
    key: 'largeBody',
  }
}
