import LegalRepresentative from './LegalRepresentative.js';

class Client {
    static personTypes = ["Natural","Empresarial"];

    constructor(name, identificationNumber, identificationType, personType, country, legalRepresentative = null) {
        this.name = name;
        this.identificationNumber = identificationNumber;
        this.identificationType = identificationType;
        this.personType = personType;
        this.country = country;
        this.legalRepresentative = legalRepresentative;

        this.#ValidatePersonType();
    }

    #setLegalRepresentative() {
        this.legalRepresentative = new LegalRepresentative(
            this.legalRepresentative.name, 
            this.legalRepresentative.identificationNumber, 
            this.legalRepresentative.identificationType,
            this.legalRepresentative.country,
            this.legalRepresentative.phone);
    }

    #ValidatePersonType() {
        if(this.personType == Client.personTypes[1])
        {
            this.#setLegalRepresentative();
        }
    }
}

export default Client;