import { refs } from './js/refs';
import { addTasks, initTask } from './js/tasks';

initTask();

refs.form.addEventListener('submit', addTasks);
