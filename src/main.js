import { refs } from './js/refs';
import { addTasks, deleteTask, initTask } from './js/tasks';

initTask();

refs.form.addEventListener('submit', addTasks);
refs.taskList.addEventListener('click', deleteTask)