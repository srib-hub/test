import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() state: string;
  @HostBinding('class') className: string;

  constructor() { }

  private formatClass(state: string): string {
    return `state-${state.trim().toLowerCase().replace(' ', '-')}`;
  }

  ngOnChanges() {
    this.className = this.formatClass(this.state);
    console.log(this.className);
  }
}
