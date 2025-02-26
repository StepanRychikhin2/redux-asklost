import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'

const appState = {
	filters: 'all',
}

const filterSlise = createSlice({
	name: 'tasks',
	initialState: appState,
	reducers: {
		filterChange: {
			reducer(state, action) {
				return {
					...state,
					filters: action.payload.param,
				}
			},
			prepare(repla) {
				return {
					payload: {
						param: repla,
					},
				}
			},
		},
	},
})
export const { filterChange } = filterSlise.actions
export const filterReduser = filterSlise.reducer
