/**
 * Created by andyrh3 on 11/07/2017.
 */
import {TttUser} from './ttt-user';
import {TttProject} from './ttt-project';
import {TttType} from './ttt-type';
import {TttPriority} from './ttt-priority';
import {TttComment} from './ttt-comment';
import {TttAction} from './ttt-action';

export class TttTicket {

  id: number;
  number: string;
  project: TttProject;
  type: TttType;
  title: string;
  description: string;
  assignee: TttUser;
  priority: TttPriority;
  status: string;
  creator: TttUser;
  dateCreated: Date;
  lastUpdated: Date;
  subscribers: TttUser[];
  comments: TttComment[];
  actions: TttAction[];

  constructor(data: any) {
    this.id = data.id || null;
    this.number = data.number || '';
    this.project = data.project || null;
    this.type = data.type || null;
    this.title = data.title || '';
    this.description = data.description || '';
    this.assignee = data.assignee || null;
    this.priority = data.priority || null;
    this.status = data.status || null;
    this.creator = data.creator || null;
    this.dateCreated = data.dateCreated || new Date();
    this.lastUpdated = data.lastUpdated || new Date();
    this.subscribers = data.subscribers || [];
    this.comments = data.comments || [];
    this.actions = data.actions || [];
  }

}
