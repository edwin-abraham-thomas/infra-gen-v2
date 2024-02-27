import { Injectable } from '@angular/core';
import { IpcRenderer } from 'electron';

@Injectable({
  providedIn: 'root',
})
export class DataAccessService {

  constructor() {
  }

  getPath(): string {
    return '';
  }

  async getSystemInfo(): Promise<unknown> {
    return await (window as any).api.getSystemInfo();
  }
}
