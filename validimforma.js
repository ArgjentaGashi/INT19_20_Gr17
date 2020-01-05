function checkForm(form) {

    var re = /^[\w ]+$/;

    if (form.namee.value == "") {
        alert("Error: Input in name is empty!");
        form.namee.focus();
        return false;
    }

    if (!re.test(form.namee.value)) {
        alert("Error: Input in name contains invalid characters!");
        form.namee.focus();
        return false;
    }

    if (isNaN(form.namee.value) == false) {
        alert("Error: Input in name is number!");
        form.namee.focus();
        return false;
    }

    if (form.lastname.value == "") {
        alert("Error: Input in last name is empty!");
        form.lastname.focus();
        return false;
    }

    if (!re.test(form.lastname.value)) {
        alert("Error: Input in last name contains invalid characters!");
        form.lastname.focus();
        return false;
    }

    if (isNaN(form.lastname.value) == false) {
        alert("Error: Input in last name is number!");
        form.lastname.focus();
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

    if (form.telephonee.value == "") {
        alert("Error: Input in telephone is empty!");
        form.telephonee.focus();
        return false;
    }

    if (isNaN(form.telephonee.value)) {
        alert("Error: Input in telephone not a number!");
        form.telephonee.focus();
        return false;
    }


    if (form.country.value == "") {
        alert("Error: Input in country is empty!");
        form.country.focus();
        return false;
    }

    if (!re.test(form.country.value)) {
        alert("Error: Input in contains country invalid characters!");
        form.country.focus();
        return false;
    }


    if (form.city.value == "") {
        alert("Error: Input in city is empty!");
        form.city.focus();
        return false;
    }

    if (!re.test(form.city.value)) {
        alert("Error: Input in city contains invalid characters!");
        form.city.focus();
        return false;
    }

    if (form.street.value == "") {
        alert("Error: Input in street is empty!");
        form.street.focus();
        return false;
    }

    if (!re.test(form.street.value)) {
        alert("Error: Input in street contains invalid characters!");
        form.street.focus();
        return false;
    }


    return true;
}
