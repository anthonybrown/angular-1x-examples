function TodoController() {
	this.newTodo = '';
	this.list = [
		{
			title: 'My first todo',
			completed: true
		},
		{
			title: 'The second todo',
			completed: false
		},
		{
			title: 'The third todo',
			completed: false
		}];

		this.addTodo = function () {
			this.list.unshift({
				title: this.newTodo,
				completed: false
			});
			this.newTodo = '';
		};
}

angular
	.module('app')
	.controller('TodoController', TodoController);
