////////Use DOM Selection to select items we want to change with AJAX////////////
const num1song = document.querySelector('.num1song');
const num2song = document.querySelector('.num2song');
const num3song = document.querySelector('.num3song');
const num4song = document.querySelector('.num4song');
const num5song = document.querySelector('.num5song');
const num6song = document.querySelector('.num6song');
const num7song = document.querySelector('.num7song');
const num8song = document.querySelector('.num8song');
const num9song = document.querySelector('.num9song');
const num10song = document.querySelector('.num10song');

const data = null;
///creating the request to the server///
let xhr = new XMLHttpRequest();

//checing if apiKey is correct 
xhr.withCredentials = true;

//callback funtion ready to run if request is successful
xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
    }
///////Create an if statement that asks if the server req is complete/////////////
    if(xhr.readyState === 4)
///////now server is complete create an if to see if connection succcessful///////
    if(xhr.status === 200){
///////Body of the callback where we parse data and use DOM Manipulation//////////        
        const data = JSON.parse(xhr.response);
        console.log(data);
///////Else if clause where we throw an error if we dont have success connecting//
        } else if (xhr.status === 404){
            alert('get better internet loser');
        } else if (xhr .status === 500){
            alert('we currently do not have time for you.....leave');
        }
});

//open the server request//
xhr.open("GET", "https://rapidapi.p.rapidapi.com/youtube-info/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D9FCRaSwU3W8");
xhr.setRequestHeader("x-rapidapi-host", "youtube-video-info1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "c93bc61a03msh67a540dd45f33ddp1062c0jsncdbc32814487");
//send the server request///
xhr.send(data);