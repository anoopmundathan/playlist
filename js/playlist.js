/**
 * PlayList constructor
 * @constructor
 */

function PlayList() {
	this.songs = [];
	this.currentIndex = 0;
}

PlayList.prototype.add = function(song) {
	this.songs.push(song);
}

PlayList.prototype.play = function() {
	this.songs[this.currentIndex].play();
}

PlayList.prototype.stop = function() {
	this.songs[this.currentIndex].stop();
}

PlayList.prototype.next = function() {
	this.stop();
	this.currentIndex++;
	if (this.currentIndex === this.songs.length) {
		this.currentIndex = 0
	}
	this.play();
}

PlayList.prototype.render = function(element) {
	var htmlString = "";
	for (var i = 0; i < this.songs.length; i++) {
		htmlString = htmlString + this.songs[i].toHTML();
	}
	element.innerHTML = htmlString;
}


