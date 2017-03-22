import { connect } from 'react-redux'
import CoreLayout from './CoreLayout.component.js'

const mapStateToProps = (state, ownProps) => ({
  drawerOpen: state.navigationDrawer.drawerOpen
})

export default connect(mapStateToProps, null)(CoreLayout)
