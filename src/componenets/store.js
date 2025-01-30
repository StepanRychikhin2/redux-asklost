import { createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
const appState = {
	tasks: [
		{ id: 0, text: 'Learn HTML and CSS', completed: true },
		{ id: 1, text: 'Get good at JavaScript', completed: true },
		{ id: 2, text: 'Master React', completed: false },
		{ id: 3, text: 'Discover Redux', completed: false },
		{ id: 4, text: 'Build amazing apps', completed: false },
	],
	filters: {
		status: 'all',
	},
}

const reduser = (state = appState, action) => {
	if (action.type === 'replace') {
		return console.log(action)
	} else if (action.type === 'addTask') {
		return { tasks: [...state.tasks, action.taskawd] }
	} else if (action.type === 'delTask') {
		return {...state,
			tasks: state.tasks.filter(task => task.id !== action.id)}
	} else {
		return state
	}
}

console.log(appState)
const store = createStore(reduser, appState, composeWithDevTools())
export default store
