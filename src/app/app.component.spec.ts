import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe(AppComponent.name, () => {
	let app: AppComponent;
	let fixture: ComponentFixture<AppComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				AppComponent
			],
			imports: [
				RouterTestingModule
			],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AppComponent);
		app = fixture.componentInstance;
	});

	it(
		'should create the app',
		() => {
			expect(app).toBeTruthy();
		}
	);

	it(
		`should have as title equals 'angular-p07-testes-02'
		when initialized`,
		() => {
			expect(app.title).toEqual('angular-p07-testes-02');
		}
	);

	/* it(
		'should render title',
		() => {
			const compiled = fixture.nativeElement as HTMLElement;
			expect(compiled.querySelector('.content span')?.textContent).toContain('angular-p07-testes-02 app is running!');
		}
	); */
});
