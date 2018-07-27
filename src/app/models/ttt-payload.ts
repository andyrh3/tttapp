/**
 * Created by andyrh3 on 11/07/2017.
 */
import {TttTicket} from './ttt-ticket';

export class TttPayload {

  action: string;
  tttTicket: TttTicket;

  constructor(data: any) {
    this.tttTicket = data.tttTicket || null;
    this.action = data.action || '';
  }

}
