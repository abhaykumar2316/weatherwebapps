var btn = document.getElementById('btn');
var input = document.getElementById('input');
 btn.addEventListener("click",async()=>
{
    let rest=    await fetch(`https://api.weatherapi.com/v1/current.json?key=915d572adf5b47a0bd772422240510&q=${input.value}`);
    let  data = await rest.json();
    console.log(data);
    document.getElementById('temp').innerText=data.current.temp_c+"°C";
    document.getElementById('city').innerText=data.location.name;
    let img = document.getElementById('img');
    img.src=data.current.condition.icon;
    document.getElementById('region').innerText=data.location.region;
    document.getElementById('country').innerText=data.location.country;
    document.getElementById('humidity').innerText=data.current.humidity+'%';
    document.getElementById('wind').innerText=data.current.wind_kph+'km/h';
})