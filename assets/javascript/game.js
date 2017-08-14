$(document).ready(function() {
    //variables
    var random_number = 0;
    var random_crystal = [];
    var user_score = 0;
    var breake_function = false;
    var wins = 0;
    var loss = 0;

    //function 
    function ramdom_val(val) {
        random_crystal.length = 0;
        random_number = Math.floor(Math.random() * 120) + 19;
        $(".challange_container").text(random_number);
        for (var i = 0; i < 4; i++) {
            randomvar = Math.floor(Math.random() * 12) + 1;
            random_crystal.push(randomvar);
        }
    }
    //assigment labels
    ramdom_val();

    //collection from buttons
    $("button").on("click", function() {
        // console.log(random_crystal);

        var button_number = $(this).attr("value");
        user_score = user_score + random_crystal[button_number];
        $(".result_number").text(user_score);
        if (random_number == user_score) {
            // winings , reset and reasing vars
            $(".winlosses").text("You Won!");
            wins = wins + 1;
            $(".wins").text(wins);
            user_score = 0;
            ramdom_val();
        } else if (user_score > random_number) {
            // losses , reset and reasing vars
            $(".winlosses").text("You loose!");
            loss = loss + 1;
            $(".loss").text(loss);
            user_score = 0;
            ramdom_val();
        }


    })

});