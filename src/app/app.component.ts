import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedFeature = 'recipes';

  title = 'app';


  featureSelected (selection: string) {
    this.selectedFeature = selection;
  }
}
