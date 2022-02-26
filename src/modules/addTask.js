

export default class Task {
	tasks = [];

	add = desc => {
		const newTodo = {
			description: desc,
			completed: false,
			index: this.tasks.length + 1
		}
		this.tasks.push(newTodo);
		this.populate(this.tasks)
	}

	populate = (arrs) => {
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
		this.tasks = []
}
}