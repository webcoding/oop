
/**
 * Shape 形状
 */

import Base from '../'

export default class Shape extends Base {
  constructor(props = {}) {
    super(props)
    this.type = props.type
  }

  getType() {
    return this.type
  }
}
