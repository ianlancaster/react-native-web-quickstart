import { connect } from 'react-redux'
import NavigationDrawer from './NavigationDrawer.component.js'

const mapStateToProps = (state, ownProps) => ({
  drawerOpen: state.navigationDrawer.drawerOpen
})

export default connect(mapStateToProps, null)(NavigationDrawer)
