fetch('http://api.openweathermap.org/data/2.5/weather?id=524894&appid=0d7addee4de2515085e40d0277057478')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.name').textContent = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.img').textContent = data.weather[0]['description'];
        document.querySelector('.wind').textContent = "wind " + Math.round(data.wind.speed) + ' m.s';
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
        document.querySelector('.wind1').textContent = "wind " + Math.round(data.wind.speed) + ' m.s';
        //https://openweathermap.org/img/wn/02d@2x.png
        document.querySelector('.features1 li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {
        // catch any errors
    });


    fetch(`http://api.openweathermap.org/data/2.5/weather?q=sochi,ru&appid=0d7addee4de2515085e40d0277057478`)
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.name2').textContent = data.name;
        document.querySelector('.temp2').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.img2').textContent = data.weather[0]['description'];
        document.querySelector('.wind2').textContent = "wind " + Math.round(data.wind.speed) + ' m.s';
        //https://openweathermap.org/img/wn/02d@2x.png
        document.querySelector('.features2 li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {
        // catch any errors
    });


    function f1() {
        const value = document.querySelector('.i-1').value;
        const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
        console.log(capitalizedValue);
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${value},ru&appid=0d7addee4de2515085e40d0277057478`)
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.name3').textContent = data.name;
        document.querySelector('.temp3').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.img3').textContent = data.weather[0]['description'];
        document.querySelector('.wind3').textContent = "wind " + Math.round(data.wind.speed) + ' m.s';
        //https://openweathermap.org/img/wn/02d@2x.png
        document.querySelector('.features3 li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {
        // catch any errors
    });
    
    }
    
    document.querySelector('.b-1').onclick = f1;


    // чтобы искало не только Русские города, надо или по ip\делать кнопку для выбора региона и потом так же через q=${value},${cuntry}