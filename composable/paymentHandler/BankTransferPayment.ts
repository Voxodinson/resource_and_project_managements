import {
    type IPaymentMethod,
    CurrencyConverter
} from ".";

class BankTransferPayment implements IPaymentMethod
{
    processPayment(amount: number, currency: string): void
    {
        const amountInUSD = CurrencyConverter.convert(amount, currency, "USD");
        console.log(`Processed credit card payment of $${amountInUSD} (converted from ${currency})`);
    }
}

export default BankTransferPayment;