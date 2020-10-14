async function main() {
    const dailyLogResponse = await fetch('api/dailylog');
    const dailyLogData = await dailyLogResponse.json();

    const goalsResponse = await fetch('api/goals');
    const goalsData = await goalsResponse.json();

    let sleepChartData = {
        dailyLogs: [],
        goals: [],
        dates: []
    };

    let mindfulChartData = {
        dailyLogs: [],
        goals: [],
        dates: []
    };

    let exerciseChartData = {
        dailyLogs: [],
        goals: [],
        dates: []
    };

    let dailyLogLength = dailyLogData.length;
    let goalsLength = goalsData.length

    for (let i = 0; i < dailyLogLength; i++) {
        sleepChartData.dailyLogs.push(dailyLogData[i].sleep_time);
        mindfulChartData.dailyLogs.push(dailyLogData[i].mindful_minutes);
        exerciseChartData.dailyLogs.push(dailyLogData[i].exercise_time);
        sleepChartData.dates.push(dailyLogData[i].User.createdAt);
        mindfulChartData.dates.push(dailyLogData[i].User.createdAt);
        exerciseChartData.dates.push(dailyLogData[i].User.createdAt);

    }

    for (let i = 0; i < goalsLength; i++) {
        sleepChartData.goals.push(goalsData[i].sleep_time);
        mindfulChartData.goals.push(goalsData[i].mindful_minutes);
        exerciseChartData.goals.push(goalsData[i].exercise_time);
        sleepChartData.dates.push(goalsData[i].User.createdAt);
        mindfulChartData.dates.push(goalsData[i].User.createdAt);
        exerciseChartData.dates.push(goalsData[i].User.createdAt);
    }

    var ctx = document.getElementById('myChart1').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
            labels: sleepChartData.dates,
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
            labels: mindfulChartData.dates,
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
            labels: exerciseChartData.dates,
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

