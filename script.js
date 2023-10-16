fetch('http://api.openweathermap.org/data/2.5/weather?id=524894&appid=0d7addee4de2515085e40d0277057478')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.name').textContent = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.img').textContent = data.weather[0]['description'];
        //https://openweathermap.org/img/wn/02d@2x.png
        document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {
        // catch any errors
    });


    fetch('http://api.openweathermap.org/data/2.5/weather?id=500095&appid=0d7addee4de2515085e40d0277057478')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.name1').textContent = data.name;
        document.querySelector('.temp1').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.img1').textContent = data.weather[0]['description'];
        //https://openweathermap.org/img/wn/02d@2x.png
        document.querySelector('.features1 li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {
        // catch any errors
    });