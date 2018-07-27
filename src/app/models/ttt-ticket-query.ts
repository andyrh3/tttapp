import {TttUser} from './ttt-user';

export class TttTicketQuery {

  id: number;
  number: string;
  // mailbox:string;
  // maildomain:string;
  user: TttUser;
  phrase: string;
  dateCreated: Date;
  lastUpdated: Date;

  constructor(data: any) {
    this.id = data.id || null;
    this.number = data.number || '';
    // this.mailbox = data.mailbox || '';
    // this.maildomain = data.maildomain ||
    this.user = data.user || null;
    this.phrase = data.phrase || '';
    this.dateCreated = data.dateCreated || new Date();
    this.lastUpdated = data.lastUpdated || new Date();
  }

}
