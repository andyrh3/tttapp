import {TttTicket} from './ttt-ticket';

export class TttProject {

  id: number;
  name: string;
  ticketPrepender: string;

  dateCreated: Date;
  lastUpdated: Date;
  tickets: TttTicket[];

  constructor(data: any) {
    this.id = data.id || null;
    this.name = data.name || '';
    this.ticketPrepender = data.ticketPrepender || '';
    this.dateCreated = data.dateCreated || new Date();
    this.lastUpdated = data.lastUpdated || new Date();
    this.tickets = data.tickets || [];
  }

}
