import { reactive, onMounted } from 'vue'
import { beanFactory } from '@/lib'

export abstract class AbsHello {
  name: string | undefined

  abstract test():void

  abstract hello():void
}

export const init = () => {
  return reactive(beanFactory.getBean('AbsHello'))
}
