import { ContainerWrapper, ComponentWrapper, props } from './HelloWorld.setup'

describe('HELLO WORLD ASYNC TESTS', () => {
  describe('HelloWorldAsync Container', () => {
    it('should render the HelloWorldAsync component', () => {
      expect(ContainerWrapper)
    })

    it('should render an h2 with the text "hello world!"', () => {
      expect(ContainerWrapper.find({ title: 'helloWorldAsync' }).length).toBe(1)
      expect(ContainerWrapper.find({ title: 'helloWorldAsync' }).text()).toContain('Hello World!')
    })
  })

  describe('HelloWorldAsync Component', () => {
    it('should call asyncToggleColor when the text is clicked', () => {
      expect(props.asyncToggleColor.mock.calls.length).toBe(0)
      ComponentWrapper.find({ title: 'helloWorldAsync' }).simulate('click')
      expect(props.asyncToggleColor.mock.calls.length).toBe(1)
    })
  })
})
