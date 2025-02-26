import { createAsyncThunk, nanoid } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://67bf3e01b2320ee050131a14.mockapi.io'

const getTasks = createAsyncThunk('Tasks/fetchAll', async (_, thunkApi) => {
	try {
		const response = await axios.get('/Tasks')
		return response.data
	} catch (err) {
		return thunkApi.rejectWithValue(err.message)
	}
})
const addTask = createAsyncThunk('Tasks/addTask', async (text, thunkApi) => {
	try {
		const response = await axios.post('/Tasks', {
			id: nanoid(),
			text: text,
			completed: false,
		})
		return response.data
	} catch (e) {
		return thunkApi.rejectWithValue(e.message)
	}
})

const delTask = createAsyncThunk('Tasks/delTask', async (taskId, thunkApi) => {
	try {
		const response = await axios.delete(`/Tasks/${taskId}`)
		return response.data
	} catch (e) {
		return thunkApi.rejectWithValue(e.message)
	}
})

const canche = createAsyncThunk(
	'Tasks/toggleCompleted',
	async (task, thunkApi) => {
		try {
			const response = await axios.put(`/Tasks/${task.id}`, {
				completed: !task.completed,
			})
			return response.data
		} catch (e) {
			return thunkApi.rejectWithValue(e.message)
		}
	}
)
export { getTasks, addTask, delTask, canche }
