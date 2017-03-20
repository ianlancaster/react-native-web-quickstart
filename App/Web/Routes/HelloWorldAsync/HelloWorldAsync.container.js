import { connect } from 'react-redux'
import { asyncToggleColor } from '../../../Modules/HelloWorldAsync.modules'
import HelloWorldAsync from './HelloWorldAsync.component'

const mapDispatchToProps = {
  asyncToggleColor
}

const mapStateToProps = (state, ownProps) => ({
  color: state.helloWorldAsync.color
})

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorldAsync)
