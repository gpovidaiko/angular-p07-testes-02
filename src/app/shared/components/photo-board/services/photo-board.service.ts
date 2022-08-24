import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';
import { Photo } from '../interfaces/photo.interface';

@Injectable()
export class PhotoBoardService {

	private readonly baseApi = 'http://localhost:3000';
	private readonly endpointPhotos = `${this.baseApi}/photos`;

	constructor(private http: HttpClient) { }

	getPhotos(): Observable<Photo[]> {
		return this.http.get<Photo[]>(this.endpointPhotos);
	}

	getPhotosWithUppercaseDescription(): Observable<Photo[]> {
		return this.http.get<Photo[]>(this.endpointPhotos).pipe(
			map(photos => {
				return photos.map(photo => {
					return { ...photo, description: photo.description.toUpperCase() };
				});
			})
		);
	}

}
