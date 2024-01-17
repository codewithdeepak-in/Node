
$(document).ready(function(){
    $(".php-email-form").on("submit", function(e){
        e.preventDefault();
        let name = $("#name").val();
        let email = $("#email").val();
        let subject = $("#subject").val();
        let message = $("#message").val();

        $.ajax({
            url: '/api/contact',
            method: 'POST',
            data: {name, email, subject, message},
            success: function(response){
                console.log(response)
                swal("Details Added Successfully!", `You name is ${response.name}!`, "success");
                $(".php-email-form")[0].reset();
            },
            error: function(error){
                swal("There is some Error!", ``, "error");
            }
        })

    })

    $()


})