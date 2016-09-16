// Create Song Instances
var song1 = new Song("First Song","Artist1", 10);
var song2 = new Song("Second Song","Artist2", 6);
var song3 = new Song("Thrid Song","Artist3", 5);
var song4 = new Song("Fourth Song","Artist4", 3);


var playlist = new PlayList();

playlist.add(song1);
playlist.add(song2);
playlist.add(song3);
playlist.add(song4);

var ulElement = document.querySelector('.playlist');

playlist.render(ulElement);

var playButton = document.getElementById('play');
var stopButton = document.getElementById('stop');
var nextButton = document.getElementById('next');

playButton.onclick = function() {
	playlist.play();
	playlist.render(ulElement);
}

stopButton.onclick = function() {
	playlist.stop();
	playlist.render(ulElement);
}

nextButton.onclick = function() {
	playlist.next();
	playlist.render(ulElement);
}

