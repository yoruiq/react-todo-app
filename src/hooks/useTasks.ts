import { useCallback } from 'react'
import { useLocatStorage }  from './useLocalStorage'

export interface Task {
    id: number
    name: string
    completed: boolean
}

export function useTasks(initialValue: Task[] = []) {
  const [tasks, setTasks] = useLocatStorage<Task[]>('tasks', initialValue)

   console.log('📝 Tasks в useTasks:', tasks)

  const addTask = useCallback((newName: string) => {
    const newTask = {id: Date.now(), name: newName, completed: false}
    setTasks(prevTasks => [...prevTasks, newTask])
  }, [setTasks]);

  const deleteTask = useCallback((TaskId: number) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== TaskId))
  }, [setTasks])

  const toggleTask = useCallback((TaskId: number) => {
    setTasks(prevTasks => prevTasks.map(task => task.id === TaskId ? {...task, completed: !task.completed}: task))
  }, [setTasks])

  const clearCompleted = useCallback(() => {
    setTasks(prevTasks => prevTasks.filter(task => !task.completed))
  }, [setTasks])

  const totalTasks = tasks.length
  const completedTasks = tasks.filter(task => task.completed).length
  const activeTasks = totalTasks - completedTasks

  return {
    tasks, 

    addTask,
    deleteTask,
    toggleTask,
    clearCompleted,

    totalTasks,
    completedTasks,
    activeTasks
  }
}
