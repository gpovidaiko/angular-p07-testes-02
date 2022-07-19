import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-p07-testes-02';
  likes = 0;

  like(): void {
	this.likes++;
  }
}
