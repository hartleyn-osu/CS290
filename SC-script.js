var playFirst = function() {
	SC.stream('/partyomo/come-and-see-me-ft-drake').then(function(player){
		player.play();
	});
};

document.body.children[0].addEventListener("click", playFirst); 