import { AbsHelloAcitivity, beanFactory } from '@/views/HomeView.model'

class HelloAcitivity extends AbsHelloAcitivity {
  test = (): void => {
    this.hint('123-456')
  };

  hello (): void {
    this.name = 'hello'
  }
}

export const initBean = () => {
  const hello = new HelloAcitivity()
  beanFactory.addBean('HelloAcitivity', hello)
}
