import { NgModule } from '@angular/core';
import { NbAlertModule, NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { FsIconComponent } from './tree-grid/tree-grid.component';
import { TableCellContentComponent } from './smart-table/table-cell-content/table-cell-content.component';

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    NbAlertModule,
  ],
  declarations: [
    ...routedComponents,
    FsIconComponent,
    TableCellContentComponent
  ],
  exports:[TableCellContentComponent]
})
export class TablesModule { }
