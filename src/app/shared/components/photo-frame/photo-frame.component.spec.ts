import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { LikeWidgetModule } from '../like-widget/like-widget.module';

import { PhotoFrameComponent } from './photo-frame.component';

describe(PhotoFrameComponent.name, () => {
	let component: PhotoFrameComponent;
	let rootElement: HTMLElement;
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
		rootElement = fixture.nativeElement;
	});

	it(
		'should create',
		() => {
			fixture.detectChanges();
			expect(component).toBeTruthy();
		}
	);

	it(
		`#${PhotoFrameComponent.prototype.like.name}
		should trigger (@Output liked) once
		when called multiple times whitin debounce time`,
		fakeAsync(
			() => {
				fixture.detectChanges();
				const iterations = 2;
				let likes = 0;
				component.liked.subscribe(() => likes++)
				for (let iteration = 0; iteration < iterations; iteration++) {
					component.like();
				}
				tick(500);
				expect(likes).toBe(1);
			}
		)
	);

	it(
		`#${PhotoFrameComponent.prototype.like.name}
		should trigger (@Output liked) two times
		when called outside debounce time`,
		fakeAsync(
			() => {
				fixture.detectChanges();
				const iterations = 2;
				let likes = 0;
				component.liked.subscribe(() => likes++)
				for (let iteration = 0; iteration < iterations; iteration++) {
					component.like();
					tick(500);
				}
				expect(likes).toBe(2);
			}
		)
	);

	it(
		`<Template>
		should display number of likes
		when (@Input likes) is incremented`,
		() => {
			fixture.detectChanges();
			component.likes++;
			fixture.detectChanges();
			const element: HTMLElement | null = rootElement.querySelector('.like-counter');
			expect(element?.textContent?.trim()).toBe('1');
		}
	);

	it(
		`<Template>
		should update aria-label
		when (@Input likes) is incremented`,
		() => {
			fixture.detectChanges();
			component.likes++;
			fixture.detectChanges();
			const element: HTMLElement | null = rootElement.querySelector('span');
			expect(element?.getAttribute('aria-label')).toBe('1: people liked');
		}
	);

	it(
		`<Template>
		should have aria-label with 0
		when (@Input likes) value is default`,
		() => {
			fixture.detectChanges();
			const element: HTMLElement | null = rootElement.querySelector('span');
			expect(element?.getAttribute('aria-label')).toBe('0: people liked');
		}
	);

	it(
		`<Template>
		should display image with src and description
		when bound to propoerties`,
		() => {
			const description = 'some description';
			const src = 'http://somesite.com/img.jpg';

			component.description = description;
			component.src = src;

			fixture.detectChanges();
			const element: HTMLElement | null = rootElement.querySelector('img');

			expect(element?.getAttribute('alt')).toBe(description);
			expect(element?.getAttribute('src')).toBe(src);
		}
	);
});
