const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const datahide = document.querySelector('.middle_layer');
const temp_real_val = document.getElementById("temp_real_val");

const getInfo = async (event) => {
    event.preventDefault();

    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = `plz enter the city name`;
        datahide.classList.add('data_hide');
    }
    else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=fd7dd9ccc2f8dc3e01c3f9e938676c6e`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = ` ${arrData[0].name},${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;


            const tempMood = arrData[0].weather[0].main;
            // conditions to check sunny or cloudy
            if (tempMood == 'Clear') {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: orange ;'></i>";
            }
            else if (tempMood == 'Clouds') {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6'></i>";
            }
            else if (tempMood == 'Rain') {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color:#a4b0be'></i>";
            }
            else {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6'></i>";
            }

            datahide.classList.remove('data_hide');

        } catch {
            city_name.innerText = `plz enter valid city name `;
            datahide.classList.add('data_hide');
        }

    }
}

submitBtn.addEventListener('click', getInfo);
