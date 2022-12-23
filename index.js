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


