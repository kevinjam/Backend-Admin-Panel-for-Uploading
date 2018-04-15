// Initialize Firebase
var config = {
    apiKey: "AIzaSyCL49AU6K69UCTmvD-lyXQ8Y2F_UDB06Ok",
    authDomain: "mytithe-b25bc.firebaseapp.com",
    databaseURL: "https://mytithe-b25bc.firebaseio.com",
    projectId: "mytithe-b25bc",
    storageBucket: "mytithe-b25bc.appspot.com",
    messagingSenderId: "2612091569"
};
firebase.initializeApp(config);

firebase.auth.Auth.Persistence.LOCAL;

$("#btn-login").click(function () {
    console.log("----------Start----");
    var email = $("#email").val();
    var password = $("#password").val();

    var result = firebase.auth().signInWithEmailAndPassword(email, password);
    result.catch(function (error) {

        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);
    });
});

$("#btn-logout").click(function(){
    firebase.auth().signOut();
});

function switchView(view) {
    $.get({
        url: view,
        cache: false,

    }).then(function (data) {
        $("#container").html(data);
    });

}