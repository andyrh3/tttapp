/**
 * Created by andyrh3 on 11/07/2017.
 */
import {TttUser} from './ttt-user';
import {TttProject} from './ttt-project';
import {TttType} from './ttt-type';
import {TttPriority} from './ttt-priority';

export class TttAction {

  id: number;
  comment: string;
  user: TttUser;
  dateCreated: Date;
  lastUpdated: Date;

  constructor(data: any) {
    this.id = data.id || null;
    this.user = data.user || null;
    this.comment = data.comment || '';
    this.dateCreated = data.dateCreated || new Date();
    this.lastUpdated = data.lastUpdated || new Date();
  }

}
