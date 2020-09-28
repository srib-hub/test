import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {
  public title: string;
  public menuIsOpen: boolean;

  constructor() { }

  ngOnInit(): void {
    this.title = 'yolo';
    this.menuIsOpen = false;
  }

  public toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen;
  }

}
