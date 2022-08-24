import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { buildPhotoList } from 'src/app/shared/test/functions/build-photo-list.function';
import { Photo } from '../interfaces/photo.interface';
import { PhotoBoardService } from './photo-board.service';

@Injectable()
export class PhotoBoardMockService extends PhotoBoardService {

	override getPhotos(): Observable<Photo[]> {
		return of(buildPhotoList());
	}

}
