import ClientController from '../../../../controllers/ClientController.js';

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const identificationNumber = document.getElementById('identificationNumber').value;
            const identificationType = document.getElementById('identificationType').value;
            const personType = document.getElementById('personType').value;
            const country = document.getElementById('country').value;

            const clientData = {
                name: name,
                identificationNumber: identificationNumber,
                identificationType: identificationType,
                personType: personType,
                country: country,
                legalRepresentative: null
            };

            if (personType === 'Empresarial') {
                const legalRepresentativeName = document.getElementById('legalRepresentativeName').value;
                const legalRepresentativeIdentificationNumber = document.getElementById('legalRepresentativeIdentificationNumber').value;
                const legalRepresentativeIdentificationType = document.getElementById('legalRepresentativeIdentificationType').value;
                const legalRepresentativeCountry = document.getElementById('legalRepresentativeCountry').value;
                const legalRepresentativePhone = document.getElementById('legalRepresentativePhone').value;

                clientData.legalRepresentative = {
                    name: legalRepresentativeName,
                    identificationNumber: legalRepresentativeIdentificationNumber,
                    identificationType: legalRepresentativeIdentificationType,
                    country: legalRepresentativeCountry,
                    phone: legalRepresentativePhone,
                };
            }

            console.log(clientData);

            let clientController = new ClientController();
            let clientId = clientController.create(clientData)
                .then(clientCreatedId => {
                    console.log(clientCreatedId);
                    alert("El cliente se creo exitosamente.");
                    form.reset();
                })
                .catch(error => {
                    alert("Ocurrio un eror al intentar crear el cliente, intente nuevamente. Si persiste el error se recomienda contactar al personal del banco.")
                    console.error('Ocurrio un eror al intentar crear el cliente.  detalle:', error);
                });

            console.log(clientId);
        });
    };

    document.getElementById('personType').addEventListener('change', toggleLegalRepresentative);
    toggleLegalRepresentative();
});

function toggleLegalRepresentative() {
    var personType = document.getElementById('personType').value;
    var legalRepFields = document.getElementById('legalRepresentativeFields');

    if (personType === 'Empresarial') {
        legalRepFields.style.display = 'block';
    } else {
        legalRepFields.style.display = 'none';
    }
}
