let first = [0, 0, 0, 0, 0];
let economy = [0, 0, 0, 0, 0];

function t(a, i, x) {
    let element = document.getElementById("ticket");
    if (x == 1) {
        element.innerHTML = `Name: ${a}<br>Seat: ${i}<br>Class: First Class`;
    } else {
        element.innerHTML = `Name: ${a}<br>Seat: ${i}<br>Class: Economy Class`;
    }
}

function check() {
    let x = document.getElementById("seating").value;
    if (x == 1) {
        checkf();
    } else if (x == 2) {
        checke();
    } else {
        alert("Please enter either 1 for First Class or 2 for Economy");
    }
}

function checkf() {
    let name = document.getElementById("name").value;
    let seatingno = 0;
    let foundseat = 0;

    for (let i = 0; i < 5; i++) {
        if (first[i] == 0) {  
            seatingno = i + 1;  
            first[i] = 1;
            foundseat = 1;
            break;
        }
    }

    if (foundseat == 1) {
        t(name, seatingno, 1);
    } else {
        document.getElementById("ticket").innerHTML = `<p>No first class tickets available. Do you want economy tickets?</p><button id='ce'>Yes</button>`;
        document.getElementById("ce").addEventListener('click', checke);
    }
}

function checke() {
    let name = document.getElementById("name").value;
    let seatingno = 5;
    let foundseat = 0;

    for (let i = 0; i < 5; i++) {
        if (economy[i] == 0) {  
            seatingno++;  
            economy[i] = 1;  
            foundseat = 1;
            break;
        }
    }

    if (foundseat == 1) {
        t(name, seatingno, 2);
    } else {
        document.getElementById("ticket").innerHTML = `<p>No economy tickets available. Do you want first class tickets?</p><button id='cf'>Yes</button>`;
        document.getElementById("cf").addEventListener('click', checkf);
    }
}
