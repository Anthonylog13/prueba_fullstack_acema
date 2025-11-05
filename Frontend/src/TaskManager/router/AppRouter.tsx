import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { TasksPage } from '../pages/TasksPage'

export const AppRouter = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element = {<TasksPage/>}/>
        </Routes>
        
        </BrowserRouter>
    )
}