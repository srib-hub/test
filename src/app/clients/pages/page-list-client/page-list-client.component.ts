import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client/client';
import { ClientsService } from '../../service/clients.service';

@Component({
  selector: 'app-page-list-client',
  templateUrl: './page-list-client.component.html',
  styleUrls: ['./page-list-client.component.scss']
})
export class PageListClientComponent implements OnInit {
  public clientList: Client[];

  constructor(private clientService: ClientsService) { }

  ngOnInit(): void {
    this.clientService.collection.subscribe(
      (data) => {
        this.clientList = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
