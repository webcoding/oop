
import Base from '../'

export default class Animal extends Base {
  constructor(props) {
    super(props);
    this.kind = kind;
  }

  legs() {
    switch (this.kind) {
      case "insect": return 6;
      case "spider": return 8;
    }
  }
}
