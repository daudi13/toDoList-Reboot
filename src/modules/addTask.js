

export default class Task {
	tasks = [];

	add = desc => {
		const newTodo = {
			description: desc,
			completed: false,
			index: this.tasks.length + 1
		}
		this.tasks.push(newTodo);
	}


}