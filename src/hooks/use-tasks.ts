import React from "react";
import useLocalStorage from "use-local-storage";

import { delay } from "../helpers/utils";
import { TASKS_KEY, TaskState, type Task } from "../models/task";

export default function useTasks() {
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [tasksData] = useLocalStorage<Task[]>(TASKS_KEY, []);
  const [isLoadingTasks, setIsLoadingTasks] = React.useState<boolean>(true);

  async function fetchTasks() {
    if (isLoadingTasks) {
      await delay(2000);
      setIsLoadingTasks(false);
    }
    setTasks(tasksData);
  }

  React.useEffect(() => {
    fetchTasks();
  }, [tasksData]);

  return {
    tasks,
    createdTasksCount: tasks.filter(
      (task: Task) => task.state === TaskState.Created
    ).length,
    concludedTasksCount: tasks.filter((task: Task) => task.concluded).length,
    isLoadingTasks,
  };
}
