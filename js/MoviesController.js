function MoviesController () {

	this.newTitle = '';
	this.newRelease = '';
	this.onChange = function () {
		console.log('Change', this.newTitle);
	}
	this.onFocus = function () {
		console.log('FOCUS!');
	}
	this.onBlur = function () {
		console.log(this.newTitle);
	}
	this.addMovie = function () {
		this.likesList.push();
		this.favorites.unshift({
			title: this.newTitle,
			year: this.newRelease
		});
		this.newTitle = '';
		this.newRelease = '';
	}

	this.likesList = [];

	this.unlike = function (index) {
		this.likesList.splice(index, 1)
	}

	this.addToLikes = function (movie) {
		this.likesList.push(movie);
	}

	this.favorites = [
		{
			title: 'The Shawshank Redemption',
			imdb: 'tt0111161/?ref_=nv_sr_1',
			year: '1994',
			popular: true,
			img: 'M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_UX182_CR0,0,182,268_AL_.jpg'
		},
		{
			title: 'Star Wars, a new hope',
			imdb: 'tt0076759/?ref_=nv_sr_3',
			year: '1977',
			popular: true,
			img: 'M/MV5BOTIyMDY2NGQtOGJjNi00OTk4LWFhMDgtYmE3M2NiYzM0YTVmXkEyXkFqcGdeQXVyNTU1NTcwOTk@._V1_UX182_CR0,0,182,268_AL_.jpg'
		},
		{
			title: 'Inception',
			imdb: 'tt1375666/?ref_=nv_sr_1',
			year: '2010',
			popular: false,
			img: '/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg'
		},
		{
			title: 'The Fifth Element',
			imdb: 'tt0119116/?ref_=nv_sr_1',
			year: '1997',
			popular: true,
			img: 'M/MV5BMTkzOTkwNTI4N15BMl5BanBnXkFtZTYwMDIzNzI5._V1_UY268_CR5,0,182,268_AL_.jpg'
		},
		{
			title: 'Limitless',
			imdb:'tt1219289/?ref_=nv_sr_2',
			year: '2010',
			popular: false,
			img: 'M/MV5BMTY3NjczNzc5Nl5BMl5BanBnXkFtZTcwMzA2MzQyNA@@._V1_UX182_CR0,0,182,268_AL_.jpg'
		},
		{
			title: 'Jaws',
			imdb: 'tt0073195/?ref_=nv_sr_1',
			year: '1975',
			popular: true,
			img: 'M/MV5BNDcxODkyMjY4MF5BMl5BanBnXkFtZTgwOTk5NTc5MDE@._V1_UX182_CR0,0,182,268_AL_.jpg'
		},
		{
			title: 'The Matrix',
			imdb: 'tt0133093?ref_=tt_ov_i',
			year: '1999',
			popular: true,
			img: 'M/MV5BMTkxNDYxOTA4M15BMl5BanBnXkFtZTgwNTk0NzQxMTE@._V1_UX182_CR0,0,182,268_AL_.jpg'
		},
		{
			title: 'Taxi Driver',
			imdb: 'tt0075314/?ref_=rvi_tt',
			year: '1976',
			popular: true,
			img: '/M/MV5BMTQ1Nzg3MDQwN15BMl5BanBnXkFtZTcwNDE2NDU2MQ@@._V1_UY268_CR7,0,182,268_AL_.jpg'
		},
		{
			title: 'Saving Private Ryan',
			imdb: 'tt0120815/?ref_=nv_sr_1',
			year: '1998',
			popular: true,
			img: 'M/MV5BNjczODkxNTAxN15BMl5BanBnXkFtZTcwMTcwNjUxMw@@._V1_UY268_CR7,0,182,268_AL_.jpg'
		}
	];
}

angular
	.module('app')
	.controller('MoviesController', MoviesController)
