// import { createStore } from 'redux'
// import { composeWithDevTools } from '@redux-devtools/extension'
// import { createReducer } from '@reduxjs/toolkit'
// import { filterChange } from './actions'

// const appState = {
// 	filters: 'all',
// }

// // const filterReduser = (state = appState, action) => {
// // 	if (action.type === 'filterRepla') {
// // 		console.log(state)
// // 		return {
// // 			...state,
// // 			filters: action.param,
// // 		}
// // 	} else {
// // 		return state
// // 	}
// // }
// const filterReduser = createReducer(appState, (builder) => {
// 	builder.addCase(filterChange, (state, action) => {
// 		return {
// 			...state,
// 			filters: action.payload.param,
// 		}
// 	})
// })
// export default filterReduser
