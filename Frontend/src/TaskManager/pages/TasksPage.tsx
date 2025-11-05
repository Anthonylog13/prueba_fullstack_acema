import {useEffect} from 'react'
import {useTasks} from '../context/TaskContext'
import {TaskForm} from '../components/TaskForm'
import {TaskItem} from '../components/TaskItem'


export const TasksPage =() =>{
    const {tasks, fetchTasks} = useTasks();
    useEffect(() => {
        fetchTasks();
    },[])

   
    return (
        <div>
            <h1> Task Manager</h1>
            <TaskForm/>
            <div>
                {tasks.map(task => (
                    <TaskItem key= {task.id} task={task}/>
                ))}
            </div>

        </div>
    )

}