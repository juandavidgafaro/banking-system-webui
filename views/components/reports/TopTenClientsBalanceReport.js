import ReportController from '../../../controllers/ReportController.js';

let reportController = new ReportController();

reportController.getTopTenClientsByProductBalance()
    .then(data => {

        debugger;

        setDataTable(data);

        console.log(data);
    })
    .catch(error => {
        console.error('Ocurrio un eror al intentar obtener la información.  detalle:', error);
    });




function populateTable(tableId, clients) {
    const table = document.getElementById(tableId).getElementsByTagName('tbody')[0];
    clients.forEach(client => {
        const row = table.insertRow();
        row.insertCell(0).innerText = client.id;
        row.insertCell(1).innerText = client.name;
        row.insertCell(2).innerText = client.identificationNumber;
        row.insertCell(3).innerText = client.identificationType;
        row.insertCell(4).innerText = client.personType;
        row.insertCell(5).innerText = client.country;
        row.insertCell(6).innerText = client.legalRepresentative.name;
        row.insertCell(7).innerText = client.legalRepresentative.identificationNumber;
        row.insertCell(8).innerText = client.legalRepresentative.phone;
    });
}

function setDataTable(data) {
    populateTable('savingsTable', data.clientsBySavingsAccounts);
    populateTable('checkingTable', data.clientsByCheckingAccounts);
    populateTable('cdtTable', data.clientsByCDTs);
}
