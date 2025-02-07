// @ts-ignore
import { BlockDefinition } from 'blockly/core/blocks'
import { allTypesForCheck } from '../type-check/all-types'

export const calciumAssignmentName = 'calcium_assignment'

export function createCalciumAssignmentBlock({
  tooltip,
}: {
  tooltip: string
}): { [key: string]: BlockDefinition } {
  return {
    [calciumAssignmentName]: {
      init() {
        this.jsonInit({
          type: calciumAssignmentName,
          message0: '%1 = %2',
          args0: [
            {
              type: 'input_value',
              name: 'REF',
              check: [
                'calcium_variable',
                'calcium_attribute',
                'calcium_subscription',
                'calcium_comma',
              ],
            },
            {
              type: 'input_value',
              name: 'VALUE',
              check: allTypesForCheck,
            },
          ],
          inputsInline: true,
          previousStatement: null,
          nextStatement: null,
          colour: 210,
          tooltip,
          helpUrl: '',
        })
      },
    },
  }
}
