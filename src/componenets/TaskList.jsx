import { useSelector, useDispatch } from 'react-redux'
import css from './Allstyle.module.css'

const TaslList = () => {
	const taskData = useSelector((state) => {
		return state
	})

	const dispatch = useDispatch()
	function addTask(repla) {
		console.log(repla)
		dispatch({
			type: 'addTask',
			taskawd: { id: 123, task: repla, completed: false },
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

			<ul>
				{console.log(taskData)}
				{/* {taskData.map((data) => {
		console.log(data)
                    // dispatch({ type: 'replace', id: data.id, replace: data.repla })
					return (
						<li key={data.id}>
							<p>{data.text}</p>
							<input
								// onChange={chanChexkBox(data.id, data.completed)}
								type="checkbox"
								// checked={data.completed}
							/>
							<button>del</button>
						</li>
					)
				})} */}
			</ul>
		</>
	)
}

export default TaslList
