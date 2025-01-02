import TransactionController from '../../../../controllers/TransactionController';

document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const productId = document.getElementById("productId").value;
        const amount = document.getElementById("amount").value;
        const operation = document.getElementById("operation").value;

        const transactionData = {
            productId: productId,
            amount: amount,
            operation: operation
        };

        let transactionController = new TransactionController();
        debugger;
        transactionController.create(transactionData)
            .then(transactionId => {
                console.log(transactionId);
                alert("La transaccion fue exitosa.")
                form.reset();
            })
            .catch(error => {
                alert("Ocurrio un eror al intentar ejecutar la transacción, intente nuevamente. Si persiste el error se recomienda contactar al personal del banco.")
                console.error('Ocurrio un eror al intentar ejecutar la transacción.  detalle:', error);
            });

        console.log(clientId);
    });
});