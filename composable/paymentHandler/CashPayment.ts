import {
    type IPaymentMethod,
    CurrencyConverter
} from "./";

class CashPayment implements IPaymentMethod
{
    processPayment(amount: number, currency: string): void
    {
        const amountInUSD = CurrencyConverter.convert(amount, currency, "USD");
        console.log(`Processed cash payment of $${amountInUSD} (converted from ${currency})`);
    }
}

export default CashPayment;