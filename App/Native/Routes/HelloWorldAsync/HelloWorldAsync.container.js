import { connect } from 'react-redux'
import { asyncToggleColor } from '../../../Modules/HelloWorldAsync.modules'
import HelloWorldAsync from './HelloWorldAsync.component'

const mapDispatchToProps = {
  asyncToggleColor
}

const mapStateToProps = (state, ownProps) => {
  const { color, loading } = state.helloWorldAsync

  return {
    color,
    loading
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorldAsync)
