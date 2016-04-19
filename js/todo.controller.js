
function TodoController() {
	this.newTodo = '';
	this.list = [
		{
			title: 'My first todo in the list',
			completed: false
		},
		{
			title: 'Grab a bit to eat',
			completed: false
		},
		{
			title: 'Learn AngularJS and Angular 2',
			completed: false
		},
		{
			title: 'Go to the pub',
			completed: true
		},
	];

	this.addTodo = function () {
		this.list.unshift({
			title: this.newTodo,
			completed: false
		});
		this.newTodo = '';
	};
	this.removeTodo = function (item,index) {
		this.list.splice(index, 1)
	}

	this.getRemaining = function() {
		return this.list.filter(function (item) {
			return !item.completed
		});
	}

}

angular
	.module('app')
	.controller('TodoController', TodoController);




/*
var things = [10,20,30,40,50,60,70];

things.forEach(function (thing, index) {
	console.log(('This is the index: ' +  index),  ('this is the thing: ' + thing));
})
*/
