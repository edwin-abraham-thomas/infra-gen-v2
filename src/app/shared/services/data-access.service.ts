import { Injectable } from '@angular/core';
import { ElectronService } from './electron.service';

@Injectable({
  providedIn: 'root',
})
export class DataAccessService {
  constructor(private readonly _electronService: ElectronService) {}

  async healthCheck(): Promise<boolean>{
    return await this._electronService.healthCheck();
  }
}
