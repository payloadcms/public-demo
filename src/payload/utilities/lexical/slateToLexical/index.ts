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

interface SlateNode {
  children?: SlateNode[]
  type: string
  [key: string]: any
}

export function convertSlateToLexical(slateData: SlateNode[]): SerializedEditorState {
  return {
    root: {
      type: 'root',
      format: '',
      indent: 0,
      version: 1,
      children: convertSlateNodesToLexical(slateData, true, 'root'),
      direction: 'ltr',
    },
  }
}

function convertSlateNodesToLexical(
  slateNodes: SlateNode[],
  canContainParagraphs: boolean,
  parentNode: string,
): SerializedLexicalNode[] {
  return (
    slateNodes.map(node => {
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
          convertULNode(node, parentNode)
        case 'li':
          convertLINode(node, parentNode)
        case 'upload':
          convertUploadNode(node, parentNode)
        default:
          console.warn('slateToLexical > No converter found for node type: ' + node.type)
          return // or some default behavior
      }
    }) || []
  )
}

function convertTextNode(node: SlateNode, parentNode: string): SerializedTextNode {
  return {
    detail: 0,
    format: 0,
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
    direction: 'ltr',
    format: node.textAlign || '',
    indent: 0,
    type: 'heading',
    version: 1,
    tag: node.type as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6', // Slate puts the tag (h1 / h2 / ...) inside of node.type
    children: convertSlateNodesToLexical(node.children || [], false, 'heading'),
  }
}

function convertLinkNode(node: SlateNode, parentNode: string): SerializedLinkNode {
  return {
    children: convertSlateNodesToLexical(node.children || [], false, 'link'),
    direction: 'ltr',
    format: '',
    indent: 0,
    type: 'link',
    version: 1,
    fields: {
      url: node.url || undefined,
      newTab: node.newTab || false,
      linkType: node.linkType || 'custom',
      doc: node.doc || undefined,
    },
  }
}

function convertRelationshipNode(node: SlateNode, parentNode: string): SerializedRelationshipNode {
  return {
    format: '',
    type: 'relationship',
    version: 1,
    value: {
      id: node?.value?.id || '',
    },
    relationTo: node.relationTo,
  }
}

function convertULNode(node: SlateNode, parentNode: string): SerializedListNode {
  return {
    children: convertSlateNodesToLexical(node.children || [], false, 'list'),
    direction: 'ltr',
    format: '',
    indent: 0,
    type: 'list',
    version: 1,
    listType: 'bullet',
    start: 1,
    tag: 'ul',
  }
}

function convertLINode(node: SlateNode, parentNode: string): SerializedListItemNode {
  return {
    children: convertSlateNodesToLexical(node.children || [], false, 'listitem'),
    direction: 'ltr',
    format: '',
    indent: 0,
    type: 'listitem',
    version: 1,
    value: 1,
    checked: undefined,
  }
}

function convertUploadNode(node: SlateNode, parentNode: string): SerializedUploadNode {
  return {
    format: '',
    type: 'upload',
    version: 1,
    relationTo: node.relationTo,
    value: {
      id: node.value?.id || '',
    },
    fields: {
      ...node.fields,
    },
  }
}
