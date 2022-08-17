import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LikeWidgetModule } from './shared/components/like-widget/like-widget.module';
import { PhotoBoardModule } from './shared/components/photo-board/photo-board.module';
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
				HttpClientModule,
				LikeWidgetModule,
				PhotoFrameModule,
				PhotoBoardModule
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
