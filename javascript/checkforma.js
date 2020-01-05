function checkForm(form) {

    var re = /^[\w ]+$/;

    if (form.name.value == "") {
        alert("Error: Input in product name is empty!");
        form.name.focus();
        return false;
    }

    if (!re.test(form.name.value)) {
        alert("Error: Input in product name contains invalid characters!");
        form.name.focus();
        return false;
    }

    if (isNaN(form.name.value) == false) {
        alert("Error: Input in product name is number!");
        form.namee.focus();
        return false;
    }

    if (form.contact.value == "") {
        alert("Error: Input in contact is empty!");
        form.contact.focus();
        return false;
    }

    if (!re.test(form.contact.value)) {
        alert("Error: Input in contact contains invalid characters!");
        form.contact.focus();
        return false;
    }

    if (isNaN(form.contact.value) == false) {
        alert("Error: Input in contact is number!");
        form.contact.focus();
        return false;
    }


    if (form.address.value == "") {
        alert("Error: Input in address is empty!");
        form.address.focus();
        return false;
    }

    if (!re.test(form.address.value)) {
        alert("Error: Input in address contains invalid characters!");
        form.address.focus();
        return false;
    }

    if (isNaN(form.address.value) == false) {
        alert("Error: Input in address is number!");
        form.address.focus();
        return false;
    }

    if (form.mobile.value == "") {
        alert("Error: Input in mobile is empty!");
        form.mobile.focus();
        return false;
    }

    if (isNaN(form.mobile.value)) {
        alert("Error: Input in mobile not a number!");
        form.mobile.focus();
        return false;
    }


    if (form.country.value == "") {
        alert("Error: Input in country is empty!");
        form.country.focus();
        return false;
    }

    if (!re.test(form.country.value)) {
        alert("Error: Input contains in country invalid characters!");
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

    if (form.zip.value == "") {
        alert("Error: Input in zip is empty!");
        form.zip.focus();
        return false;
    }

    if (!re.test(form.zip.value)) {
        alert("Error: Input in zip contains invalid characters!");
        form.zip.focus();
        return false;
    }
    if (isNaN(form.zip.value)) {
        alert("Error: Input in zip not a number!");
        form.zip.focus();
        return false;
    }


    return true;
}


function clickCounter() {
    if(typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }