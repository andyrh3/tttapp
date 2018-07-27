/**
 * Created by andyrh3 on 11/07/2017.
 */

export class TttUser {

  id: number;
  name: string;
  email: string;
  dateCreated: Date;
  lastUpdated: Date;

  constructor(data: any) {
    this.id = data.id || null;
    this.name = data.name || '';
    this.email = data.email || '';
    this.dateCreated = data.dateCreated || new Date();
    this.lastUpdated = data.lastUpdated || new Date();
  }

}
