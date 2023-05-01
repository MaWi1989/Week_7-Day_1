const apiKey = '955769ee247ca4493751d99bf6f20464'
const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?&units=imperial&q='


const citySearch = document.querySelector(".textfield")
const buttonClick = document.querySelector(".image-button")
const icon = document.querySelector(".icon")
const pic1 = document.querySelector(".pic1")
const pic2 = document.querySelector(".pic2")
const pic3 = document.querySelector(".pic3")


async function getWeather(){
        let response = await fetch(apiUrl + citySearch.value + `&appid=${apiKey}`)
    //wrong spelling etc:
        if (response.status == 404){
            document.querySelector(".inputform").style.display = "flex";
            document.querySelector(".error").style.display = "flex";
            document.querySelector(".card").style.height = "15vh";
            document.querySelector(".weather").style.display = "none";
            document.querySelector(".forecast").style.display = "none";
        }
        else {
            const data = await response.json()

            console.log(data)

            document.querySelector(".temp").innerHTML = Math.round(data.list[0].main.temp) + '°F'
            document.querySelector(".city").innerHTML = data.city.name
            document.querySelector(".description").innerHTML = data.list[0].weather[0].description
            document.querySelector(".high").innerHTML = 'High: ' + Math.round(data.list[0].main.temp_max) + '°F'
            document.querySelector(".low").innerHTML = 'Low: ' +Math.round(data.list[0].main.temp_min) + '°F'
            document.querySelector(".feels").innerHTML = 'Feels Like: ' + Math.round(data.list[0].main.feels_like) + '°F'
            document.querySelector(".humidity").innerHTML = 'Humidity: ' + data.list[0].main.humidity +'%'
            document.querySelector(".fore1").innerHTML = data.list[1].weather[0].description
            document.querySelector(".fore2").innerHTML = data.list[2].weather[0].description
            document.querySelector(".fore3").innerHTML = data.list[3].weather[0].description

        

            if (data.list[0].weather[0].main  == 'Clouds'){
            icon.src = "CSS/images/clouds.png"
            }
            else if (data.list[0].weather[0].main  == 'Mist'){
            icon.src = "CSS/images/rain.png"
            }
            else if (data.list[0].weather[0].main  == 'Rain'){
            icon.src = "CSS/images/rain.png"
            }
            else if (data.list[0].weather[0].main  == 'Thunderstorm'){
            icon.src = "CSS/images/thunder.png"
            }
            else if (data.list[0].weather[0].main  == 'Snow'){
            icon.src = "CSS/images/snow.png"
            }
            else if (data.list[0].weather[0].main  == 'Clear'){
            icon.src = "CSS/images/clear.png"
            }
            else if (data.list[0].weather[0].main  == 'Drizzle'){
            icon.src = "CSS/images/rain.png"
            }
            else if (data.list[0].weather[0].main  == 'Fog'){
            icon.src = "CSS/images/fog.png"
            }
            else if (data.list[0].weather[0].main  == 'Tornado'){
            icon.src = "CSS/images/tornado.png"
            }


         //I tried to set up the images for the forecast with a for loop and index i, but it said 'i not defined' :(

            // const pic = document.querySelector(`.pic${i}`)
            // for (let i = 1; i < 4; i++){
            //     if (data.list[i].weather[0].main == 'Clouds'){
            //     pic.src = "CSS/images/clouds.png"
            //     }
            //     else if (data.list[i].weather[0].main == 'Mist'){
            //         pic.src = "CSS/images/rain.png"
            //         }
            //     else if (data.list[i].weather[0].main == 'Rain'){
            //         pic.src = "CSS/images/rain.png"
            //         }
            //     else if (data.list[i].weather[0].main == 'Thunderstorm'){
            //         pic.src = "CSS/images/thunder.png"
            //         }
            //     else if (data.list[i].weather[0].main == 'Snow'){
            //         pic.src = "CSS/images/snow.png"
            //         }
            //     else if (data.list[i].weather[0].main == 'Clear'){
            //         pic.src = "CSS/images/clear.png"
            //         }
            //     else if (data.list[i].weather[0].main == 'Drizzle'){
            //         pic.src = "CSS/images/rain.png"
            //         }
            //     else if (data.list[i].weather[0].main == 'Fog'){
            //         pic.src = "CSS/images/fog.png"
            //         }
            //     else if (data.list[i].weather[0].main == 'Tornado'){
            //         pic.src = "CSS/images/tornado.png"
            //         }
            //     }



                if (data.list[1].weather[0].main == 'Clouds'){
                    pic1.src = "CSS/images/clouds.png"
                    }
                else if (data.list[1].weather[0].main == 'Mist'){
                    pic1.src = "CSS/images/rain.png"
                    }
                else if (data.list[1].weather[0].main == 'Rain'){
                    pic1.src = "CSS/images/rain.png"
                    }
                else if (data.list[1].weather[0].main == 'Thunderstorm'){
                    pic1.src = "CSS/images/thunder.png"
                    }
                else if (data.list[1].weather[0].main == 'Snow'){
                    pic1.src = "CSS/images/snow.png"
                    }
                else if (data.list[1].weather[0].main == 'Clear'){
                    pic1.src = "CSS/images/clear.png"
                    }
                else if (data.list[1].weather[0].main == 'Drizzle'){
                    pic1.src = "CSS/images/rain.png"
                    }
                else if (data.list[1].weather[0].main == 'Fog'){
                    pic1.src = "CSS/images/fog.png"
                    }
                else if (data.list[1].weather[0].main == 'Tornado'){
                    pic1.src = "CSS/images/tornado.png"
                    }

                

                    
                if (data.list[2].weather[0].main == 'Clouds'){
                    pic2.src = "CSS/images/clouds.png"
                    }
                else if (data.list[2].weather[0].main == 'Mist'){
                    pic2.src = "CSS/images/rain.png"
                    }
                else if (data.list[2].weather[0].main == 'Rain'){
                    pic2.src = "CSS/images/rain.png"
                    }
                else if (data.list[2].weather[0].main == 'Thunderstorm'){
                    pic2.src = "CSS/images/thunder.png"
                    }
                else if (data.list[2].weather[0].main == 'Snow'){
                    pic2.src = "CSS/images/snow.png"
                    }
                else if (data.list[2].weather[0].main == 'Clear'){
                    pic2.src = "CSS/images/clear.png"
                    }
                else if (data.list[2].weather[0].main == 'Drizzle'){
                    pic2.src = "CSS/images/rain.png"
                    }
                else if (data.list[2].weather[0].main == 'Fog'){
                    pic2.src = "CSS/images/fog.png"
                    }
                else if (data.list[2].weather[0].main == 'Tornado'){
                    pic2.src = "CSS/images/tornado.png"
                    }



                if (data.list[3].weather[0].main == 'Clouds'){
                    pic3.src = "CSS/images/clouds.png"
                    }
                else if (data.list[3].weather[0].main == 'Mist'){
                    pic3.src = "CSS/images/rain.png"
                    }
                else if (data.list[3].weather[0].main == 'Rain'){
                    pic3.src = "CSS/images/rain.png"
                    }
                else if (data.list[3].weather[0].main == 'Thunderstorm'){
                    pic3.src = "CSS/images/thunder.png"
                    }
                else if (data.list[3].weather[0].main == 'Snow'){
                    pic3.src = "CSS/images/snow.png"
                    }
                else if (data.list[3].weather[0].main == 'Clear'){
                    pic3.src = "CSS/images/clear.png"
                    }
                else if (data.list[3].weather[0].main == 'Drizzle'){
                    pic3.src = "CSS/images/rain.png"
                    }
                else if (data.list[3].weather[0].main == 'Fog'){
                    pic3.src = "CSS/images/fog.png"
                    }
                else if (data.list[3].weather[0].main == 'Tornado'){
                    pic3.src = "CSS/images/tornado.png"
                    }

                
        

            document.querySelector(".inputform").style.display = "flex"
            document.querySelector(".weather").style.display = "flex"
            document.querySelector(".forecast").style.display = "flex"
            document.querySelector(".error").style.display = "none"
            document.querySelector(".card").style.height = "auto";
        
        }}
   
    buttonClick.addEventListener("click", ()=>{
        getWeather(citySearch.value)
        })



getWeather()

