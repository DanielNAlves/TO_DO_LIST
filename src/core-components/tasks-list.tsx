import Button from "../components/button";
import PlusIcon from "../assets/icons/plus.svg?react";
import TaskItem from "./task-item";
import useTasks from "../hooks/use-tasks";
import useTask from "../hooks/use-task";
import { TaskState, type Task } from "../models/task";

export default function TasksList() {
  const { tasks, isLoadingTasks } = useTasks();
  const { prepareTask, updateTask, updateTaskStatus, deleteTask } = useTask();

  function handleNewTask() {
    prepareTask();
  }

  return (
    <>
      <section>
        <Button
          icon={PlusIcon}
          className="w-full"
          onClick={handleNewTask}
          handling={isLoadingTasks}
          disabled={
            tasks.some((task) => task.state === TaskState.Creating) ||
            isLoadingTasks
          }
        >
          Nova tarefa
        </Button>
      </section>

      <section className="space-y-2">
        {!isLoadingTasks &&
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              updateTask={updateTask}
              updateTaskStatus={updateTaskStatus}
              deleteTask={deleteTask}
            />
          ))}

        {isLoadingTasks && (
          <>
            <TaskItem
              task={{} as Task}
              updateTask={() => {}}
              updateTaskStatus={() => {}}
              deleteTask={() => {}}
              loading
            />
            <TaskItem
              task={{} as Task}
              updateTask={() => {}}
              updateTaskStatus={() => {}}
              deleteTask={() => {}}
              loading
            />
            <TaskItem
              task={{} as Task}
              updateTask={() => {}}
              updateTaskStatus={() => {}}
              deleteTask={() => {}}
              loading
            />
          </>
        )}
      </section>
    </>
  );
}
