import { connect } from 'react-redux'
import { toggleDrawer } from '../../../Modules/NavigationDrawer/NavigationDrawer.modules'
import NavigationDrawer from './NavigationDrawer.component.js'

const mapStateToProps = (state, ownProps) => ({
  drawerOpen: state.navigationDrawer.drawerOpen
})

const mapDispatchToProps = {
  toggleDrawer
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationDrawer)
