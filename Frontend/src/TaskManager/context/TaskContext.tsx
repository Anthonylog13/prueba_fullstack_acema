import { createContext, useContext, useReducer, ReactNode } from "react";
import { TaskState, taskReducer } from "../reducers/taskReducer";
import { ITask } from "../types/task.types";
import taskApi from "../api/tastApi";

interface TaskContextProps extends TaskState {
  fetchTasks: () => void;
  createTask: (task: { title: string, description?: string }) => void;
  updateTask: (id: number, updates: Partial<ITask>) => void;
  deleteTask: (id: number) => void;
}

const TaskContext =createContext<TaskContextProps | undefined > (undefined);

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTasks debe estar dentro de un provider");
  return context;
};

const initialState: TaskState = {
  tasks: [],
};

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const fetchTasks= async () =>{
    const res= await taskApi.get<ITask[]>('/tasks');
    dispatch({type: 'SET_TASKS', payload: res.data});
  };

  const createTask = async (task: {title: string; description?: string}) =>{
    const res= await taskApi.post<ITask>('/tasks', task);
    dispatch({type:'ADD_TASKS', payload: res.data})

  }
  const updateTask = async (id: number, updates: Partial<ITask>) =>{
    const res = await taskApi.patch<ITask>(`/tasks/${id}`, updates);
    dispatch({type:'UPDATE_TASKS', payload: res.data})

  }
  
  const deleteTask = async (id: number) =>{
    await taskApi.delete(`/tasks/${id}`);
    dispatch({type:'DELETE_TASK', payload: id});
  };

  return (
    <TaskContext.Provider value ={{ ...state, fetchTasks, createTask, updateTask,deleteTask }}>
      {children}

    </TaskContext.Provider>
  )

};
