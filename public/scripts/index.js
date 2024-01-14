$(document).ready(function(){
    $("#registerForm").on("submit", function(e){
        e.preventDefault();
        const username = $("#username").val();
        const password = $("#password").val();
        console.log(username, password)
        $.ajax({
            url: '/api/register',
            method: 'POST',
            data: {username, password},         
            success: function(response){
                console.log(response);
            },
            error: function(error){
                console.log(error.message);
            }
        })
    })
})