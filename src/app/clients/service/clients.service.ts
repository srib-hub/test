import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Client } from 'src/app/core/models/client/client';
import { environment } from 'src/environments/environment';
import { StateClient } from '../enum/state-client.enum';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private pCollection: Observable<Client[]>;
  private url = environment.urlApi;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Client[]>(`${this.url}clients`).pipe(
      map((col) => {
        return col.map((item) => {
          return new Client(item);
        });
      })
    );
  }

  get collection(): Observable<Client[]> {
    return this.pCollection;
  }

  set collection(col: Observable<Client[]>) {
    this.pCollection = col;
  }

  public changeState(item: Client, state: StateClient) {
    const obj = new Client({...item});
    obj.state = state;
    return this.updateItem(obj);
  }

  public updateItem(item: Client): Observable<Client> {
    return this.http.put<Client>(`${this.url}clients/${item.id}`, item);
  }

}
