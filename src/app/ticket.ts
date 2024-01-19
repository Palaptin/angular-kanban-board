export interface Ticket {

    id: Number;
    title:string;
    necessary_tickets: Ticket[];
    details: String;
    priority:String;
    state:number;

}
