document.getElementById('processData').addEventListener('click', () => {
    const rawData = document.getElementById('clientData').value;

    let clientData;
    try {
        clientData = JSON.parse(rawData);
    } catch (error) {
        alert('Please enter valid JSON.');
        return;
    }

    const { averageBalance, topClients } = processClientData(clientData);
    renderAverageBalance(averageBalance);
    renderTopClients(topClients);
});

function processClientData(clientData) {
    const balancesByProduct = {};
    const clientsByProduct = {};

    clientData.forEach(({ name, product, balance }) => {
        if (!balancesByProduct[product]) {
            balancesByProduct[product] = [];
        }
        balancesByProduct[product].push(balance);

        if (!clientsByProduct[product]) {
            clientsByProduct[product] = [];
        }
        clientsByProduct[product].push(new Client(name, product, balance));
    });

    const averageBalance = Object.entries(balancesByProduct).map(([product, balances]) => ({
        product,
        average: (balances.reduce((sum, balance) => sum + balance, 0) / balances.length).toFixed(2),
    }));

    const topClients = Object.entries(clientsByProduct).map(([product, clients]) => ({
        product,
        topClients: clients
            .sort((a, b) => b.balance - a.balance)
            .slice(0, 10),
    }));

    return { averageBalance, topClients };
}

function renderAverageBalance(data) {
    const tableBody = document.getElementById('averageBalanceTable').querySelector('tbody');
    tableBody.innerHTML = '';

    data.forEach(({ product, average }) => {
        const row = `<tr>
            <td>${product}</td>
            <td>${average}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

function renderTopClients(data) {
    const tableBody = document.getElementById('topClientsTable').querySelector('tbody');
    tableBody.innerHTML = '';

    data.forEach(({ product, topClients }) => {
        topClients.forEach(({ name, balance }) => {
            const row = `<tr>
                <td>${product}</td>
                <td>${name}</td>
                <td>${balance.toFixed(2)}</td>
            </tr>`;
            tableBody.innerHTML += row;
        });
    });
}