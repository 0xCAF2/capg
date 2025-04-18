import * as Blockly from 'blockly'

import './message'
import './tooltip'

import '../../block/assignment'
import '../../block/compound-assignment'

import '../../block/arithmetic'
import '../../block/attribute'
import '../../block/logical'
import '../../block/subscript'
import '../../block/not'

import '../../block/break_continue'

import '../../block/return'

import * as Lang from 'blockly/msg/ja'

// @ts-ignore
Blockly.setLocale(Lang)

import { CALCIUM_RENDERER_NAME } from '../../editor/calcium-renderer'

import { buildEditor } from '../../editor'

export function buildCalciumEditor(parent: HTMLElement) {
  // renderer

  buildEditor({
    parent,
    options: {
      renderer: CALCIUM_RENDERER_NAME,
      toolboxUrl: 'toolbox_ja-jp.json',
    },
  })
}
