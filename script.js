const strongTags = document.querySelectorAll('strong');

function highlight() {
    //Write your code here
	for(let tag of strongTags) {
		tag.style.color = 'green';
	}

}


function return_normal() {
    //Write your code here
	for(let tag of strongTags) {
		tag.style.color = 'black';
	}
    
}
