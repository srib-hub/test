import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Client } from 'src/app/shared/models/client/client';
import { environment } from 'src/environments/environment';

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
}
