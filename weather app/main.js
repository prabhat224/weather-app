const apikey="f0962c38600799e527dfca7f798469ed"
const getweather=async()=>{
    var city=document.getElementById('city').value ;
    const resp=`https://api.openweathermap.org/data/2.5/weather?q= + ${city}+&appid=${apikey}&units=metric`;
    const response=await fetch(resp);
    const data=await response.json()
    console.log(data)
    return displayweather(data);

}
const weather=document.getElementById("#weather_info");
const displayweather=(data)=>{
    //extracting everything from data object
    const { name } = data;
    const { icon, description } = data.weather[0];
    const{country}=data.sys
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(country)
    document.querySelector(".place").innerText = "Weather in " + name;
    document.querySelector(".country").innerText="("+country+")";
    document.querySelector(".sky").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".icon").src =
    "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";

      if(temp>20)
      {
        document.body.classList.add("summer")
        document.body.classList.remove("winter")
        document.body.classList.remove("default")
      }
      else if(temp<10)
      {
        document.body.classList.add("winter")
        document.body.classList.remove("summer")
        document.body.classList.remove("default")
      }
      else{
        document.body.classList.add("default");
        document.body.classList.remove("summer")
        document.body.classList.remove("winter")
      }
}


