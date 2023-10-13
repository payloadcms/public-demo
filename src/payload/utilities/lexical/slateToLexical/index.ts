import type { SerializedListItemNode, SerializedListNode } from '@lexical/list'
import type { SerializedHeadingNode } from '@lexical/rich-text'
import type {
  SerializedLinkNode,
  SerializedRelationshipNode,
  SerializedUploadNode,
} from '@payloadcms/richtext-lexical'
import type {
  SerializedEditorState,
  SerializedLexicalNode,
  SerializedParagraphNode,
  SerializedTextNode,
} from 'lexical'

import {
  IS_BOLD,
  IS_CODE,
  IS_ITALIC,
  IS_STRIKETHROUGH,
  IS_SUBSCRIPT,
  IS_SUPERSCRIPT,
  IS_UNDERLINE,
} from '../lexicalToReact/nodeFormat'

interface SlateNode {
  [key: string]: any
  children?: SlateNode[]
  type?: string // doesn't always have type, e.g. for paragraphs
}

export function convertSlateToLexical(slateData: SlateNode[]): SerializedEditorState {
  return {
    root: {
      children: convertSlateNodesToLexical(slateData, true, 'root'),
      direction: 'ltr',
      format: '',
      indent: 0,
      type: 'root',
      version: 1,
    },
  }
}

function convertSlateNodesToLexical(
  slateNodes: SlateNode[],
  canContainParagraphs: boolean,
  parentNode: string,
): SerializedLexicalNode[] {
  return (
    slateNodes.map((node) => {
      if (!('type' in node)) {
        if (canContainParagraphs) {
          // This is a paragraph node. They do not have a type property in Slate
          return convertParagraphNode(node, parentNode)
        } else {
          // This is a simple text node. canContainParagraphs may be false if this is nested inside of a paragraph already, since paragraphs cannot contain paragraphs
          return convertTextNode(node, parentNode)
        }
      }
      switch (node.type) {
        case 'p':
          return convertParagraphNode(node, parentNode)
        case 'h1':
        case 'h2':
        case 'h3':
        case 'h4':
        case 'h5':
        case 'h6':
          return convertHeadingNode(node, parentNode)
        case 'link':
          return convertLinkNode(node, parentNode)
        case 'relationship':
          return convertRelationshipNode(node, parentNode)
        case 'ul':
          return convertULNode(node, parentNode)
        case 'li':
          return convertLINode(node, parentNode)
        case 'upload':
          return convertUploadNode(node, parentNode)
        default:
          // eslint-disable-next-line no-console
          console.warn('slateToLexical > No converter found for node type: ' + node.type)
          return // or some default behavior
      }
    }) || []
  )
}

function convertTextNode(node: SlateNode, parentNode: string): SerializedTextNode {
  return {
    detail: 0,
    format: convertNodeToFormat(node),
    mode: 'normal',
    style: '',
    text: node.text,
    type: 'text',
    version: 1,
  }
}

function convertParagraphNode(node: SlateNode, parentNode: string): SerializedParagraphNode {
  return {
    children: convertSlateNodesToLexical(node.children || [], false, 'paragraph'),
    direction: 'ltr',
    format: '',
    indent: 0,
    type: 'paragraph',
    version: 1,
  }
}

function convertHeadingNode(node: SlateNode, parentNode: string): SerializedHeadingNode {
  return {
    children: convertSlateNodesToLexical(node.children || [], false, 'heading'),
    direction: 'ltr',
    format: '',
    indent: 0,
    tag: node.type as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6', // Slate puts the tag (h1 / h2 / ...) inside of node.type
    type: 'heading',
    version: 1,
  }
}

function convertLinkNode(node: SlateNode, parentNode: string): SerializedLinkNode {
  return {
    children: convertSlateNodesToLexical(node.children || [], false, 'link'),
    direction: 'ltr',
    fields: {
      doc: node.doc || undefined,
      linkType: node.linkType || 'custom',
      newTab: node.newTab || false,
      url: node.url || undefined,
    },
    format: '',
    indent: 0,
    type: 'link',
    version: 1,
  }
}

function convertRelationshipNode(node: SlateNode, parentNode: string): SerializedRelationshipNode {
  return {
    format: '',
    relationTo: node.relationTo,
    type: 'relationship',
    value: {
      id: node?.value?.id || '',
    },
    version: 1,
  }
}

function convertULNode(node: SlateNode, parentNode: string): SerializedListNode {
  return {
    children: convertSlateNodesToLexical(node.children || [], false, 'list'),
    direction: 'ltr',
    format: '',
    indent: 0,
    listType: 'bullet',
    start: 1,
    tag: 'ul',
    type: 'list',
    version: 1,
  }
}

function convertLINode(node: SlateNode, parentNode: string): SerializedListItemNode {
  return {
    checked: undefined,
    children: convertSlateNodesToLexical(node.children || [], false, 'listitem'),
    direction: 'ltr',
    format: '',
    indent: 0,
    type: 'listitem',
    value: 1,
    version: 1,
  }
}

function convertUploadNode(node: SlateNode, parentNode: string): SerializedUploadNode {
  return {
    fields: {
      ...node.fields,
    },
    format: '',
    relationTo: node.relationTo,
    type: 'upload',
    value: {
      id: node.value?.id || '',
    },
    version: 1,
  }
}

function convertNodeToFormat(node: SlateNode): number {
  let format = 0
  if (node.bold) {
    format = format | IS_BOLD
  }
  if (node.italic) {
    format = format | IS_ITALIC
  }
  if (node.strikethrough) {
    format = format | IS_STRIKETHROUGH
  }
  if (node.underline) {
    format = format | IS_UNDERLINE
  }
  if (node.subscript) {
    format = format | IS_SUBSCRIPT
  }
  if (node.superscript) {
    format = format | IS_SUPERSCRIPT
  }
  if (node.code) {
    format = format | IS_CODE
  }
  return format
}
