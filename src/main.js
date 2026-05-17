import { refs } from './js/refs';
import { addTasks } from './js/tasks';

refs.form.addEventListener('submit', addTasks);
