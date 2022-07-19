import { Injectable } from '@angular/core';
import { v4 as uuidV4 } from 'uuid';

@Injectable()
export class UniqueIdService {

	private numbeOfGeneratedIds = 0;

	private validIdRegex = /^[A-Za-z]+[\w\-\:\.]*$/;

	constructor() { }

	getNumbeOfGeneratedIds(): number {
		return this.numbeOfGeneratedIds;
	}

	generateUniqueIdWithPrefix(prefix: string): string {
		if (!prefix) throw Error('Prefix can not be empty');

		if (!this.validIdRegex.test(prefix)) throw Error('Prefix not valid');

		const uniqueId = this.generateUniqueId();
		this.numbeOfGeneratedIds++;
		return `${prefix}-${uniqueId}`
	}

	private generateUniqueId(): string {
		return uuidV4();
	}

}
