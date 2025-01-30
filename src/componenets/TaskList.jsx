import { useSelector, useDispatch } from 'react-redux'
import css from './Allstyle.module.css'

const TaslList = () => {
	const taskData = useSelector((state) => {
		return state
	})

	const dispatch = useDispatch()
	function addTask(repla) {
		const maxId = taskData.tasks.reduce((max, repl) => {
			return repl.id > max ? repl.id : max
		}, 0)
		console.log(taskData)
		console.log(...taskData.tasks)
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
	function canche(repla) {
		console.log(repla)
		dispatch({
			type: 'ComtTask',
			param: repla,
		})
	}
	return (
		<>
			<header className={css.wrapper}>
				<section className={css.section}>
					<h2 className={css.title}>Tasks</h2>
					<div>
						<p className={css.text}>Active: 0</p>
						<p className={css.text}>Completed: 0</p>
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
						<button>All</button>
						<button>Active</button>
						<button>Completed</button>
					</div>
				</section>
			</header>

			<ul className={css.list}>
				{taskData.tasks.map((data) => {
					// console.log(data)
					// dispatch({ type: 'replace', id: data.id, replace: data.repla })
					return (
						<li key={data.id}>
							<p>{data.text}</p>
							<input
								// onChange={console.log("cak")}
								type="checkbox"
								// checked={data.completed}
							/>
							<button onClick={(e) => delTask(data.id)}>del</button>
						</li>
					)
				})}
			</ul>
		</>
	)
}

export default TaslList
