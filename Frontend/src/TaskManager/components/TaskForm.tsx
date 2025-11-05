import {useState} from 'react'
import {useTask} from '../context/TaskContext'

export const TaskForm = () => {
    const [title, setTitle]= useState('');
    const [description, setDescription]= useState('')
    const {createTask} =useTask();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title) return;
        createTask({title, description});
        setTitle('')
        setDescription('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
             type= "text" 
             placeholder= "Titulo de la tarea"
             value={title}
             onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
            placeholder= "Descripcion (opcional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            
            />
            <button type ="submit">
                Agregar Tarea
            </button>

        </form>
    )
}