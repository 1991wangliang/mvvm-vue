import { reactive } from 'vue'
import { beanFactory } from '@/framework/beanFactory'

export * from '@/framework/beanFactory'

export abstract class AbsHelloAcitivity {
  name: string

  abstract test():void

  abstract hello():void

  hint (str:string) {
    alert(str)
  }

  constructor () {
    this.name = 'this is a name '
  }
}

export const loadBean = () => {
  // register HelloAcitivity Bean
  return reactive(beanFactory.getBean('HelloAcitivity'))
}
