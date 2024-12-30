function calculateBalanceProjection(initialBalance, interestRate, months) {
    let currentBalance = initialBalance;
    const projection = [];

    for (let month = 1; month <= months; month++) {
        const interest = currentBalance * interestRate;
        const finalBalance = currentBalance + interest;

        projection.push({
            month: month,
            initialBalance: currentBalance.toFixed(2),
            interest: interest.toFixed(2),
            finalBalance: finalBalance.toFixed(2)
        });

        currentBalance = finalBalance;
    }

    return projection;
}