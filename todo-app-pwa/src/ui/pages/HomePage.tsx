import TaskForm from "../components/task/TaskForm"
import TaskList from "../components/task/TaskList"

function HomePage() {
  return (
    <>
      <TaskForm />
      <h3>Lista de tareas</h3>
      <TaskList />
    </>
  )
}

export default HomePage
