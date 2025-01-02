import ReportController from '../../../controllers/ReportController.js';

async function fetchAndDisplayData() {
    try {

        let reportController = new ReportController();
        reportController.getAverageBalanceByProductType()
            .then(data => {

                debugger;

                setData(data);

                console.log(data);
            })
            .catch(error => {
                console.error('Ocurrio un eror al intentar obtener la información.  detalle:', error);
            });
    } catch (error) {
        console.error("Error al obtener los datos de cuentas:", error);
    }
}

function setData(accountData)
{
    const accountNames = {
        "savingsAccount": "Cuenta de Ahorros",
        "checkingAccount": "Cuenta Corriente",
        "cdt": "CDT"
    };


    const tableBody = document.querySelector("#accountTable tbody");
    tableBody.innerHTML = "";

    for (const [key, value] of Object.entries(accountData)) {
        const row = document.createElement("tr");

        const accountTypeCell = document.createElement("td");
        accountTypeCell.textContent = accountNames[key] || key;

        const balanceCell = document.createElement("td");
        balanceCell.textContent = value;

        row.appendChild(accountTypeCell);
        row.appendChild(balanceCell);
        tableBody.appendChild(row);
    }
}

fetchAndDisplayData();