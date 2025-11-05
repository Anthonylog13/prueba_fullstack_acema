import {ITask} from '../types/task.types'

export type TaskAction =
| { type: 'SET_TASKS'; payloand: ITask[]}
| { type: 'ADD_TASKS'; payloand: ITask}
| { type: 'UPDATE_TASKS'; payloand: ITask}
| { type: 'DELETE_TASK'; payloand: number}

export interface TaskState {
    tasks: ITask[];
}

export const taskReducer=(state: TaskState, action:TaskAction): TaskState =>{
    switch (action.type){
        case 'SET_TASKS':
            return {
                ...state,
                tasks: action.payloand
            };
        case 'ADD_TASKS':
            return {
                ...state,
                tasks: [...state.tasks, action.payloand],
            }
        case 'UPDATE_TASKS':
            return{
                ...state,
                tasks: state.tasks.map((task) =>
                task.id === action.payloand.id ? action.payloand: task
            ),
            };
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payloand),
    
            };
            default:
                return state;
    }

}