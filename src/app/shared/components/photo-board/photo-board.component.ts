import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Photo } from './interfaces/photo.interface';

@Component({
	selector: 'app-photo-board',
	templateUrl: './photo-board.component.html',
	styleUrls: ['./photo-board.component.scss']
})
export class PhotoBoardComponent implements OnInit, OnChanges {

	@Input() photos: Photo[] | null = [];
	rows: any[][] = [];

	constructor() { }

	ngOnInit(): void {
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['photos']) {
			this.rows = this.groupColumns(changes['photos'].currentValue);
		}
	}

	groupColumns(photos: Photo[]): any[][] {
		const newRows = [];
		const step = 4;

		for (let index = 0; index < photos.length; index += step) {
			newRows.push(photos.slice(index, index + step));
		}

		return newRows;
	}

}
