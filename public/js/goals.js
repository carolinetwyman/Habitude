$(document).ready(() => {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(data => {
        $(".member-name").text(data.email);
    });

    /////////////////berhane add//////////////////////////////////////
    $("#submitGoals").on('click', (event) => {
        console.log("test click event")
        event.preventDefault();

        var sleep = $("#sleeptime").val();
        var mindful = $("#mindfulminutes").val();
        var exercise = $("#exercisetime").val();

        console.log("test", sleep, mindful, exercise)
        $(".yourGoals").text("You sleep: " + sleep + "hrs. Mindfulness: " + mindful + "hrs and  Exercies: " + exercise)
        var newData = {
            sleep_time: sleep,
            mindful_minutes: mindful,
            exercise_time: exercise
        }

        $.post("/api/goalsub", newData)
            .then((res) => {
                console.log(res)
                $("#sleeptime").val("");
                $("#mindfulminutes").val("");
                $("#exercisetime").val("");
                //take the data to the routes and take me to the members webpage
                //console.log(res.json(Actives))
                //window.location.replace("/members");
            })
            .catch(err => console.log("yoyo--> " + err));
    });
    ///////////////////////////////////////////////
});