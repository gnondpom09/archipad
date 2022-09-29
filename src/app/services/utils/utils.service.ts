import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  mockSendResult<T>(result: T): Promise<T> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(result);
      }, 100);
    });
  }
}
