const data = null;
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://rapidapi.p.rapidapi.com/youtube-info/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D9FCRaSwU3W8");
xhr.setRequestHeader("x-rapidapi-host", "youtube-video-info1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "6e92fdb663msh900313c7a7bf8e7p11e9eejsnc1e97604ce00");

xhr.send(data);