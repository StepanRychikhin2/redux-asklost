import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'
import { fecthTasks } from './redux/middleWare/logger'
import { tasksReduser } from './redux/tasks/taskSlise'
import { filterReduser } from './redux/filters/filterSlise'
const store = configureStore({
	reducer: {
		tasks: tasksReduser,
		filters: filterReduser,
	},
}, applyMiddleware(thunk))
export { store }