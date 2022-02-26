import Task from "./addTask.js";


const newTask = new Task();
export const populate = (arrs) => {
	const listBlock = document.querySelector('.listblock');
	arrs.map(arr => {
		const listItem = document.createElement('li');
		listItem.classList.add('task-container');
		listItem.setAttribute('class', 'task-container');
		const checkBox = document.createElement('input');
		checkBox.setAttribute('type', 'checkbox');
		checkBox.classList.add('check-box');
		const task = document.createElement('p');
		task.setAttribute('contenteditable', 'true');
		task.innerText = arr.description;
		task.classList.add('txt');
		const btn = document.createElement('button');
		const icon = document.createElement('i');
		icon.classList.add('fa', 'fa-trash-o');

		listBlock.appendChild(listItem);
		listItem.appendChild(checkBox);
		listItem.appendChild(task);
		listItem.appendChild(btn);
		btn.appendChild(icon);
	})

	newTask.tasks = [];
}


export const insertItem = () => {
const form = document.querySelector('form');
const input = document.querySelector('.inputField');
	
	form.addEventListener('keydown', (e) => {
		if (e.key === 'Enter') {
			e.preventDefault()
			newTask.add(input.value);
			input.value = ''
			populate(newTask.tasks)
		}
	})
}