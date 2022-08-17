import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActionDirective } from './action.directive';

describe(ActionDirective.name, () => {
	let component: DumbComponent;
	let rootElement: HTMLElement;
	let fixture: ComponentFixture<DumbComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				ActionDirective,
				DumbComponent
			]
		});
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(DumbComponent);
		component = fixture.componentInstance;
		rootElement = fixture.nativeElement;
	});

	it(
		'should create an instance',
		() => {
			const directive = new ActionDirective();
			expect(directive).toBeTruthy();
		}
	);

	it(
		`<Template> (@Output appAction)
		should emit event with payload
		when 'Enter' key is pressed`,
		() => {
			const element: HTMLElement | null = rootElement.querySelector('.dumb-component');
			const event: Event = new KeyboardEvent('keyup', { key: 'Enter' });
			element?.dispatchEvent(event);
			expect(component.hasEvent()).toBeTrue();
		}
	);

	it(
		`<Template> (@Output appAction)
		should emit event with payload
		when clicked`,
		() => {
			const element: HTMLElement | null = rootElement.querySelector('.dumb-component');
			const event: Event = new Event('click');
			element?.dispatchEvent(event);
			expect(component.hasEvent()).toBeTrue();
		}
	);

});

@Component({
	template: `<div class="dumb-component" (appAction)="actionHandler($event)"></div>`
})
class DumbComponent {

	event: Event | null = null;

	actionHandler(event: Event) {
		this.event = event;
	}

	hasEvent(): boolean {
		return !!this.event;
	}

}
