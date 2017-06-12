
/**
 * All things OO
 */

// 遍历文件夹，全部导出?

export default class Thing {
  constructor() {
    if (new.target !== 'undefined') {
      console.log(new.target)
      // this.name = name;
    } else {
      throw new Error('必须使用 new 生成实例')
    }
  }
}
