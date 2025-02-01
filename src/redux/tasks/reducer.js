import { createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import { createReducer } from '@reduxjs/toolkit'
import { delTask, addTask, canche } from './actions'
const appState = {
	tasks: [
		{ id: 0, text: 'Learn HTML and CSS', completed: true },
		{ id: 1, text: 'Get good at JavaScript', completed: true },
		{ id: 2, text: 'Master React', completed: false },
		{ id: 3, text: 'Discover Redux', completed: false },
		{ id: 4, text: 'Build amazing apps', completed: false },
	],
}

// const tasksReduser = (state = appState, action) => {
// 	if (action.type === 'replace') {
// 		console.log(state)
// 		return {
// 			...state,
// 			tasks: state.tasks.map((elem) =>
// 				elem.id === action.id ? { ...elem, completed: action.param } : elem
// 			),
// 		}
// 	} else if (action.type === 'addTask') {
// 		return { tasks: [...state.tasks, action.taskawd] }
// 	} else if (action.type === 'delTask') {
// 		return {
// 			...state,
// 			tasks: state.tasks.filter((task) => task.id !== action.id),
// 		}
// 	} else {
// 		return state
// 	}
// }

export const tasksReduser = createReducer(appState, (builder) => {
	builder
		.addCase(addTask, (state, action) => {
			return {...state,
                 tasks: [...state.tasks, action.payload] }
		})
		.addCase(delTask, (state, action) => {
			return {
				...state,
				tasks: state.tasks.filter((task) => task.id !== action.payload.id),
			}
		})
		.addCase(canche, (state, action) => {
			return {
				...state,
				tasks: state.tasks.map((elem) =>
					elem.id === action.payload.id ? { ...elem, completed: action.payload.param } : elem
				),
			}
		})
})

