// lib/mdx-plugins/unwrap-images.js
// This plugin unwraps images from paragraph tags

import { visit } from 'unist-util-visit'

export function remarkUnwrapImages() {
  return (tree) => {
    visit(tree, (node) => {
      if (
        node.type === 'paragraph' &&
        node.children?.length === 1 &&
        node.children[0].type === 'image'
      ) {
        // Replace the paragraph node with just the image node
        Object.assign(node, {
          type: 'image',
          url: node.children[0].url,
          title: node.children[0].title,
          alt: node.children[0].alt,
          children: undefined,
        })
      }
    })
  }
}