import { connect } from 'react-redux'
import { fetchAdditionalContent } from './CoreLayout.modules.js'
import CoreLayout from './CoreLayout.component.js'

const mapDispatchToProps = {
  fetchAdditionalContent
}

const mapStateToProps = (state, ownProps) => ({
  billsFetching: state.bills.fetching
})

export default connect(mapStateToProps, mapDispatchToProps)(CoreLayout)
