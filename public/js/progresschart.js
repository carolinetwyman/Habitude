async function main() {
    const dailyLogResponse = await fetch('api/dailylog');
    const dailyLogData = await dailyLogResponse.json();
    const goalsResponse = await fetch('api/goals');
    const goalsData = await goalsResponse.json();
    const currentUser = await fetch('api/user_data');
    const currentUserData = await currentUser.json();
    console.log(currentUserData.id,"currentserid")
    console.log("show all users daily",dailyLogData)

    var filteredUserDaily = []
    for (var i = 0; i < dailyLogData.length ; i++) {
        if (dailyLogData[i].UserId === currentUserData.id) {
            filteredUserDaily.push(dailyLogData[i])
        }
    }
    console.log("filtereduserdaily",filteredUserDaily);

    var filteredUserGoal = []
    for (var i = 0; i < dailyLogData.length ; i++) {
        if (dailyLogData[i].UserId === currentUserData.id) {
            filteredUserGoal.push(dailyLogData[i])
        }
    }
    console.log("filteredusergoal",filteredUserGoal);

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
    //let dailyLogLength = dailyLogData.length;
    let dailyLogLength = filteredUserDaily.length;
    //let goalsLength = goalsData.length
    let goalsLength = filteredUserGoal.length;

    for (let i = 0; i < dailyLogLength; i++) {
        sleepChartData.dailyLogs.push(filteredUserDaily[i].sleep_time);
        mindfulChartData.dailyLogs.push(filteredUserDaily[i].mindful_minutes);
        exerciseChartData.dailyLogs.push(filteredUserDaily[i].exercise_time);

        while (filteredUserDaily[i].createdAt == moment()) {
            sleepChartData.dates.push(moment(filteredUserDaily[i].createdAt).utc().format('MM-DD'));
            mindfulChartData.dates.push(moment(filteredUserDaily[i].createdAt).utc().format('MM-DD'));
            exerciseChartData.dates.push(moment(filteredUserDaily[i].createdAt).utc().format('MM-DD'));
        }
    }

    for (let i = 0; i < goalsLength; i++) {
        sleepChartData.goals.push(filteredUserGoal[i].sleep_time);
        mindfulChartData.goals.push(filteredUserGoal[i].mindful_minutes);
        exerciseChartData.goals.push(filteredUserGoal[i].exercise_time);
        sleepChartData.dates.push(moment(filteredUserGoal[i].createdAt).utc().format('MM-DD'));
        mindfulChartData.dates.push(moment(filteredUserGoal[i].createdAt).utc().format('MM-DD'));
        exerciseChartData.dates.push(moment(filteredUserGoal[i].createdAt).utc().format('MM-DD'));
    }

    var ctx = document.getElementById('myChart1').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
            labels: sleepChartData.dates,
            datasets: [{
            //     data: sleepChartData.goals,
            //     label: "Goals",
            //     borderColor: "#FF9C39",
            //     fill: false
            // }, {
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
                data: mindfulChartData.dailyLogs,
                label: "Daily Log",
                borderColor: "#3940FF",
                fill: false
            // }, {
            //     data: mindfulChartData.goals,
            //     label: "Goals",
            //     borderColor: "#FFDA41",
            //     fill: false
            // }
            }]
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
            //     data: exerciseChartData.goals,
            //     label: "Goals",
            //     borderColor: "#3940FF",
            //     fill: false
            // }, {
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
    if (dailyLogLength === 7) { window.location.replace('/success') }
}
main()

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'UA-180240530-1');
