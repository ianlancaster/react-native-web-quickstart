import { handleAction, createReducer } from '../../Utilities/handleAction'

export const toggleDrawer = () => ({ type: 'TOGGLE_DRAWER' })

handleAction('TOGGLE_DRAWER', (state, action) => ({
  drawerOpen: !state.drawerOpen
}))

const initialState = { drawerOpen: false }

export default createReducer(initialState)
