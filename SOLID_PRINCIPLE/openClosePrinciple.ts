// O --> open for extension and close for modification

// The solid principle---> "O" says that any piece of code should be open for extension but closed for modification.

interface PaymentProcessor{
    process():void;
}


class CreditCardProcessors implements PaymentProcessor{
    process():void{
        console.log("processing credit card payment")
    }
}


class PaypalProcessors implements PaymentProcessor{
    process():void{
        console.log("Processing PayPal payment")
    }
}

class DebitCardProcessors implements PaymentProcessor{
    process():void{
        console.log("Processing debit card payment")
    }
}

// this code is open for extension and closed for modification so here we can extend our code by writing another payment processor upi, see below one

class UPIProcessors implements PaymentProcessor{
    process():void{
        console.log("Processing UPI payment")
    }
}


class PaymentService{
    private paymentProcessors: { [key:string]: PaymentProcessor } = {}
    
    registerProcessor(paymentType:string, processor:PaymentProcessor):void {
        this.paymentProcessors[paymentType] = processor;
    }
    
    
    processPayment(paymentType : string) :void{
        const processor = this.paymentProcessors[paymentType];
        if(processor){
            processor.process(); 
        }else{
            console.log("Unsupported payment type")
        }
    }
}

const paymentService = new PaymentService();

paymentService.registerProcessor('credit_card', new CreditCardProcessors());
paymentService.registerProcessor('PayPal', new PaypalProcessors());
paymentService.registerProcessor('debit_card', new DebitCardProcessors()); 
paymentService.registerProcessor('UPI', new UPIProcessors());

paymentService.processPayment('credit_card');
paymentService.processPayment('PayPal');
paymentService.processPayment('debit_card');
paymentService.processPayment('UPI');
paymentService.processPayment('Bitcoin'); // Test unsupported type
