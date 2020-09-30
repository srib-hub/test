import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/core/models/client/client';
import { StateClient } from '../../enum/state-client.enum';
import { ClientsService } from '../../service/clients.service';

@Component({
  selector: 'app-page-list-client',
  templateUrl: './page-list-client.component.html',
  styleUrls: ['./page-list-client.component.scss']
})
export class PageListClientComponent implements OnInit {
  public clientList: Client[];
  public tHeaders: string[];
  public states = Object.values(StateClient);
  public selectedId: number;

  constructor(private clientService: ClientsService, private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.selectedId = params['id'];
    });
  }

  ngOnInit(): void {
    this.clientService.collection.subscribe(
      (data) => {
        this.clientList = data;
      },
      (error) => {
        console.log(error);
      }
    );

    this.tHeaders = [
      'Name',
      'CA',
      'State',
      'Comment'
    ];
  }

  changeState(item: Client, event): void {
    this.clientService.changeState(item, event.target.value).subscribe(
      (result) => {
        item.state = result.state;
      }, (err) => {
        console.log(err);
        event.target.value = item.state;
      }
    );
  }

}
