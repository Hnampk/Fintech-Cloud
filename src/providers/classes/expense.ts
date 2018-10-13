import { User } from './user';


export class Expense{
    id: string;
    name: string;
    createdDate: string;
    amount: number;
    actions: Array<Bill>;

    constructor(id: string, name: string, createdDate: string, amount: number){

    }
}

export class Bill{
    id: string;
    name: string;
    totalCost: number;
    payments: Array<Payment> = [];
    createdDate: string;

    constructor(id: string, name: string, totalCost: number, createdDate: string){
        this.id = id;
        this.name = name;
        this.totalCost = totalCost;
        this.createdDate = createdDate;
    }

    onResponseData(payments){
        payments.forEach(element => {
            let payment = new Payment(element.id, element.mustPay, element.hasPay);
            
            payment.setOwner(element.user);

            this.payments.push(payment);
        });
    }

}

export class Payment{
    id: string;
    owner: User;
    mustPay: number;
    hasPaid: number;

    constructor(id: string, mustPay: number, hasPaid: number){
        this.id = id;
        this.mustPay = mustPay;
        this.hasPaid = hasPaid;
    }

    setOwner(owner){
        this.owner = new User();
        this.owner.id = owner.id;
        this.owner.name = owner.username;
    }
}