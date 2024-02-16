import { Component } from '@angular/core';
import { DataAccessService } from '../../shared/services/data-access.service';

@Component({
  selector: 'app-fs',
  templateUrl: './fs.component.html',
  styleUrl: './fs.component.scss'
})
export class FsComponent {
  
  constructor(private readonly _dataAccessService: DataAccessService) {}

  trigger(): void {
    const path = this._dataAccessService.getPath();
    console.log('Path', path);
  }
}
