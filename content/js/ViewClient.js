document.getElementById('type').addEventListener('change', function () {
    const representativeFields = document.getElementById('representativeFields');
    representativeFields.style.display = this.value === 'business' ? 'block' : 'none';
});

document.getElementById('bankForm').addEventListener('submit', function (e) {
    e.preventDefault();

    try {
        const formValues = {
            name: document.getElementById('name').value,
            id: document.getElementById('id').value,
            type: document.getElementById('type').value,
            product: document.getElementById('products').value,
            repName: document.getElementById('repName').value,
            repId: document.getElementById('repId').value,
            repPhone: document.getElementById('repPhone').value
        };

        const client = ClientController.registerClient(formValues);
        const message = ClientController.generateMessage(client);

        document.getElementById('output').textContent = message;
    } catch (error) {
        alert(error.message);
    }
});
