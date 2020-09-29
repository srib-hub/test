import { ClientI } from '../../interfaces/client-i';

export class Client implements ClientI {
  tva?: number;
  id: number;
  name: string;
  ca: number;
  comment: string;
  state: string;

  constructor(obj?: Partial<Client>) {
    if(obj) {
      Object.assign(this, obj);
    }
  }
}
