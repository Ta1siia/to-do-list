import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

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
  console.log(task);
  event.target.reset();
}
