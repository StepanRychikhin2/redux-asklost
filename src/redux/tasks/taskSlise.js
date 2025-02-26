import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'
import { getTasks, addTask, delTask, canche } from '../middleWare/logger'
const appState = {
	tasks: [],
	error: null,
	isLoading: false,
}

function handlePending(state) {
	state.isLoading = true
}
function handleRejected(state, actions) {
	state.error = actions.payload
	state.isLoading = false
}
const tasksSlice = createSlice({
	name: 'tasks',
	initialState: appState,
	extraReducers: (builder) => {
		builder
			.addCase(getTasks.rejected, handleRejected)
			.addCase(getTasks.pending, handlePending)
			.addCase(getTasks.fulfilled, (state, action) => {
				state.tasks = action.payload
				state.isLoading = false
			})

			.addCase(addTask.rejected, handleRejected)
			.addCase(addTask.pending, handlePending)
			.addCase(addTask.fulfilled, (state, action) => {
				state.tasks = [...state.tasks, action.payload]
				state.isLoading = false
			})
			.addCase(delTask.pending, handlePending)
			.addCase(delTask.rejected, handleRejected)
			.addCase(delTask.fulfilled, (state, action) => {
				state.isLoading = false
				state.error = null
				const index = state.tasks.findIndex(
					(task) => task.id === action.payload.id
				)
				state.tasks.splice(index, 1)
			})
			.addCase(canche.pending, handlePending)
			.addCase(canche.fulfilled, (state, action) => {
				state.isLoading = false
				state.error = null
				// const index = state.tasks.findIndex(
				// 	(task) => task.id === action.payload.id
				// )
				// state.tasks.splice(index, 1, action.payload)
               
            })
			.addCase(canche.rejected, handleRejected)
	},
})
// export const { canche, delTask, addTask } = tasksSlice.actions
export const tasksReduser = tasksSlice.reducer
