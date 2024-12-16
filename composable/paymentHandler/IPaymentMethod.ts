interface IPaymentMethod
{
    processPayment(amount: number, currency: string): void;
}

export type
{
    IPaymentMethod
};