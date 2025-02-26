import { useSelector, useDispatch } from 'react-redux'
import css from './Allstyle.module.css'
import { useEffect, useState } from 'react'
import trush from '../trash.svg'
import { addTask, delTask, canche } from '../redux/middleWare/logger'
import { filterChange } from '../redux/filters/filterSlise'

import { getTasks } from '../redux/middleWare/logger'
const TaslList = () => {
	const taskData = useSelector((state) => {
		return state.tasks.tasks
	})
	const filterData = useSelector((state) => {
		return state.filters.filters
	})
	// console.log(filterData)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getTasks())
	}, [dispatch])

	// const filteredTasks = taskData.filter((task) => {
	// 	console.log(task)
	// 	if (filterData === 'all') return true
	// 	if (filterData === 'active') return !task.completed
	// 	if (filterData === 'completed') return task.completed
	// 	return true
	// })
	console.log(taskData)
	const filteredTasks = taskData.filter((task) => {
		// console.log(task)
		// console.log(filterData.filters)
		if (filterData === 'all') return true
		if (filterData === 'active') return !task.completed
		if (filterData === 'completed') return task.completed
		return false
	})

	console.log(filteredTasks)
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
						onClick={() =>
							dispatch(addTask(document.getElementById('addtaskInp').value))
						}
					>
						add Task
					</button>
				</section>
				<section className={css.section}>
					<h2 className={css.title}>Filter by status</h2>
					<div className={css.wrapper}>
						<button onClick={() => dispatch(filterChange('all'))}>All</button>
						<button onClick={() => dispatch(filterChange('active'))}>
							Active
						</button>
						<button onClick={() => dispatch(filterChange('completed'))}>
							Completed
						</button>
					</div>
				</section>
			</header>

			<ul className={css.list}>
				{filteredTasks.map((data) => (
					<li className={css.item} key={data.id}>
						<input
							onChange={(e) => dispatch(canche(e.target.checked, data.id))}
							type="checkbox"
							checked={data.completed}
						/>
						<p>{data.text}</p>

						<button
							className={css.btnDEl}
							onClick={() => dispatch(delTask(data.id))}
						>
							<img className={css.btnDElImg} src={trush} />
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default TaslList
