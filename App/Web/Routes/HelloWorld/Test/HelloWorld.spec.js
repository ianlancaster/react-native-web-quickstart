import { ContainerWrapper, ComponentWrapper, props } from './HelloWorld.setup'

describe('HELLO WORLD TESTS', () => {
  describe('Hello World Container', () => {
    it('should render the HelloWorld component', () => {
      expect(ContainerWrapper)
    })

    it('should render an h2 with the text "hello world!"', () => {
      expect(ContainerWrapper.find({ title: 'helloWorld' }).length).toBe(1)
      expect(ContainerWrapper.find({ title: 'helloWorld' }).text()).toContain('Hello World!')
    })
  })

  describe('Hello World Component', () => {
    it('should call toggleColor when the text is clicked', () => {
      expect(props.toggleColor.mock.calls.length).toBe(0)
      ComponentWrapper.find({ title: 'helloWorld' }).simulate('click')
      expect(props.toggleColor.mock.calls.length).toBe(1)
    })
  })
})
