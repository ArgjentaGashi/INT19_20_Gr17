
function checkForm(form) {

    var re = /^[\w ]+$/;

    if (form.name.value == "") {
        alert("Error: Input in name is empty!");
        form.name.focus();
        return false;
    }

    if (!re.test(form.name.value)) {
        alert("Error: Input in name contains invalid characters!");
        form.name.focus();
        return false;
    }

    if (isNaN(form.name.value) == false) {
        alert("Error: Input in name is number!");
        form.name.focus();
        return false;
    }

    if (form.email.value == "") {
        alert("Error: Input in email is empty!");
        form.email.focus();
        return false;
    }

    if (!re.test(form.email.value)) {
        alert("Error: Input in email contains invalid characters!");
        form.email.focus();
        return false;
    }

    if (isNaN(form.email.value) == false) {
        alert("Error: Input in email is number!");
        form.email.focus();
        return false;
    }
    if (form.subject.value == "") {
        alert("Error: Input in subject is empty!");
        form.subject.focus();
        return false;
    }

    if (!re.test(form.subject.value)) {
        alert("Error: Input in subject contains invalid characters!");
        form.subject.focus();
        return false;
    }

    if (isNaN(form.subject.value) == false) {
        alert("Error: Input in subject is number!");
        form.subject.focus();
        return false;
    }
    if (form.message.value == "") {
        alert("Error: Input in message is empty!");
        form.message.focus();
        return false;
    }

    if (!re.test(form.message.value)) {
        alert("Error: Input in name message invalid characters!");
        form.message.focus();
        return false;
    }

    if (isNaN(form.message.value) == false) {
        alert("Error: Input in message is number!");
        form.message.focus();
        return false;
    }
}


function worker() {
    if (typeof (Worker) !== "undefined") {
        document.getElementById("supported").innerHTML = "You subscribed the browser..";
    }
    else {
        document.getElementById("unsupported").innerHTML = "Not supporting";
    }
}
