let hotDays = 0;
let pleasantDays = 0;
let coldDays = 0;

function categorizeTemperature(temp) {
    if (temp >= 85) {
        hotDays++;
        return 'HOT';
    } else if (temp >= 60) {
        pleasantDays++;
        return 'PLEASANT';
    } else {
        coldDays++;
        return 'COLD';
    }
}

function displayTemperatureData(temperatures) {
    const tableBody = document.querySelector('#temperatureTable tbody');
    tableBody.innerHTML = '';
    temperatures.forEach(temp => {
        let category = categorizeTemperature(temp);
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${temp}</td>
            <td>${category}</td>
        `;
        tableBody.appendChild(row);
    });


    document.getElementById('hotCount').textContent = hotDays;
    document.getElementById('pleasantCount').textContent = pleasantDays;
    document.getElementById('coldCount').textContent = coldDays;
}

document.getElementById('processTemperaturesBtn').addEventListener('click', () => {
    const input = document.getElementById('temperatureInput').value;
    let temperatures = input.split(',');
    temperatures = [];
    
    const tempArray = input.split(',');
    
    for (let i = 0; i < tempArray.length; i++) {
        const temp = parseInt(tempArray[i].trim());
        if (!isNaN(temp)) {
            temperatures.push(temp);
        }
    }

    if (temperatures.length === 0) {
        alert('Please enter valid temperatures.');
        return;
    }

    hotDays = 0;
    pleasantDays = 0;
    coldDays = 0;

    displayTemperatureData(temperatures);
});