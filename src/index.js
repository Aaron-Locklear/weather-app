import "./style.css";

async function getWeather(lat, lon) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=dd1cb6a20247063da00bd5225c5296d3`, {mode: "cors"});
    const weatherData = await response.json();
    console.log(weatherData);
    return weatherData; // Directly return the response data
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function kelvinToFahrenheit(kelvin) {
  const fahrenheit = (kelvin - 273.15) * 9/5 + 32;
  const trimmedFahrenheit = fahrenheit.toFixed(1); // Trim to one decimal place
  return trimmedFahrenheit;
}

function separateForecastsByDay(weather) {
  const differentDays = {};

  weather.forEach((threeHourForecast) => {
    const day = threeHourForecast["dt_txt"].split(" ")[0];

    if (!(day in differentDays)) {
      differentDays[day] = { threeHourForecasts: [] };
    }

    differentDays[day].threeHourForecasts.push(threeHourForecast);
  });

  return differentDays;
}

function findDatesLowsAndHighs(processedDate) {
  //takes in a processed date and returns the low and high temperatures found in the date.main.temp_min/max properties in the form [low,high]
  //temps are converted to fahrenheit before return
  if (processedDate.threeHourForecasts.length > 0) {
    let low = processedDate.threeHourForecasts[0].main.temp_min;
    let high = processedDate.threeHourForecasts[0].main.temp_max;

    processedDate.threeHourForecasts.forEach((forecast) => {
      if (forecast.main.temp_min < low) {
        low = forecast.main.temp_min;
      }
      if (forecast.main.temp_max > high) {
        high = forecast.main.temp_max;
      }
    });

    low = kelvinToFahrenheit(low);
    high = kelvinToFahrenheit(high);
    return [low, high];
  }
  console.log("Invalid data given to find lows and highs")
}

function findAverageHumidityd(processedDate){
  let humiditySum = 0;
  
  processedDate.threeHourForecasts.forEach((forecast) => {
    humiditySum += forecast.main.humidity;
  });
  
  return Math.round(humiditySum / 8) + "%" //trim to one decimal place;
}

function extractDayInfoForHTML(weather){
  const differentDays = separateForecastsByDay(weather);
  
  const daysForHTML = []
  
  for (const day in differentDays) {
    let nextDayInfo = {};
    
    let [low, high] = findDatesLowsAndHighs(differentDays[day]);
    
    nextDayInfo.date = day;
    nextDayInfo.tempLow = low;
    nextDayInfo.tempHigh = high;
    nextDayInfo.humidity = findAverageHumidityd(differentDays[day]);
    
    daysForHTML.push(nextDayInfo);
  }
  
  return daysForHTML;
}

function createHTMLElement(dayInfo){
  const weatherField = document.querySelector(".weather-display");
  
  const dayArticle = document.createElement("article");
  const tempHigh = document.createElement("p");
  const tempLow = document.createElement("p");
  const humidity = document.createElement("p");
  const date = document.createElement("p");

  //change color of elements text
  tempHigh.style.color = "red";
  tempLow.style.color = "blue";

  //update text
  date.textContent = dayInfo.date.split("-").slice(1).join("-");
  tempHigh.textContent = dayInfo.tempHigh;
  tempLow.textContent = dayInfo.tempLow;
  humidity.textContent = dayInfo.humidity;

  //create spans
  const dateSpan = document.createElement("span");
  const tempHighSpan = document.createElement("span");
  const tempLowSpan = document.createElement("span");
  const humiditySpan = document.createElement("span");

  //import images
  const dateImg = document.createElement("img");
  dateImg.src = "../public/calendar.svg";
  dateImg.alt = "Date Icon";

  const tempHighImg = document.createElement("img");
  tempHighImg.src = "../public/thermometerHot.svg";
  tempHighImg.alt = "High Temperature Icon";

  const tempLowImg = document.createElement("img");
  tempLowImg.src = "../public/thermometerCold.svg";
  tempLowImg.alt = "Low Temperature Icon";

  const humidityImg = document.createElement("img");
  humidityImg.src = "../public/droplet.svg";
  humidityImg.alt = "Humidity Icon";

  //add images and text to spans
  dateSpan.appendChild(dateImg);
  dateSpan.appendChild(date);

  tempHighSpan.appendChild(tempHighImg);
  tempHighSpan.appendChild(tempHigh);

  tempLowSpan.appendChild(tempLowImg);
  tempLowSpan.appendChild(tempLow);

  humiditySpan.appendChild(humidityImg);
  humiditySpan.appendChild(humidity);
  
  dayArticle.classList.add("day-article");
  
  dayArticle.appendChild(dateSpan);
  dayArticle.appendChild(tempHighSpan);
  dayArticle.appendChild(tempLowSpan);
  dayArticle.appendChild(humiditySpan);
  
  weatherField.appendChild(dayArticle);
}

function createHTMLElements(weather){
  let daysForHTML = extractDayInfoForHTML(weather);
  
  daysForHTML.forEach((dayInfo) => {
    createHTMLElement(dayInfo);
  })
}

async function displayWeather(lat, lon) {
  const weather = await getWeather(lat, lon);
  if (weather) {
    const city = document.querySelector(".city-name");
    city.textContent = weather.city.name;

    createHTMLElements(weather.list);
  }
}

function main(){
  displayWeather(32.77, -96.80); //default display Dallas

  const latInput = document.querySelector(".lat");
  const lonInput = document.querySelector(".lon");

  latInput.value = 32.77;
  lonInput.value = -96.80;

  const submit = document.querySelector(".submit-button");
  
  submit.addEventListener("click", () => {
    displayWeather(latInput.value || 0, lonInput.value || 0);

    const weatherDisplay = document.querySelector(".weather-display");
    weatherDisplay.innerHTML = "";
  });

}

main();