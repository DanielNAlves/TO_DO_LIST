import React from "react";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import InputCheckbox from "../components/input-checkbox";
import Text from "../components/text";
import TrashIcon from "../assets/icons/trash.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import InputText from "../components/input";
import { TaskState, type Task } from "../models/task";
import { cx } from "class-variance-authority";
import Skeleton from "../components/skeleton";

interface TaskItemProps {
  task: Task;
  updateTask: (id: string, payload: { title: string }) => void;
  updateTaskStatus: (id: string, concluded: boolean) => void;
  updateTaskEdit: (id: string, edit: boolean) => void;
  deleteTask: (id: string) => void;
  loading?: boolean;
  isUpdatingTask?: boolean;
  isDeletingTask?: boolean;
}

export default function TaskItem({
  task,
  loading,
  updateTask,
  deleteTask,
  updateTaskEdit,
  isUpdatingTask,
  isDeletingTask,
  updateTaskStatus,
}: TaskItemProps) {
  const [taskTitle, setTaskTitle] = React.useState(task.title || "");

  function handleEditTask() {
    updateTaskEdit(task.id, true);
  }

  function handleExitEditTask() {
    if (task.state === TaskState.Creating) {
      deleteTask(task.id);
    }
    updateTaskEdit(task.id, false);
  }

  function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(e.target.value || "");
  }

  async function handleSaveTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    updateTaskEdit(task.id, true);

    await updateTask(task.id, { title: taskTitle });
  }

  function handleChangeTaskStatus(e: React.ChangeEvent<HTMLInputElement>) {
    const { checked } = e.target;
    updateTaskStatus(task.id, checked);
  }

  async function handleDeleteTask() {
    await deleteTask(task.id);
  }

  return (
    <Card size="md">
      {!task.edit ? (
        <div className="flex items-center gap-4">
          <InputCheckbox
            loading={loading}
            checked={task?.concluded}
            onChange={handleChangeTaskStatus}
          />
          {!loading ? (
            <Text className={cx("flex-1", { "line-through": task?.concluded })}>
              {task?.title}
            </Text>
          ) : (
            <Skeleton className="flex-1 h-6" />
          )}
          <div className="flex gap-1">
            <ButtonIcon
              icon={TrashIcon}
              loading={loading}
              variant="tertiary"
              handling={isDeletingTask}
              onClick={handleDeleteTask}
            />
            <ButtonIcon
              type="button"
              loading={loading}
              icon={PencilIcon}
              variant="tertiary"
              onClick={handleEditTask}
            />
          </div>
        </div>
      ) : (
        <form onSubmit={handleSaveTask} className="flex items-center gap-4">
          <InputText
            required
            autoFocus
            value={taskTitle}
            className="flex-1"
            onChange={handleChangeTaskTitle}
          />
          <div className="flex gap-1">
            <ButtonIcon
              icon={XIcon}
              type="button"
              variant="secondary"
              handling={isDeletingTask}
              onClick={handleExitEditTask}
            />
            <ButtonIcon
              type="submit"
              icon={CheckIcon}
              variant="primary"
              handling={isUpdatingTask}
            />
          </div>
        </form>
      )}
    </Card>
  );
}
