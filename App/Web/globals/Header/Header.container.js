import { connect } from 'react-redux'
import { toggleDrawer } from '../../../Modules/Header.modules'
import Header from './Header.component.js'

const mapDispatchToProps = {
  toggleDrawer
}

export default connect(null, mapDispatchToProps)(Header)
