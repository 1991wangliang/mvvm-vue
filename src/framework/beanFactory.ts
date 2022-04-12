class BeanFactory {
  map:Map<string, object> = new Map<string, object>()
  addBean(type:string, obj:object) {
    this.map.set(type, obj)
  }

  getBean(type:string) :object {
    const obj = this.map.get(type)
    if (obj === undefined) {
      return {}
    }
    return obj
  }
}

export const beanFactory = new BeanFactory()
