export interface Ticket {
    id: Number;
    title:string;
    necessary_tickets: Ticket[];
    details: String;
    priority:number;
    state:number;

}
