import { $setBlocksType } from '@lexical/selection'
import { $findMatchingParent } from '@lexical/utils'
import {
  FeatureProvider,
  FormatSectionWithEntries,
  getSelectedNode,
  SlashMenuOption,
} from '@payloadcms/richtext-lexical'
import { $getSelection, $isRangeSelection } from 'lexical'

import { LargeBodyIcon } from './Icon'
import { $createLargeBodyNode, $isLargeBodyNode, LargeBodyNode } from './nodes/LargeBodyNode'

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
          FormatSectionWithEntries([
            {
              ChildComponent: LargeBodyIcon,
              isActive: ({ editor, selection }) => {
                if ($isRangeSelection(selection)) {
                  const selectedNode = getSelectedNode(selection)
                  const largeBodyParent = $findMatchingParent(selectedNode, $isLargeBodyNode)
                  return largeBodyParent != null
                }
                return false
              },
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
