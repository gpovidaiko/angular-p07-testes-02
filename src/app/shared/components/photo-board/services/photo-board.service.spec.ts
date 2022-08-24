import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { PhotoBoardService } from './photo-board.service';

const mockedApi = {
	endpoint: 'http://localhost:3000/photos',
	data: [
		{
			id: 1,
			description: 'example 1',
			src:''
		},
		{
			id: 2,
			description: 'example 2',
			src:''
		}
	]
}

describe(PhotoBoardService.name, () => {
	let service: PhotoBoardService;
	let httpController: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule
			],
			providers: [
				PhotoBoardService
			]
		});
	});

	beforeEach(() => {
		service = TestBed.inject(PhotoBoardService);
		httpController = TestBed.inject(HttpTestingController);
	});

	afterEach(() => {
		httpController.verify();
	})

	it(
		'should be created',
		() => {
			expect(service).toBeTruthy();
		}
	);

	it(
		`#${PhotoBoardService.prototype.getPhotosWithUppercaseDescription.name}
		should return photos with description in uppercase
		when called`,
		done => {
			service.getPhotosWithUppercaseDescription()?.subscribe(
				photos => {
					expect(photos[0].description).toBe('EXAMPLE 1');
					expect(photos[1].description).toBe('EXAMPLE 2');
					done()
				}
			)
			httpController
				.expectOne(mockedApi.endpoint)
				.flush(mockedApi.data);
		}
	);

});
