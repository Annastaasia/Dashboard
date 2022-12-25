const moment = require("moment/moment");


const ctxFirst = document.getElementById('myChart-1').getContext('2d');

let dataJsonFirst = `{
    "labels": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    "label": "title",
    "data": [133, 198, 320, 591, 520, 354, 632]
}`
let objDataFirst = JSON.parse(dataJsonFirst);

const myChartFirst = new Chart(ctxFirst, {
    type: 'line',

    data: {
        labels: objDataFirst.labels,
        datasets: [{
            label: objDataFirst.label,
            data: objDataFirst.data,
            fill: 'origin',
            backgroundColor: [
                'rgba(8, 69, 166, 0.8)'],
            borderColor: [
                'rgba(23, 131, 241, 1)',
            ],
            tension: 0.4,
            borderWidth: 2
        }]
    }
});


let ctx = document.getElementById('chart1').getContext('2d');
let chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [{
            label: 'Weekly Activity',
            backgroundColor: ['lightcoral'],
            borderColor: ' rgb(215, 72, 72)',
            data: [1, 5, 2, 4, 7, 3, 10],
            tension: 0.3,
            fill: 'origin',
            borderWidth: 4
        }]

    },
    options: {
    }
});



anime({
    targets: 'div',
    scale: [{
        value: .1,
        easing: 'easeOutSine',
        duration: 500
    },
    {
        value: 1,
        easing: 'easeInOutQuad',
        duration: 1200
    }
    ],
    delay: anime.stagger(200, {
        grid: [14, 5],
        from: 'center'
    })
});



var animateLeft = anime({
    targets: '.square',
    left: '50%',
    autoplay: false
});


var animateBackground = anime({
    targets: '.square',
    backgroundColor: '#e9e9e9',
    autoplay: false
});

var animateRadius = anime({
    targets: '.square',
    borderRadius: '50%',
    autoplay: false
});

var animateAll = anime({
    targets: '.square',
    backgroundColor: '#f96',
    borderRadius: '50%',
    left: '50%',
    autoplay: false
});

document.querySelector('.play-left').onclick = animateLeft.restart;

document.querySelector('.play-background').onclick = animateBackground.restart;

document.querySelector('.play-radius').onclick = animateRadius.restart;

document.querySelector('.play-all').onclick = animateAll.restart;



//let date = moment().format('MMMM Do YYYY, h:mm:ss a');
//document.getElementById('currentDate').innerHTML = `Current date: ${date}`;

//require('moment/locale/ru');


let timeBlock = document.getElementById('currentDate');
timeBlock.innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
