function calc() {
    var v1 = document.getElementById("t1").value;
    var v2 = document.getElementById("t2").value;

    v1 = parseInt(v1) || 0;
    v2 = parseInt(v2) || 0;

    var v3 = 10 * v1 + 5 * v2;

    document.getElementById("t3").value = v3;
}
