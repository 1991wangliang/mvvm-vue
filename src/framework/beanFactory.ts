export class BeanFactory {
  map:Map<string, object> = new Map<string, object>()
  addBean (type:string, obj:object) {
    this.map.set(type, obj)
    console.log('addBean', obj)
  }

  getBean (type:string) :object {
    const obj = this.map.get(type)
    console.log('getBean', obj)
    if (obj === undefined) {
      return {}
    }
    return obj
  }
}

export const beanFactory = new BeanFactory()
