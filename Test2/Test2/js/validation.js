$(function(){
    let usernameValid = false;
    let passwordValid = false;
    let dateOfBirthValid = false;

    $('form').on('submit', function(e){
        //validation code goes here


        if (usernameValid && passwordValid && dateOfBirthValid){
            e.preventDefault();
            $('tbody').append(`<tr><td>${$('#username').val()}</td><td>${$('#password').val().length}</td><td>${$('#dateOfBirth').val()}</td></tr>`)
            $('th').removeClass('ascending descending'); //new row added, so the table isn't sorted anymore
        }
    });

});