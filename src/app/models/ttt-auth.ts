
export class TttAuth {
  username: string;
  roles: string[];
  token_type: string;
  access_token: string;
  expires_in: number;
  refresh_token: string;

  constructor(data: any) {
    this.username = data.username || null;
    this.roles = data.roles || [];
    this.token_type = data.token_type || '';
    this.access_token = data.access_token || '';
    this.expires_in = data.lastUpdated || 0;
    this.refresh_token = data.refresh_token || '';
  }

}
