import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order/order';
import { StateOrder } from '../../enum/state-order.enum';
import { OrdersService } from '../../service/orders.service';

@Component({
  selector: 'app-page-list-order',
  templateUrl: './page-list-order.component.html',
  styleUrls: ['./page-list-order.component.scss']
})
export class PageListOrderComponent implements OnInit {
  public collectionOrder$: Observable<Order[]>;
  // public orderList: Order[];
  public tHeaders: string[];
  public states = Object.values(StateOrder);

  constructor(private orderService: OrdersService) { }

  ngOnInit(): void {
    /*this.orderService.collection.subscribe(
      (data) => {
        this.orderList = data;
      },
      (error) => {
        console.log(error);
      }
    );*/

    this.collectionOrder$ = this.orderService.collection;

    this.tHeaders = [
      'Type',
      'Client',
      'Nb. jours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'State'
    ];
  }

  changeState(item: Order, event): void {
    this.orderService.changeState(item, event.target.value).subscribe(
      (result) => {
        item.state = result.state;
      }, (err) => {
        event.target.value = item.state;
      }
    );
  }

  public doHello(): void {
    console.log('Bonjour o/');
  }
}
