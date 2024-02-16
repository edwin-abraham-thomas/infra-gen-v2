import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataAccessService {
  constructor() {}

  getPath(): string {
    return 'sample data';
  }
}
