import { useState } from "react";
import useLocalStorage from "use-local-storage";

import { delay } from "../helpers/utils";
import { TASKS_KEY, TaskState, type Task } from "../models/task";

export default function useTask() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);
  const [isUpdatingTask, setIsUpdatingTask] = useState<boolean>(false);
  const [isDeletingTask, setIsDeletingTask] = useState<boolean>(false);

  function prepareTask() {
    setTasks([
      ...tasks,
      {
        title: "",
        edit: true,
        concluded: false,
        state: TaskState.Creating,
        id: Math.random().toString(36).substring(2, 9),
      },
    ]);
  }

  async function updateTask(id: string, payload: { title: Task["title"] }) {
    try {
      setIsUpdatingTask(true);
      await delay(1000);

      if (tasks.some((task) => task.title === payload.title && !task.edit)) {
        alert("Tarefa ja adicionada!");
        return;
      }

      setTasks(
        tasks
          .map((task) =>
            task.id === id
              ? { ...task, edit: false, state: TaskState.Created, ...payload }
              : task
          )
          .sort((a, b) => Number(a.concluded) - Number(b.concluded))
      );
    } catch (e) {
      console.log(e);
    } finally {
      setIsUpdatingTask(false);
    }
  }

  function updateTaskEdit(id: string, edit: boolean) {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, edit } : task)));
  }

  function updateTaskStatus(id: string, concluded: boolean) {
    setTasks(
      tasks
        .map((task) => (task.id === id ? { ...task, concluded } : task))
        .sort((a, b) => Number(a.concluded) - Number(b.concluded))
    );
  }

  async function deleteTask(id: string) {
    setIsDeletingTask(true);

    await delay(1000);

    setTasks(tasks.filter((tasks) => tasks.id !== id));

    setIsDeletingTask(false);
  }

  return {
    prepareTask,
    updateTask,
    updateTaskStatus,
    deleteTask,
    isUpdatingTask,
    isDeletingTask,
    updateTaskEdit,
  };
}
