
const weatherInfo = document.querySelector('#weatherInfo');
const para = document.querySelector('main p');

weatherInfo.addEventListener('change', updateWeatherInfo);


function updateWeatherInfo() {

    const selectItem = weatherInfo.value;

    if (selectItem === 'sunny') {
        para.textContent = "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream."
    }

    else if (selectItem === 'rainy') {
        para.textContent = 'Rain is falling outside; take a rain coat and umbrella and don\'t stay out for too long.'
    }

    else if (selectItem === 'snowing') {
        para.textContent = 'The snow is coming down - it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.'
    }

    else if (selectItem === 'overcast') {
        para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.'
    }
    else {
        para.textContent = ''
    }
}