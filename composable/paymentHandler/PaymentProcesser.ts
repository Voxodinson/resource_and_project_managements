import {
    type IPaymentMethod,
    CurrencyConverter,
} from "./";

class PaymentProcessor
{
    private baseAmount: number;
    private discountRate: number;
    private taxRate: number;
    private totalAmount: number;
    private paidAmount: number = 0;

    constructor(baseAmount: number, discountRate: number, taxRate: number)
    {
        this.baseAmount = baseAmount;
        this.discountRate = discountRate;
        this.taxRate = taxRate;
        this.totalAmount = this.calculateTotalWithDiscountAndTax();
    }

    private calculateTotalWithDiscountAndTax(): number
    {
        const discountAmount = this.baseAmount * this.discountRate;
        const discountedAmount = this.baseAmount - discountAmount;
        console.log(`Discount applied: $${discountAmount} (${this.discountRate * 100}% discount)`);
        
        const taxAmount = discountedAmount * this.taxRate;
        console.log(`Tax applied: $${taxAmount} (${this.taxRate * 100}% tax rate)`);
        
        const totalAmount = discountedAmount + taxAmount;
        console.log(`Total after discount and tax: $${totalAmount}`);
        
        return totalAmount;
    }

    processPayments(payments: {
        method: IPaymentMethod,
        amount: number,
        currency: string
    }[]): void
    {
        payments.forEach(payment => {
            const amountInUSD = CurrencyConverter.convert(payment.amount, payment.currency, "USD");
            payment.method.processPayment(payment.amount, payment.currency);
            this.paidAmount += amountInUSD;
        });

        console.log(`Total paid so far: $${this.paidAmount} / $${this.totalAmount}`);
        
        if(this.paidAmount >= this.totalAmount)
        {
            console.log("Payment complete!");
            if(this.paidAmount > this.totalAmount)
            {
                console.log(`Overpayment of $${this.paidAmount - this.totalAmount}`);
            }
        }
        else
        {
            console.log(`Remaining balance: $${this.totalAmount - this.paidAmount}`);
        }
    }
}

export default PaymentProcessor;