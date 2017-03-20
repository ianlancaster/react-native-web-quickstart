import { connect } from 'react-redux'
import { toggleColor } from '../../../Modules/HelloWorld.modules'
import HelloWorld from './HelloWorld.component'

const mapDispatchToProps = {
  toggleColor
}

const mapStateToProps = (state, ownProps) => ({
  color: state.helloWorld.color
})

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld)
