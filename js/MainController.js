function MainController () {
	this.text = 'Hello Angular';
	this.doesNotExist = 'I do not exist'
	this.myObj = {
		one: 'First Key or key one',
		two: 'Second key or Key Two',
		three: 'Key 3,ridiculous isn\'t it?'
	}
	this.myArr = ['my', 'angular', 'app'];
}

angular
	.module('app')
	.controller('MainController', MainController);
