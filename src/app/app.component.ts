import { Component } from '@angular/core';

interface Animal {
  name: string;
  sound: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'POSTERING';

}
