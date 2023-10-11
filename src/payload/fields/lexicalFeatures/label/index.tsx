import type { FeatureProvider } from '@payloadcms/richtext-lexical'

import { $setBlocksType } from '@lexical/selection'
import { $findMatchingParent } from '@lexical/utils'
import {
  FormatSectionWithEntries,
  SlashMenuOption,
  getSelectedNode,
} from '@payloadcms/richtext-lexical'
import { $getSelection, $isRangeSelection } from 'lexical'

import { LabelIcon } from './Icon'
import './index.scss'
import { $createLabelNode, $isLabelNode, LabelNode } from './nodes/LabelNode'

export const LabelFeature = (): FeatureProvider => {
  return {
    feature: () => ({
      floatingSelectToolbar: {
        sections: [
          FormatSectionWithEntries([
            {
              ChildComponent: LabelIcon,
              isActive: ({ selection }) => {
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
      nodes: [
        {
          node: LabelNode,
          type: LabelNode.getType(),
        },
      ],
      props: null,
      slashMenu: {
        options: [
          {
            options: [
              new SlashMenuOption(`Label`, {
                Icon: LabelIcon,
                keywords: ['label'],
                onSelect: () => {
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
    }),
    key: 'label',
  }
}
