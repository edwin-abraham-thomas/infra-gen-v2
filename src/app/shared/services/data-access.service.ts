import { Injectable } from '@angular/core';
import { app } from 'electron';

@Injectable({
  providedIn: 'root',
})
export class DataAccessService {
  constructor() {}

  getPath(): string {
    
    return app.getAppPath();
  }
}
