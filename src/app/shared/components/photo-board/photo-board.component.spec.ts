import { Component, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { buildPhotoList } from '../../test/functions/build-photo-list.function';
import { PhotoFrameModule } from '../photo-frame/photo-frame.module';
import { Photo } from './interfaces/photo.interface';

import { PhotoBoardComponent } from './photo-board.component';

describe(PhotoBoardComponent.name, () => {
	let fixture: ComponentFixture<PhotoBoardComponent>;
	let component: PhotoBoardComponent;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				PhotoBoardComponent,
				DumbComponent
			],
			imports: [
				PhotoFrameModule
			]
		}).compileComponents();
	});

	beforeEach(async () => {
		fixture = TestBed.createComponent(PhotoBoardComponent);
		component = fixture.componentInstance;
	});

	it(
		'should create',
		() => {
			expect(component).toBeTruthy();
		}
	);

	it(
		`should display rows and columns
		when (@Input photos) has value (with programmatically ngOnChanges)`,
		() => {
			fixture.detectChanges();
			const change: SimpleChanges = { photos: new SimpleChange([], buildPhotoList(), true) };
			component.ngOnChanges(change);
			expect(component.rows.length)
				.withContext('Number of rows')
				.toBe(2);
			expect(component.rows[0].length)
				.withContext('Number of columns from the first row')
				.toBe(4);
			expect(component.rows[1].length)
				.withContext('Number of columns from the second row')
				.toBe(4);
		}
	);

	it(
		`should display rows and columns
		when (@Input photos) has value (with DumbComponent)`,
		() => {
			const fixture = TestBed.createComponent(DumbComponent);
			const dumbComponent = fixture.componentInstance;

			dumbComponent.photos = buildPhotoList();
			fixture.detectChanges();
			expect(dumbComponent.board.rows.length)
				.withContext('Number of rows')
				.toBe(2);
			expect(dumbComponent.board.rows[0].length)
				.withContext('Number of columns from the first row')
				.toBe(4);
			expect(dumbComponent.board.rows[1].length)
				.withContext('Number of columns from the second row')
				.toBe(4);
		}
	);

});

@Component({
	template: `<app-photo-board [photos]="photos"></app-photo-board>`
})
class DumbComponent {

	@ViewChild(PhotoBoardComponent) board!: PhotoBoardComponent;
	photos: Photo[] = [];

}
