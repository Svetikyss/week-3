console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert("The form has been submitted successfully")
	
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

function compliment(){
	alert("You are awesome")

}
function netflix(){
	alert("It is what I love to do")
}
function career(){
alert("How I see myself after the course")}

function feel(){
	alert("How I feel now")
}
 function color(){
	alert("Blue")
 }
 function place(){
	alert("Home")
 }
 function ritual(){
	alert("Massage")
 }

 function WillSee(){
	alert("Will see, how it is going to be. I will keep you posted")
 }

 function park(){
	alert("West Riverfront Park")
 }

     let links = [
				  "townhousedetroit.com/",
				  "andiamoitalia.com/",
				  "wrightdetroit.com/?utm_content=home",
				  "besadetroit.com/"]
	
				  function randomRest(){
					location.href = "http://" + links[Math.floor (Math.random()*links.length)];
			}
			