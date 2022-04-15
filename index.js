
  function getData(){
    let city = document.getElementById("city").value;

    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b887f643762e7a23cf5250f9ddcbbe22`;
    
    fetch(url)
    .then(function(res){
        return res.json()
    })
    .then(function(res){
        console.log(res);
        appendData(res)
    })
    .catch(function(err){
        console.log(err)
    })
    
  }

  function getDataLocation(lat,lon){
    

    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b887f643762e7a23cf5250f9ddcbbe22`;
    
    fetch(url)
    .then(function(res){
        return res.json()
    })
    .then(function(res){
        console.log(res);
        appendData(res)
    })
    .catch(function(err){
        console.log(err)
    })
    
  }

  function appendData(data){
      let display = document.getElementById("container");
      display.style.boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px";
      display.style.borderRadius="10px";
      
      let map = document.getElementById("gmap_canvas");
      display.innerHTML=null;


      let city = document.createElement("p");

      city.innerText=`City: ${data.name}`;

      let tempMin = document.createElement("p");
      tempMin.innerText = `Min_Temperature: ${Math.floor(data.main.temp_min-274)}°C`;

      let tempMax = document.createElement("p");
      tempMax.innerText=`Max_Temperature: ${Math.floor(data.main.temp_max-273)}°C`;

      let temp = document.createElement("b");
      temp.innerText = `Temperature:${Math.floor(data.main.temp-273)}°C`;

      let humidity =document.createElement("p");
      humidity.innerText = `Humidity: ${data.main.humidity}%`;

      display.append(city,temp,tempMax,tempMin,humidity);
      map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`

  }


  function getWhether(){

  
  navigator.geolocation.getCurrentPosition(success);


  function success(position){
    var crd = position.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    getDataLocation(crd.latitude,crd.longitude);
  }
  
}
//   src="https://maps.google.com/maps?q=Odisha&t=&z=13&ie=UTF8&iwloc=&output=embed" 