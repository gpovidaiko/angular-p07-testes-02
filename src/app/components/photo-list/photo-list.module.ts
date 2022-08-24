import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoListComponent } from './photo-list.component';
import { PhotoBoardModule } from 'src/app/shared/components/photo-board/photo-board.module';



@NgModule({
	declarations: [
		PhotoListComponent
	],
	imports: [
		CommonModule,
		PhotoBoardModule,
		FontAwesomeModule
	],
	exports: [
		PhotoListComponent
	]
})
export class PhotoListModule { }
