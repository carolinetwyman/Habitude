$(document).ready(() => {

    $("#signup").on('click', (event) => {
        console.log("test click signup")
        event.preventDefault();
        window.location.replace("/signup");
        // If there's an error, log the error
    })
        .catch(err => {
            console.log(err);
        });

    $("#login").on('click', (event) => {
        console.log("test click login")
        event.preventDefault();
        window.location.replace("/signup");
        // If there's an error, log the error
    })
        .catch(err => {
            console.log(err);
        });
});