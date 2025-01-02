import ProductController from '../../../../controllers/ProductController.js';

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("cancelForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const productId = document.getElementById("productId").value;

        let productController = new ProductController();
        debugger;
        productController.cancel(productId)
            .then(transactionId => {
                console.log(transactionId);
                alert("Cancelación exitosa.");
                form.reset();
            })
            .catch(error => {

                alert("Ocurrio un eror al intentar cancelar el producto, intente nuevamente. Si persiste el error se recomienda contactar al personal del banco.")
                console.error('Ocurrio un eror al intentar cancelar el producto.  detalle:', error);
            });

        console.log(clientId);

        console.log("Producto a cancelar, ID:", productId);

        alert(`Producto con ID ${productId} ha sido cancelado.`);
    });
});