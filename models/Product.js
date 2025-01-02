class product {

    constructor(type, termMonths, initialBalance, monthlyInterestPercentage, clientId) {
        this.type = type;
        this.termMonths = termMonths;
        this.initialBalance = initialBalance;
        this.monthlyInterestPercentage = monthlyInterestPercentage;
        this.clientId = clientId;
    }
}

export default product;