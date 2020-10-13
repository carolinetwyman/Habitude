async function main() {
    const dailyLogResponse = await fetch('api/dailylog');
    const dailyLogData = await dailyLogResponse.json();
    console.log(dailyLogData);

    const goalsResponse = await fetch('api/goals');
    const goalsData = await goalsResponse.json();


    var ctx = document.getElementById('myChart1').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
            labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
            datasets: [{
                data: [8, 8, 8, 8, 8, 8, 8],
                label: "Goals",
                borderColor: "#FF9C39",
                fill: false
            }, {
                data: [5, 9, 7, 5, 6, 10, 4],
                label: "Daily Log",
                borderColor: "#8e5ea2",
                fill: false
            }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Sleep Chart'
            }, scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                    }
                }]
            }
        }
    });
    var ctx = document.getElementById('myChart2').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
            labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
            datasets: [{
                data: [0.5, 1, 0.5, 1.5, 1, 0.5, 1, 1.5],
                label: "Goals",
                borderColor: "#3940FF",
                fill: false
            }, {
                data: [1, 2, 0, 0.5, 1, 1.5, 2, 1],
                label: "Daily Log",
                borderColor: "#FFDA41",
                fill: false
            }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Mindfulness Chart'
            }, scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                    }
                }]
            }
        }
    });
    var ctx = document.getElementById('myChart3').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
            labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
            datasets: [{
                data: [1, 2, 0.5, 1, 0.5, 3, 2, 1.5],
                label: "Goals",
                borderColor: "#3940FF",
                fill: false
            }, {
                data: [2, 0.5, 1, 0.5, 1.5, 2, 1.5, 1],
                label: "Daily Log",
                borderColor: "#FFDA41",
                fill: false
            }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Exercise Chart'
            }, scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                    }
                }]
            }
        }
    });
}
main() 

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'UA-180240530-1');

