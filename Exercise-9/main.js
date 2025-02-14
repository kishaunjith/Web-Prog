function calc() {
    let rangeid = "";
    let gender = document.querySelector("#select1").value;
    let wt_lbs = parseFloat(document.getElementById("id1").value);
    let ht_ft = parseFloat(document.getElementById("id2").value);
    let ht_in = parseFloat(document.getElementById("id3").value);

    if (isNaN(wt_lbs) || isNaN(ht_ft) || isNaN(ht_in)) {
        alert("Please enter valid numbers for weight and height.");
        return;
    }

    // Convert weight to kg
    let wt_kg = wt_lbs * 0.453592;

    // Convert height to meters
    let ht_m = (ht_ft * 0.3048) + (ht_in * 0.0254);

    if (ht_m <= 0) {
        alert("Height must be greater than zero.");
        return;
    }

    // Calculate BMI
    let bmi = wt_kg / Math.pow(ht_m, 2);
    document.getElementById("id4").value = bmi.toFixed(2);

    if (gender === "male") {
        if (bmi > 31.10) {
            alert("You are Very overweight or in the obese range");
            rangeid = "tr6";
        } else if (bmi > 27.81 && bmi <= 31.10) {
            alert("Overweight range");
            rangeid = "tr5";
        } else if (bmi > 26.41 && bmi <= 27.80) {
            alert("Marginally overweight range");
            rangeid = "tr4";
        } else if (bmi > 20.71 && bmi <= 26.40) {
            alert("Ideal range");
            rangeid = "tr3";
        } else if (bmi > 17.501 && bmi <= 20.70) {
            alert("Underweight");
            rangeid = "tr2";
        } else if (bmi <= 17.50) {
            alert("Anorexia");
            rangeid = "tr1";
        }
    } else if (gender === "female") {
        if (bmi > 32.30) {
            alert("You are Very overweight or in the obese range");
            rangeid = "tr6";
        } else if (bmi > 27.31 && bmi <= 32.30) {
            alert("Overweight range");
            rangeid = "tr5";
        } else if (bmi > 25.81 && bmi <= 27.30) {
            alert("Marginally overweight range");
            rangeid = "tr4";
        } else if (bmi > 19.11 && bmi <= 25.80) {
            alert("Ideal range");
            rangeid = "tr3";
        } else if (bmi > 17.51 && bmi <= 19.10) {
            alert("Underweight");
            rangeid = "tr2";
        } else if (bmi <= 17.50) {
            alert("Anorexia");
            rangeid = "tr1";
        }
    }

    if (rangeid) {
        document.querySelectorAll("tr").forEach(row => row.classList.remove("highlight"));
        document.getElementById(rangeid).classList.add("highlight");
    }
}
