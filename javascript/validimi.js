
function isBlank(inputField) {
    if (inputField.value == "") {
        return true;
    }
    return false;
}


function makeClean(element) {
    element.classList.remove("error");
}

window.addEventListener("load", function () {

 
    var requiredInputs = document.querySelectorAll(".required");
    for (var i = 0; i < requiredInputs.length; i++) {
        requiredInputs[i].addEventListener("change", function (e) {
            makeClean(e.target);
        });
    }


    var mainForm = document.getElementById("mainForm");
    mainForm.addEventListener("submit", function (e) {

        var requiredInputs = document.querySelectorAll(".required");
        for (var i = 0; i < requiredInputs.length; i++) {
            if (isBlank(requiredInputs[i])) {
                e.preventDefault();
                requiredInputs[i].classList.add("error");
                $(".wrapper").hide();
            }
            else {
                makeClean(requiredInputs[i]);
                e.preventDefault();
                $(".wrapper").show(300);
                $(".wrapper").dialog({
                    width: 350,
                    height: 555,
                    show: {
                        effect: "blind",
                        duration: 1000
                    },
                    hide: {
                        effect: "explode",
                        duration: 1000
                    }
                });
            }
        }
    });

    var requiredInputs = document.querySelectorAll(".require");
    for (var i = 0; i < requiredInputs.length; i++) {
        requiredInputs[i].addEventListener("change", function (e) {
            makeClean(e.target);
        });
    }


    var payForm = document.getElementById("payForm");
    payForm.addEventListener("submit", function (e) {

        var requiredInputs = document.querySelectorAll(".require");
        for (var i = 0; i < requiredInputs.length; i++) {
            if (isBlank(requiredInputs[i])) {
                e.preventDefault();
                requiredInputs[i].classList.add("error");
            }
            else {
                makeClean(requiredInputs[i]);
                var email = prompt("You have succesfully paid! Enter you email address for more information!", "someone@example.com");
                if (email !== null) {
                    alert("Check you email for notifications.");
                    window.location.reload();

                }
            }
        }
    });


    document.getElementById("oobtn").addEventListener("click", function () {
        $(".wrapper").dialog("close");

    });


});

