function updateTime() {
    const currentTime = new Date();
    document.getElementById("currentTime").textContent = currentTime.toLocaleTimeString();
}

setInterval(updateTime, 1000);

document.getElementById("userForm").addEventListener("submit", function (event) {
    event.preventDefault();
    
    document.querySelectorAll('.error').forEach(error => error.textContent = "");

    let isValid = true;

    const name = document.getElementById("name").value;
    if (name === "" || name.length > 15) {
        document.getElementById("nameError").textContent = "Invalid Name!";
        isValid = false;
    }

    const address = document.getElementById("address").value;
    if (address === "") {
        document.getElementById("addressError").textContent = "Address is required!";
        isValid = false;
    }

    const zip = document.getElementById("zip").value;
    if (!/^\d{6}$/.test(zip)) {
        document.getElementById("zipError").textContent = "Invalid Zip Code!";
        isValid = false;
    }

    const phone = document.getElementById("phone").value;
    if (!/^\d{10}$/.test(phone)) {
        document.getElementById("phoneError").textContent = "Invalid Phone Number!";
        isValid = false;
    }

    const email = document.getElementById("email").value;
    if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)) {
        document.getElementById("emailError").textContent = "Invalid Email!";
        isValid = false;
    }

    const password = document.getElementById("password").value;
    if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/.test(password)) {
        document.getElementById("passwordError").textContent = "Invalid Password!";
        isValid = false;
    }

    const pan = document.getElementById("pan").value;
    if (!/^[A-Z]{5}\d{4}[A-Z]{1}$/.test(pan)) {
        document.getElementById("panError").textContent = "Invalid PAN Number!";
        isValid = false;
    }

    const gender = document.getElementsByName("gender");
    if (![...gender].some(radio => radio.checked)) {
        document.getElementById("genderError").textContent = "Gender is required!";
        isValid = false;
    }

    const country = document.getElementById("country").value;
    if (country === "") {
        document.getElementById("countryError").textContent = "Country is required!";
        isValid = false;
    }

    const preferences = document.getElementsByName("preferences");
    if (![...preferences].some(checkbox => checkbox.checked)) {
        document.getElementById("preferencesError").textContent = "At least one preference is required!";
        isValid = false;
    }

    if (isValid) {
        let formContent = `Name: ${name}\nAddress: ${address}\nZip Code: ${zip}\nPhone: ${phone}\nEmail: ${email}\nPassword: ${password}\nPAN: ${pan}\nGender: ${document.querySelector('input[name="gender"]:checked').value}\nCountry: ${country}\nPreferences: ${[...preferences].filter(checkbox => checkbox.checked).map(checkbox => checkbox.value).join(", ")}`;
        document.getElementById("formContent").textContent = formContent;
    }
});
