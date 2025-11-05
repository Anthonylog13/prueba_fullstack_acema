import {ITask} from '../types/task.types'
import {useTask,} from '../context/TaskContext'

interface Props {
    task: ITask;
}

export const TaskItem =({task}: Props) =>{
    const {updateTask, deleteTask} = useTask;

    const handleComplete = () =>{
        updateTask(task.id, {completed: !task.completed});
    };

    return (
        <div>
            <div>
                <h3> {task.title}</h3>
                <p>{task.description} </p>
            </div>
            <div>
                <input
                type= "checkbox"
                checked={task.completed}
                onChange={handleComplete}
                
                />
                <button onClick={() => deleteTask(task.id)}> Eliminar</button>
            </div>

        </div>
    )

}