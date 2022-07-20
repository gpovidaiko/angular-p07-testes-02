import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LikeWidgetModule } from '../like-widget/like-widget.module';

import { PhotoFrameComponent } from './photo-frame.component';

describe(PhotoFrameComponent.name, () => {
	let component: PhotoFrameComponent;
	let fixture: ComponentFixture<PhotoFrameComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				PhotoFrameComponent
			],
			imports: [
				LikeWidgetModule
			]
		})
			.compileComponents();

		fixture = TestBed.createComponent(PhotoFrameComponent);
		component = fixture.componentInstance;
	});

	it('should create', () => {
		fixture.detectChanges();
		expect(component).toBeTruthy();
	});
});
