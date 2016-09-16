/**
 * Song constructor
 * @constructor
 * @param {string} name - name of the song
 * @param {string} artist - name of the artist
 * @param {number} duration - duration of the song
 */

function Song(name, artist, duration) {
	this.name = name;
	this.artist = artist;
	this.duration = duration;
	this.isPlaying = false;
}

// Play the song
Song.prototype.play = function() {
	this.isPlaying = true;
}

// Stop the song
Song.prototype.stop = function() {
	this.isPlaying = false;
}

// Render Song
Song.prototype.toHTML = function() {
	var htmlString = '<li ' ;
	if (this.isPlaying === true) {
		htmlString = htmlString + 'class="current"';
	}
	htmlString = htmlString + '>' + this.name + ' ' + this.artist + ' ' + this.duration + '</li>';

	return htmlString;
}
