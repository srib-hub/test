import { StateClient } from 'src/app/clients/enum/state-client.enum';

export interface ClientI {
  tva?: number;
  id: number;
  name: string;
  ca: number;
  comment: string;
  state: StateClient;
}
