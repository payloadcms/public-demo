import { $setBlocksType } from '@lexical/selection'
import { FeatureProvider, SlashMenuOption } from '@payloadcms/richtext-lexical'
import { SectionWithEntries } from '@payloadcms/richtext-lexical/dist/field/features/format/common/floatingSelectToolbarSection'
import { $getSelection, $isRangeSelection } from 'lexical'

import { LabelIcon } from './Icon'
import { $createLabelNode, LabelNode } from './nodes/LabelNode'

import './index.scss'

export const LabelFeature = (): FeatureProvider => {
  return {
    feature: ({ resolvedFeatures, unsanitizedEditorConfig }) => ({
      nodes: [
        {
          node: LabelNode,
          type: LabelNode.getType(),
        },
      ],
      floatingSelectToolbar: {
        sections: [
          SectionWithEntries([
            {
              ChildComponent: LabelIcon,
              isActive: ({ editor, selection }) => false,
              key: 'label',
              label: `Label`,
              onClick: ({ editor }) => {
                //setHeading(editor, headingSize)
                editor.update(() => {
                  const selection = $getSelection()
                  if ($isRangeSelection(selection)) {
                    $setBlocksType(selection, () => $createLabelNode())
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
              new SlashMenuOption(`Label`, {
                Icon: LabelIcon,
                keywords: ['label'],
                onSelect: ({ editor }) => {
                  const selection = $getSelection()
                  if ($isRangeSelection(selection)) {
                    $setBlocksType(selection, () => $createLabelNode())
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
    key: 'label',
  }
}
