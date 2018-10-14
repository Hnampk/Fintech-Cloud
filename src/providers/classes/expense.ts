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
    createdDate: Date;

    constructor(){
        this.id = "";
        this.name = "";
        this.totalCost = 0;
        this.createdDate = new Date();
    }

    onResponseData(id: string, name: string, totalCost: number, createdDate: string,payments){
        this.id = id;
        this.name = name;
        this.totalCost = totalCost;
        this.createdDate = new Date(createdDate);
        if(payments && (payments.length >=0)){
            payments.forEach(element => {
                let payment = new Payment();
                payment.onResponseData(element.id, element.mustPay, element.hasPay);
                payment.setOwner(element.user);
    
                this.payments.push(payment);
            });
        }
    }

}

export class Payment{
    id: string;
    owner: User;
    mustPay: number;
    hasPaid: number;

    constructor(){
        this.id = "";
        this.mustPay = 0;
        this.hasPaid = 0;
        this.owner = new User();
    }

    onResponseData(id: string, mustPay: number, hasPaid: number){
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