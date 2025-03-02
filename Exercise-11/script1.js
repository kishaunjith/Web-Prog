function createTable() {
    var tableBody = document.getElementById("dynamicTable").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = "";

    for (var i = 0; i < 3; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < 3; j++) {
            var cell = document.createElement("td");
            cell.textContent = `Row ${i + 1} Column ${j + 1}`;
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    }
}

var button = document.getElementById("hoverButton");

button.addEventListener("mouseover", function () {
    button.style.backgroundColor = "green";
});

button.addEventListener("mouseout", function () {
    button.style.backgroundColor = "red";
});

var textbox = document.getElementById("focusTextbox");

textbox.addEventListener("focus", function () {
    textbox.style.backgroundColor = "yellow";
});

textbox.addEventListener("blur", function () {
    textbox.style.backgroundColor = "green";
});

textbox.addEventListener("change", function () {
    alert("Hello! You changed the textbox value.");
});

function addToList() {
    var inputText = document.getElementById("inputText").value.trim();
    if (inputText) {
        var li = document.createElement("li");
        li.textContent = inputText;
        document.getElementById("itemList").appendChild(li);
        document.getElementById("inputText").value = "";
    }
}

document.getElementById("addButton").addEventListener("dblclick", addToList);

var keyCount = 0;
var keyInput = document.getElementById("keyInput");
var keyCountDisplay = document.getElementById("keyCount");

keyInput.addEventListener("keydown", function () {
    keyCount++;
    keyCountDisplay.textContent = keyCount;
});

createTable();
