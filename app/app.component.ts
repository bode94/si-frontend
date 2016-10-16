import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1>My First Angular App</h1><chart [type]="type" [data]="data" [options]="options"></chart>'
})
export class AppComponent { 

}
