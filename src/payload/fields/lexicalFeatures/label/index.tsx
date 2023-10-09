import { $setBlocksType } from '@lexical/selection'
import { $findMatchingParent } from '@lexical/utils'
import {
  FeatureProvider,
  FormatSectionWithEntries,
  getSelectedNode,
  SlashMenuOption,
} from '@payloadcms/richtext-lexical'
import { $getSelection, $isRangeSelection } from 'lexical'

import { LabelIcon } from './Icon'
import { $createLabelNode, $isLabelNode, LabelNode } from './nodes/LabelNode'

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
          FormatSectionWithEntries([
            {
              ChildComponent: LabelIcon,
              isActive: ({ editor, selection }) => {
                if ($isRangeSelection(selection)) {
                  const selectedNode = getSelectedNode(selection)
                  const labelParent = $findMatchingParent(selectedNode, $isLabelNode)
                  return labelParent != null
                }
                return false
              },
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
