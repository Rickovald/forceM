var sorted_list = songs.slice(0);
sorted_list.sort(function(a,b) {
	return b.priority - a.priority;
});

 
for (var key in sorted_list) {
	console.log(sorted_list.length)
	let value = sorted_list[key],
		song_list = document.querySelector(".song_list"),
		song_block = document.createElement("div"),
		song_name = document.createElement("p");
		sont_priority = document.createElement("p");


	song_block.classList.add('priority_' + value.priority);
	sont_priority.textContent = value.priority;
	song_name.textContent = key + ". " + value.performer + ' - ' + value.name;

	song_list.appendChild(song_block);
	
	song_block.appendChild(song_name);
	song_block.appendChild(sont_priority);
	
}