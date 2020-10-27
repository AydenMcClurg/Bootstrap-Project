const data = null;
const alt1 = document.querySelector('.alt1')

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
	if (xhr.readyState === 4);
	if (xhr.status === 200){
		const data = JOSN.parse(xhr.response);
		console.log(data);

	}else if (xhr.status === 404){
		alert('the page is broken')
	}else if (xhr.status === 500){
		alert('now the page is really broken and youre the one who broke it')
	}
});

xhr.open("GET", "https://rapidapi.p.rapidapi.com/youtube-info/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DkvocYWN-0Go");
xhr.setRequestHeader("x-rapidapi-host", "youtube-video-info1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "3bdbd25aeamsh294c0129f70de54p18765ajsn4efbd466b24c");

xhr.send(data);