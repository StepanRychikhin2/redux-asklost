// // function addTask(repla) {
// // 		const maxId = taskData.reduce((max, repl) => {
// // 			return repl.id > max ? repl.id : max
// // 		}, 0)
// // 		console.log(taskData)
// // 		console.log(...taskData)
// // 		console.log(repla)
// // 		dispatch({
// // 			type: 'addTask',
// // 			taskawd: { id: maxId + 1, text: repla, completed: false },
// // 		})
// // 	}

// // 	function delTask(repla) {
// // 		console.log(repla)
// // 		dispatch({
// // 			type: 'delTask',
// // 			id: repla,
// // 		})
// // 	}
// // 	function canche(repla, id) {
// // 		console.log(repla)
// // 		dispatch({
// // 			type: 'replace',
// // 			param: repla,
// // 			id: id,
// // 		})
// // 	}
// import { createAction } from '@reduxjs/toolkit'
// import { nanoid } from '@reduxjs/toolkit'

// const addTask = createAction('tasks/addTask', (repla) => {
//     return {
//         payload: {
// 		id: nanoid(),
// 		text: repla,
// 		completed: false,
// 	}
//     }
	
// })

// const delTask = createAction('tasks/delTask', (repla) => {
// 	return {
//          payload: {
// 		id: repla,
// 	}
//     }
   
// })
// const canche = createAction('tasks/replace', (repla, id) => {
// 	return {
//          payload: {
// 		param: repla,
// 		id: id,
// 	}
//     }
   
// })
// export { delTask, addTask, canche }
