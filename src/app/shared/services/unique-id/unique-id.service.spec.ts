import { TestBed } from '@angular/core/testing';

import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
	let service: UniqueIdService;

	beforeEach(() => {
	  TestBed.configureTestingModule({
		providers: [UniqueIdService]
	  });
	  service = TestBed.inject(UniqueIdService);
	});

	it('should be created', () => {
	  expect(service).toBeTruthy();
	});

	it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
		const id = service.generateUniqueIdWithPrefix('app');
		expect(id.startsWith('app-')).toBeTrue();
	});

	it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate duplicate ID's when called multiple times`, () => {
		const ids = new Set();
		const target = 50;
		for (let index = 0; index < target; index++) {
			ids.add(service.generateUniqueIdWithPrefix('app'));
		}
		expect(ids.size).toBe(target);
	});

	it(`#${UniqueIdService.prototype.getNumbeOfGeneratedIds.name} should return the number of generated ID's when called`, () => {
		service.generateUniqueIdWithPrefix('app');
		service.generateUniqueIdWithPrefix('app');
		expect(service.getNumbeOfGeneratedIds()).toBe(2);
	});

	it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should throw exception when called with empty prefix`, () => {
		const emptyValues: any[] = [null, undefined, ''];
		emptyValues.forEach(emptyValue => {
			expect(() => service.generateUniqueIdWithPrefix(emptyValue)).withContext(`Empty value: ${emptyValue}`).toThrow()
		})
	});

	it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should throw exception when called with invalid prefix`, () => {
		const invalidValues: any[] = ['0', '1', '-'];
		invalidValues.forEach(emptyValue => {
			expect(() => service.generateUniqueIdWithPrefix(emptyValue)).withContext(`Invalid value: ${emptyValue}`).toThrow()
		})
	});
});
