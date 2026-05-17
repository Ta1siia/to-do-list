import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { renderTasks } from './render-tasks';
import { getFromLs, saveInLs, TASKS_LS_KEY } from './local-storage-api';

const tasks = getFromLs(TASKS_LS_KEY) || [];

export function addTasks(event) {
  event.preventDefault();
  //   const title = event.target.elements.taskName.value.trim();
  //   const description = event.target.elements.taskDescription.value.trim();
  const { taskName, taskDescription } = event.target.elements;
  const title = taskName.value.trim();
  const description = taskDescription.value.trim();
  if (!title || !description) {
    iziToast.info({ message: 'Ви маєте заповнити усі поля!' });
    return;
  }
  const task = {
    title,
    description,
  };
  tasks.push(task);
  renderTasks(tasks);
  saveInLs(TASKS_LS_KEY, tasks);
  event.target.reset();
};

export function initTask() {
  renderTasks(tasks);
};
