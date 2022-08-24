import { PhotoBoardService } from './shared/components/photo-board/services/photo-board.service';
import { Component } from '@angular/core';
import { Photo } from './shared/components/photo-board/interfaces/photo.interface';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'angular-p07-testes-02';
}
