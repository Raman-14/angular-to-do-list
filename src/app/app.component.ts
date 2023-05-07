import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-manager';

  globalDB: any;

  receiveData(data: any) {
    console.log(this.globalDB)
    this.globalDB = data;
  }
}
