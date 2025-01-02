import ProductController from '../../../../controllers/ProductController.js';


document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const type = document.getElementById("type").value;
        const termMonths = document.getElementById("termMonths").value;
        const initialBalance = document.getElementById("initialBalance").value;
        const monthlyInterestPercentage = document.getElementById("monthlyInterestPercentage").value;
        const clientId = document.getElementById("clientId").value;

        const productData = {
            type: type,
            termMonths: termMonths,
            initialBalance: initialBalance,
            monthlyInterestPercentage: monthlyInterestPercentage,
            clientId: clientId,
        };

        console.log(productData);

        let productController = new ProductController();
        debugger;
        productController.create(productData)
            .then(productCreatedId => {
                console.log(productCreatedId);
                alert("El producto se creo exitosamente.")
                form.reset();
            })
            .catch(error => {

                alert("Ocurrio un eror al intentar crear el producto, intente nuevamente. Si persiste el error se recomienda contactar al personal del banco.")
                console.error('Ocurrio un eror al intentar crear el producto.  detalle:', error);
            });

        console.log(clientId);
       
    });
});
