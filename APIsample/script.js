document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
 	
	//Gets the wether data
	document.getElementById("submit").addEventListener('click', function(event){	
	var apiKey = "1766257df64c726d278c624a4083e081";
	var zipCode = document.getElementById("Zipcode").value;
	var city = document.getElementById("city").value;
	var getString = null;
	if(zipCode > 0){
		getString = "http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + "&APPID=" + apiKey;
	}
	else{
		getString = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + apiKey;
	}
	var req = new XMLHttpRequest();
	req.open("GET", getString, true);
 	req.addEventListener('load',function(){

      		if(req.status >= 200 && req.status < 400){
		var response = JSON.parse(req.responseText);
		document.getElementById("weather").textContent = "The weather is:"
		document.getElementById("temp").textContent ="Temperature(K): " + response.main.temp;
		document.getElementById("rain").textContent ="Rain fall: " + response.rain["3h"];
		document.getElementById("wind").textContent ="Wind speed: " + response.wind.speed;
		}
	else {
        	console.log("Error in network request: " + request.statusText);
        }
	})
	req.send(null);
	event.preventDefault();
	})

	//Submit the form via post
	document.getElementById("submitForm").addEventListener('click', function(event){
	var req = new XMLHttpRequest();
        var payload = {name:null};
	payload.name = document.getElementById("Name").value;
	req.open('POST', 'http://httpbin.org/post', true);
        req.setRequestHeader('Content-Type', 'application/json');
        req.addEventListener('load',function(){
	if(req.status >= 200 && req.status < 400){
		var responsePost = JSON.parse(req.responseText);
		var data = JSON.parse(responsePost.data);
        	document.getElementById('nameReturned').textContent = "The name you entered was: " + data.name;
	}
	else {
        	console.log("Error in network request: " + request.statusText);
        }
	})
	req.send(JSON.stringify(payload));
        event.preventDefault();
	})

}

