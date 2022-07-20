import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, takeUntil } from 'rxjs';

@Component({
	selector: 'app-photo-frame',
	templateUrl: './photo-frame.component.html',
	styleUrls: ['./photo-frame.component.scss']
})
export class PhotoFrameComponent implements OnInit, OnDestroy {

	@Input() description: string = '';
	@Input() src: string = '';
	@Input() likes: number = 0;
	@Output() liked: EventEmitter<void> = new EventEmitter();
	private debounceSubject: Subject<void> = new Subject();
	private unsubscribe: Subject<void> = new Subject();

	constructor() { }

	ngOnInit(): void {
		this.debounceSubject
			.asObservable()
			.pipe(
				debounceTime(500),
				takeUntil(this.unsubscribe)
			)
			.subscribe(() => this.liked.emit());

	}

	ngOnDestroy(): void {
		this.unsubscribe.next();
		this.unsubscribe.complete();
	}

	like(): void {
		this.debounceSubject.next();
	}

}
