export class Employee {
    id!: number;
    acc!: number;
    name!: string;
    balance!: string;
    overdraft!: string;
    b_name!: string;
}
export class Receiver{
 id!: number;
 bic!: String;
 institution_name!: String;
}
export class Transaction{
    id!: number;
    transactionId!: String;
    time!: String;
    sender!: String;
    receiver!: String;
    amount!: String;
    status!: String;
    type!: String

}
export class SDN{
    id!: number;
    name!: String;
}


