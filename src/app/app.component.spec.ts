import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LikeWidgetModule } from './shared/components/like-widget/like-widget.module';
import { PhotoFrameModule } from './shared/components/photo-frame/photo-frame.module';

describe(AppComponent.name, () => {
	let app: AppComponent;
	let fixture: ComponentFixture<AppComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				AppComponent
			],
			imports: [
				RouterTestingModule,
				LikeWidgetModule,
				PhotoFrameModule
			],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AppComponent);
		app = fixture.componentInstance;
	});

	it('should create the app', () => {
		expect(app).toBeTruthy();
	});

	it(`should have as title equals 'angular-p07-testes-02' when initialized`, () => {
		expect(app.title).toEqual('angular-p07-testes-02');
	});

	it('should have likes equals 0 when initialized', () => {
		expect(app.likes).toEqual(0);
	})

	it(`#${AppComponent.prototype.like.name} should increment likes when called`, () => {
		const target = 10;
		for (let index = 0; index < target; index++) {
			app.like();
		}
		expect(app.likes).toBe(target);
	})

	/* it('should render title', () => {
		const compiled = fixture.nativeElement as HTMLElement;
		expect(compiled.querySelector('.content span')?.textContent).toContain('angular-p07-testes-02 app is running!');
	}); */
});
