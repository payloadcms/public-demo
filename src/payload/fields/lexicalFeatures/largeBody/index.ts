import type { FeatureProvider } from '@payloadcms/richtext-lexical'

import { $setBlocksType } from '@lexical/selection'
import { $findMatchingParent } from '@lexical/utils'
import {
  FormatSectionWithEntries,
  SlashMenuOption,
  getSelectedNode,
} from '@payloadcms/richtext-lexical'
import { $getSelection, $isRangeSelection } from 'lexical'

import { $createLargeBodyNode, $isLargeBodyNode, LargeBodyNode } from './nodes/LargeBodyNode'
import './index.scss'

export const LargeBodyFeature = (): FeatureProvider => {
  return {
    feature: () => ({
      floatingSelectToolbar: {
        sections: [
          FormatSectionWithEntries([
            {
              ChildComponent: () =>
                import('./Icon').then((module) => module.LargeBodyIcon),
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
      nodes: [
        {
          node: LargeBodyNode,
          type: LargeBodyNode.getType(),
        },
      ],
      props: null,
      slashMenu: {
        options: [
          {
            options: [
              new SlashMenuOption(`Large Body`, {
                Icon: () =>
                  import('./Icon').then((module) => module.LargeBodyIcon),
                keywords: ['largeBody'],
                onSelect: ({ editor }) => {
                  const selection = $getSelection()
                  if ($isRangeSelection(selection)) {
                    $setBlocksType(selection, () => $createLargeBodyNode())
                  }
                },
              }),
            ],
            key: 'Basic',
            displayName: 'Basic',
          },
        ],
      },
    }),
    key: 'largeBody',
  }
}
