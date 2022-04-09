import { AbsHello } from './helloWorld'
import { beanFactory } from '@/lib'

export class Hello extends AbsHello {
  test = (): void => {
    alert(123)
  };

  hello (): void {
    this.name = 'hello'
  }
}

export const init = () => {
  const hello = new Hello()
  beanFactory.addBean('AbsHello', hello)
}
