import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.html']
})
export class HeaderComponent {
  @Output('featureSelected') featureSelectedEmitter = new EventEmitter<string>();
   
  featureSelected (feature: string) {
    this.featureSelectedEmitter.emit(feature);
  }
}
