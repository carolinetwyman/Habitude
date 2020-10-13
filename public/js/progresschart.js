async function main() {
    const dailyLogResponse = await fetch('api/dailylog');
    const dailyLogData = await dailyLogResponse.json();

    const goalsResponse = await fetch('api/goals');
    const goalsData = await goalsResponse.json();

    let sleepChartData = {
        dailyLogs: [],
        goals: []
    };

    let mindfulChartData = {
        dailyLogs: [],
        goals: []
    };

    let exerciseChartData = {
        dailyLogs: [],
        goals: []
    };

    let dailyLogLength = dailyLogData.length;
    let goalsLength = goalsData.length

    for (let i = 0; i < dailyLogLength; i++) {
        sleepChartData.dailyLogs.push(dailyLogData[i].sleep_time)
        mindfulChartData.dailyLogs.push(dailyLogData[i].mindful_minutes)
        exerciseChartData.dailyLogs.push(dailyLogData[i].exercise_time)
    }

    for (let i = 0; i < goalsLength; i++) {
        sleepChartData.goals.push(goalsData[i].sleep_time)
        mindfulChartData.goals.push(goalsData[i].mindful_minutes)
        exerciseChartData.goals.push(goalsData[i].exercise_time)
    }

    var ctx = document.getElementById('myChart1').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
            labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
            datasets: [{
                data: sleepChartData.goals,
                label: "Goals",
                borderColor: "#FF9C39",
                fill: false
            }, {
                data: sleepChartData.dailyLogs,
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
                data: mindfulChartData.goals,
                label: "Goals",
                borderColor: "#3940FF",
                fill: false
            }, {
                data: mindfulChartData.dailyLogs,
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
                data: exerciseChartData.goals,
                label: "Goals",
                borderColor: "#3940FF",
                fill: false
            }, {
                data: exerciseChartData.dailyLogs,
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

