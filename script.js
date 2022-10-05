
	const timeE1 = document.getElementById("time");
	const dateE1 = document.getElementById("date");
	const currentweatherItemsE1 = document.getElementById("current.weather.items");
	const timezone = document.getElementById("time-zone")
	const countryE1 = document.getElementById("country")
	const weatherforecastE1=document.getElementById("weather-forecast");
	const currentTempE1=document.getElementById("current-temp");
	
	
	const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	const months=['Jan','Feb','Mar','Apr','May','June','Jul','Aug','Sep','Oct','Nov','Dec'];
	
	const API_key  = 'ebe655755229a764307e2360e3c9c04c';
	
	setInterval(()  =>  {
	    const time=new Date();
	    const month=time.getMonth();
	    const date=time.getDate();
	    const day=time.getDay();
	    const hour=time.getHours();
	    consthoursIn12hrFormat=hour >=13? hour%12:hour;
	    const minutes=time.getMinutes();
	    const ampm=hour  >=12? 'PM' : 'AM';
	
	    timeE1.innerHTML=(hoursIn12hrFormat<10?"0"+hoursIn12hrFormat:hoursIn12hrFormat)+':'+(minutes<10?"0"+minutes:minutes)+''+`<span id="am-pm">${ampm}</span>`
	
	    dateE1.innerHTML=days[day]+', '+date+' '+months[month];
	
	
	},1000);
	getweatherData();
	function getweatherData(){
	    navigator.geolocation.getCurrentPosition((success)=>{
	        let {latitude, longitude}=success.coords;
	
	        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}exclude=hourly,minutely&units&metric&appid=${API_key}`)
	                  .then(res =>res.json()).then(data =>{
	      console.log(data);
	        showWeatherData(data);
	     })
	
	})
	
	}
	
	function showWeatherData(data)
	{
	    let {humidity,pressure,sunrise,sunset,wind_speed} = data.current;
	




