import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { of } from 'rxjs';
import { PhotoBoardMockService } from 'src/app/shared/components/photo-board/services/photo-board-mock.service';
import { PhotoBoardService } from 'src/app/shared/components/photo-board/services/photo-board.service';
import { buildPhotoList } from 'src/app/shared/test/functions/build-photo-list.function';
import { PhotoBoardModule } from './../../shared/components/photo-board/photo-board.module';

import { PhotoListComponent } from './photo-list.component';

describe(PhotoListComponent.name, () => {
	let fixture: ComponentFixture<PhotoListComponent>;
	let component: PhotoListComponent;
	let rootElement: HTMLElement
	let service: PhotoBoardService;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				PhotoListComponent
			],
			imports: [
				HttpClientModule,
				FontAwesomeModule,
				PhotoBoardModule
			],
			providers: [
				PhotoBoardService
			]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PhotoListComponent);
		component = fixture.componentInstance;
		rootElement = fixture.nativeElement;
		service = TestBed.inject(PhotoBoardService);
	});

	it(
		'should create',
		() => {
			expect(component).toBeTruthy();
		}
	);

	it(
		`<Template>
		should display board
		when data arrives`,
		async () => {
			const photos = buildPhotoList();
			spyOn(service, 'getPhotos')
				.and.returnValue(of(photos));
			fixture.detectChanges();

			await fixture.whenStable();

			fixture.detectChanges();

			const board = rootElement.querySelector('app-photo-board');
			const loader = rootElement.querySelector('.loader');

			expect(board).withContext('should display board').not.toBeNull();
			expect(loader).withContext('should not display loader').toBeNull();
		}
	);

	it(
		`<Template>
		should display loader
		while waiting for data`,
		() => {
			spyOn(service, 'getPhotos')
				.and.returnValue(of([]));
			fixture.detectChanges();

			const board = rootElement.querySelector('app-photo-board');
			const loader = rootElement.querySelector('.loader');

			expect(board).withContext('should not display board').toBeNull();
			expect(loader).withContext('should display loader').not.toBeNull();
		}
	);

});

describe(`${PhotoListComponent.name} (mock provider example - useValue)`, () => {
	let fixture: ComponentFixture<PhotoListComponent>;
	let rootElement: HTMLElement

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				PhotoListComponent
			],
			imports: [
				HttpClientModule,
				FontAwesomeModule,
				PhotoBoardModule
			],
			providers: [
				{
					provide: PhotoBoardService,
					useValue: {
						getPhotos() {
							return of(buildPhotoList());
						}
					}
				}
			]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PhotoListComponent);
		rootElement = fixture.nativeElement;
	});

	it(
		`<Template>
		should display board
		when data arrives`,
		async () => {
			fixture.detectChanges();

			await fixture.whenStable();

			fixture.detectChanges();

			const board = rootElement.querySelector('app-photo-board');
			const loader = rootElement.querySelector('.loader');

			expect(board).withContext('should display board').not.toBeNull();
			expect(loader).withContext('should not display loader').toBeNull();
		}
	);

	it(
		`<Template>
		should display loader
		while waiting for data`,
		() => {
			fixture.detectChanges();

			const board = rootElement.querySelector('app-photo-board');
			const loader = rootElement.querySelector('.loader');

			expect(board).withContext('should not display board').toBeNull();
			expect(loader).withContext('should display loader').not.toBeNull();
		}
	);

});

describe(`${PhotoListComponent.name} (mock provider example - useClass)`, () => {
	let fixture: ComponentFixture<PhotoListComponent>;
	let rootElement: HTMLElement

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				PhotoListComponent
			],
			imports: [
				HttpClientModule,
				FontAwesomeModule,
				PhotoBoardModule
			],
			providers: [
				{
					provide: PhotoBoardService,
					useClass: PhotoBoardMockService
				}
			]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PhotoListComponent);
		rootElement = fixture.nativeElement;
	});

	it(
		`<Template>
		should display board
		when data arrives`,
		async () => {
			fixture.detectChanges();

			await fixture.whenStable();

			fixture.detectChanges();

			const board = rootElement.querySelector('app-photo-board');
			const loader = rootElement.querySelector('.loader');

			expect(board).withContext('should display board').not.toBeNull();
			expect(loader).withContext('should not display loader').toBeNull();
		}
	);

	it(
		`<Template>
		should display loader
		while waiting for data`,
		() => {
			fixture.detectChanges();

			const board = rootElement.querySelector('app-photo-board');
			const loader = rootElement.querySelector('.loader');

			expect(board).withContext('should not display board').toBeNull();
			expect(loader).withContext('should display loader').not.toBeNull();
		}
	);

});
