import ProductController from '../../../../controllers/ProductController.js';

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    debugger
    const initialBalance = document.getElementById("initialBalance").value;
    const interestRate = document.getElementById("interestRate").value;
    const months = document.getElementById("months").value;
    const productType = document.getElementById("productType").value;

    const productData = {
        initialBalance: initialBalance,
        interestRate: interestRate,
        months: months,
        productType: productType
    };
    debugger

    console.log("Datos enviados:", productData);

    let productController = new ProductController();
    productController.calculateInterest(productData)
        .then(data => {
            console.log("Resultado calculado:", data);
            document.getElementById('result').value = Math.floor(data);
        })
        .catch(error => {
            debugger;
            alert("Ocurrió un error al intentar obtener la información. Por favor, intente nuevamente.");
            console.error('Error al obtener la información:', error);
        });
});