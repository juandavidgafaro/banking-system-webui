document.getElementById('projectionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const initialBalance = parseFloat(document.getElementById('initialBalance').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
    const months = parseInt(document.getElementById('months').value);

    if (isNaN(initialBalance) || isNaN(interestRate) || isNaN(months)) {
        alert('Please enter valid values.');
        return;
    }

    const projection = calculateBalanceProjection(initialBalance, interestRate, months);
    updateView(projection);
});

function updateView(projection) {
    const table = document.getElementById('projectionTable');
    const tbody = table.querySelector('tbody');
    tbody.innerHTML = '';

    projection.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row.month}</td>
            <td>${row.initialBalance}</td>
            <td>${row.interest}</td>
            <td>${row.finalBalance}</td>
        `;
        tbody.appendChild(tr);
    });

    table.style.display = 'table';
}