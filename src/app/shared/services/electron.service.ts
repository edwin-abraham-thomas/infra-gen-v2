import { Injectable } from '@angular/core';
import { Api } from '../interfaces/electron/api';

@Injectable({
  providedIn: 'root',
})
export class ElectronService {
  private readonly _api!: Api;

  constructor() {
    this._api = (window as any).api as Api;
    if (!this._api) {
      console.warn('Unable to initialize electron bridge');
    }
  }

  async healthCheck(): Promise<boolean> {
    return await this._api.healthCheck();
  }
}
