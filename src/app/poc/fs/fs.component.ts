import { Component } from '@angular/core';
import { DataAccessService } from '../../shared/services/data-access.service';

@Component({
  selector: 'app-fs',
  templateUrl: './fs.component.html',
  styleUrl: './fs.component.scss'
})
export class FsComponent {

  data: unknown;
  
  constructor(private readonly _dataAccessService: DataAccessService) {}

  async trigger(): Promise<void> {
    this.data = await this._dataAccessService.healthCheck();
  }
}
