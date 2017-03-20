import { connect } from 'react-redux'
import CoreLayout from './CoreLayout.component.js'

const mapStateToProps = (state, ownProps) => ({
  exampleProp: state.CoreLayout.exampleProp
})

export default connect(mapStateToProps, null)(CoreLayout)
