import { reactive, onMounted } from 'vue'
import { beanFactory } from '@/lib'

export abstract class AbsHello {
  name?: string | undefined

  abstract test?():void

  abstract hello?():void
}

let hello: object = reactive({})

export const helloWorld = () => {
  onMounted(() => {
    debugger
    hello = beanFactory.getBean('AbsHello')
  })
  return {
    hello
  }
}
