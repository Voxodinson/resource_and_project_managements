class CurrencyConverter
{
    static exchangeRates: {
        [key: string]: number
    } = {
        "USD": 1.0,
        "GBR": 0.77,
        "EUR": 0.85,
        "JPR": 110.0,
        "KHR": 4100.0
    };

    static convert(amount: number, fromCurrency: string, toCurrency: string): number
    {
        if(fromCurrency === toCurrency) return amount;
        const convertedAmount = (amount / this.exchangeRates[fromCurrency]) * this.exchangeRates[toCurrency];
        return convertedAmount;
    }
}

export default CurrencyConverter;