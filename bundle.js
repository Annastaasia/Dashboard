(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

/*const anime = require('animejs');

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
});*/



var animateLeft = anime({
    targets: '.square',
    left: '50%',
    autoplay: false
});


var animateBackground = anime({
    targets: '.square',
    backgroundColor: '#f96',
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



},{}]},{},[1]);
