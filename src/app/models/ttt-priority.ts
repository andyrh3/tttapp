/**
 * Created by andyrh3 on 11/07/2017.
 */

export class TttPriority {

  id: number;
  name: string;
  position: number;
  dateCreated: Date;
  lastUpdated: Date;

  constructor(data: any) {
    this.id = data.id || null;
    this.name = data.name || '';
    this.position = data.position || null;
    this.dateCreated = data.dateCreated || new Date();
    this.lastUpdated = data.lastUpdated || new Date();
  }

}



