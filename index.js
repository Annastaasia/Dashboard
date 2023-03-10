const moment = require("moment/moment");

let ctx = document.getElementById('chart1').getContext('2d');

let chart = new Chart(ctx, {

    type: 'line',
    data: {

        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [{
            label: 'Weekly activity',
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            borderColor: ' rgb(215, 72, 72)',
            data: [1, 5, 2, 4, 7, 3, 10],
            tension: 0.3,
            fill: 'origin',
            borderWidth: 2
        }
        ]
    }
    ,
    options: {


        plugins: {
            title: {

                display: true,
                text: 'It is your activity',
                padding: {
                    top: 10,
                    bottom: 10
                }

                ,
                font: {
                    size: 24
                }
            }
        }
    }
}

);

anime({

    targets: 'div',
    scale: [{
        value: .1,
        easing: 'easeOutSine',
        duration: 500
    }

        ,
    {
        value: 1,
        easing: 'easeInOutQuad',
        duration: 1200
    }

    ],
    delay: anime.stagger(200, {
        grid: [14, 5],
        from: 'center'
    }

    )
}
);


var animateBackground = anime({
    targets: '.animatebackground',
    backgroundColor: '#ffffff',
    borderColor: '#5dd176',
    autoplay: false
}
);

var animateRadius = anime({
    targets: '.animateradius',
    borderRadius: '20px',
    autoplay: false
}
);

document.querySelector('.play-background').onclick = animateBackground.restart;
document.querySelector('.play-radius').onclick = animateRadius.restart;


let timeBlock = document.getElementById('currentDate');
timeBlock.innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');


const brandsData = [0.56,
    0.48,
    0.17,
    0.32];

const brandsChart = new Chart(document.getElementById('chart2'), {

    type: 'bar',
    data: {

        labels: ['Programming', 'Walking', 'Reading', 'Playing in game'],
        datasets: [{
            label: '% of weekly activity',
            data: brandsData,
            backgroundColor: ['rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(100, 206, 86, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: ['rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(120, 206, 86, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }

        ]
    }

    ,
    options: {
        indexAxis: 'y',

        plugins: {
            title: {

                display: true,
                text: 'What you doing',
                padding: {
                    top: 10,
                    bottom: 10
                }

                ,
                font: {
                    size: 24
                }
            }
        }

        ,

        scales: {
            x: {
                ticks: {
                    format: {
                        style: 'percent'
                    }
                }
            }
        }
    }
}

);

const button = document.querySelector('.button');
function getActivity() {
    fetch('http://www.boredapi.com/api/activity/').then((response) => {
        return response.json();
    }

    ).then((data) => document.querySelector('.activity').textContent = data.activity)
}

button.addEventListener('click', getActivity)


/*const ctxFirst = document.getElementById('myChart-1').getContext('2d');

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
});*/

/*var animateLeft = anime({
    targets: '.square',
    left: '50%',
    autoplay: false
});*/

/*var animateAll = anime({
    targets: '.square',
    backgroundColor: '#f96',
    borderRadius: '20px',
    left: '50%',
    autoplay: false
});
*/
//document.querySelector('.play-left').onclick = animateLeft.restart;

//document.querySelector('.play-all').onclick = animateAll.restart;



//let date = moment().format('MMMM Do YYYY, h:mm:ss a');
//document.getElementById('currentDate').innerHTML = `Current date: ${date}`;

//require('moment/locale/ru');