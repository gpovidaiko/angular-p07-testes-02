import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';

import { LikeWidgetComponent } from './like-widget.component';

describe(LikeWidgetComponent.name, () => {
	let component: LikeWidgetComponent;
	let fixture: ComponentFixture<LikeWidgetComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [FontAwesomeModule],
			declarations: [LikeWidgetComponent],
			providers: [UniqueIdService]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(LikeWidgetComponent);
		component = fixture.componentInstance;
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should auto generate id during ngOnInit when (@Input id) is not assigned', () => {
		fixture.detectChanges();
		expect(component.id).toBeTruthy();
	});

	it('should not generate id during ngOnInit when (@Input id) is assigned', () => {
		const id = 'id';
		component.id = id;
		fixture.detectChanges();
		expect(component.id).toBe(id);
	});

	it(`#${LikeWidgetComponent.prototype.like.name} should trigger (@Output liked) when called (with Async Assertion)`, done => {
		fixture.detectChanges();
		component.liked.subscribe(() => {
			expect(true).toBeTrue();
			done();
		});
		component.like();
	});

	it(`#${LikeWidgetComponent.prototype.like.name} should trigger (@Output liked) when called (with Spy)`, () => {
		spyOn(component.liked, 'emit');
		fixture.detectChanges();
		component.like();
		expect(component.liked.emit).toHaveBeenCalled();
	});
});
