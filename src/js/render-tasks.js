import { refs } from "./refs";

export function renderTasks(array){
    const markup = array.map(({title, description})=> `<li class="task-list-item">
    <button class="task-list-item-btn">Delete</button>
    <h3>${title}</h3>
    <p>${description}</p>
</li>`).join('');
refs.taskList.innerHTML = markup;
}