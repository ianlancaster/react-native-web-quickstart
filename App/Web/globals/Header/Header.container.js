import { connect } from 'react-redux'
import { toggleDrawer } from './Header.modules.js'
import Header from './Header.component.js'

const mapDispatchToProps = {
  toggleDrawer
}

export default connect(null, mapDispatchToProps)(Header)
