import * as Blockly from 'blockly/core'
// @ts-ignore
import { Shape } from 'blockly/core/renderers/common/constants'

export const calciumRendererName = 'calcium_renderer'

// extends zelos
export class CalciumRenderer extends Blockly.zelos.Renderer {
  constructor(name: string) {
    super(name)
  }

  protected makeConstants_(): Blockly.zelos.ConstantProvider {
    return new CalciumConstantProvider()
  }
}

class CalciumConstantProvider extends Blockly.zelos.ConstantProvider {
  constructor() {
    super()
  }

  shapeFor(connection: Blockly.RenderedConnection): Shape {
    if (connection.type !== Blockly.INPUT_VALUE) {
      return super.shapeFor(connection)
    }
    const block = connection.getSourceBlock()
    if (
      block.type.includes('_if') ||
      block.type.includes('_elif') ||
      block.type.includes('_while') ||
      (block.type.includes('_not') && !block.type.includes('bitwise'))
    ) {
      return this.HEXAGONAL!
    }
    return this.ROUNDED!
  }
}
