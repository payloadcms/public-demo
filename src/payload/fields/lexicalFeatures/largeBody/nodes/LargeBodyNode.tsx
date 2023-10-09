/** @module @lexical/largeBody */
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { addClassNamesToElement, isHTMLAnchorElement } from '@lexical/utils'
import {
  $applyNodeReplacement,
  $createParagraphNode,
  createCommand,
  type DOMConversionMap,
  type DOMConversionOutput,
  DOMExportOutput,
  type EditorConfig,
  ElementNode,
  type GridSelection,
  isHTMLElement,
  type LexicalCommand,
  LexicalEditor,
  type LexicalNode,
  type NodeKey,
  type NodeSelection,
  ParagraphNode,
  type RangeSelection,
  type SerializedElementNode,
  type Spread,
} from 'lexical'

export type SerializedLargeBodyNode = SerializedElementNode

/** @noInheritDoc */
export class LargeBodyNode extends ElementNode {
  constructor({ key }: { key?: NodeKey }) {
    super(key)
  }

  static clone(node: LargeBodyNode): LargeBodyNode {
    return new LargeBodyNode({
      key: node.__key,
    })
  }

  static getType(): string {
    return 'largeBody'
  }

  canBeEmpty(): true {
    return true
  }

  canInsertTextAfter(): true {
    return true
  }

  canInsertTextBefore(): true {
    return true
  }

  createDOM(config: EditorConfig): HTMLElement {
    const element = document.createElement('span')
    addClassNamesToElement(element, 'largeBody')
    return element
  }
  updateDOM(prevNode: LargeBodyNode, dom: HTMLElement): boolean {
    return false
  }

  exportDOM(editor: LexicalEditor): DOMExportOutput {
    const { element } = super.exportDOM(editor)

    if (element && isHTMLElement(element)) {
      if (this.isEmpty()) element.append(document.createElement('br'))

      const formatType = this.getFormatType()
      element.style.textAlign = formatType

      const direction = this.getDirection()
      if (direction) {
        element.dir = direction
      }
    }

    return {
      element,
    }
  }

  static importJSON(serializedNode: SerializedLargeBodyNode): LargeBodyNode {
    const node = $createLargeBodyNode()
    node.setFormat(serializedNode.format)
    node.setIndent(serializedNode.indent)
    node.setDirection(serializedNode.direction)
    return node
  }

  exportJSON(): SerializedElementNode {
    return {
      ...super.exportJSON(),
      type: this.getType(),
    }
  }

  isInline(): false {
    return false
  }

  // Mutation

  insertNewAfter(_: RangeSelection, restoreSelection?: boolean): ParagraphNode {
    const newBlock = $createParagraphNode()
    const direction = this.getDirection()
    newBlock.setDirection(direction)
    this.insertAfter(newBlock, restoreSelection)
    return newBlock
  }

  collapseAtStart(): true {
    const paragraph = $createParagraphNode()
    const children = this.getChildren()
    children.forEach(child => paragraph.append(child))
    this.replace(paragraph)
    return true
  }
}

export function $createLargeBodyNode(): LargeBodyNode {
  return $applyNodeReplacement(new LargeBodyNode({}))
}

export function $isLargeBodyNode(node: LexicalNode | null | undefined): node is LargeBodyNode {
  return node instanceof LargeBodyNode
}
