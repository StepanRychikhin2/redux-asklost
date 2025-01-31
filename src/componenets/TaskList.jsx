import { useSelector, useDispatch } from 'react-redux'
import css from './Allstyle.module.css'
import { useState } from 'react'
import trush from "../trash.svg"



const TaslList = () => {
	const taskData = useSelector((state) => {
		return state.tasks
	})
	const filterData = useSelector((state) => {
		return state.filters
	})
	const dispatch = useDispatch()
	function addTask(repla) {
		const maxId = taskData.reduce((max, repl) => {
			return repl.id > max ? repl.id : max
		}, 0)
		console.log(taskData)
		console.log(...taskData)
		console.log(repla)
		dispatch({
			type: 'addTask',
			taskawd: { id: maxId + 1, text: repla, completed: false },
		})
	}

	function delTask(repla) {
		console.log(repla)
		dispatch({
			type: 'delTask',
			id: repla,
		})
	}
	function canche(repla, id) {
		console.log(repla)
		dispatch({
			type: 'replace',
			param: repla,
			id: id,
		})
	}
	function filterChange(repla) {
		console.log(repla)
		dispatch({
			type: 'filterRepla',
			param: repla,
		})
	}

	const filteredTasks = taskData.filter((task) => {
		if (filterData === 'all') return true
		if (filterData === 'active') return !task.completed
		if (filterData === 'completed') return task.completed
		return true
	})
	const activeTask = taskData.filter((task) => {
		if (true === task.completed) return !task.completed
		return true
	})
	const completTask = taskData.filter((task) => {
		if (false === task.completed) return task.completed
		return true
	})
	return (
		<div className={css.container}>
			<header className={css.wrapper}>
				<section className={css.section}>
					<h2 className={css.title}>Tasks</h2>
					<div>
						<p className={css.text}>Active: {activeTask.length}</p>
						<p className={css.text}>Completed: {completTask.length}</p>
					</div>
				</section>
				<section>
					<input id="addtaskInp" placeholder="addTask" />
					<button
						onClick={() => addTask(document.getElementById('addtaskInp').value)}
					>
						add Task
					</button>
				</section>
				<section className={css.section}>
					<h2 className={css.title}>Filter by status</h2>
					<div className={css.wrapper}>
						<button onClick={() => filterChange('all')}>All</button>
						<button onClick={() => filterChange('active')}>Active</button>
						<button onClick={() => filterChange('completed')}>Completed</button>
					</div>
				</section>
			</header>

			<ul className={css.list}>
				{filteredTasks.map((data) => (
					<li className={css.item} key={data.id}>
						<input
							onChange={(e) => canche(e.target.checked, data.id)}
							type="checkbox"
							checked={data.completed}
						/>
						<p>{data.text}</p>
						
						<button className={css.btnDEl} onClick={() => delTask(data.id)}><img className={css.btnDElImg} src={trush}/></button>
					</li>
				))}
				
			</ul>
		</div>
	)
}

export default TaslList
