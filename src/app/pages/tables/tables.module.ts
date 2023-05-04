import { NgModule } from '@angular/core';
import { NbAlertModule, NbCardModule, NbIconModule, NbInputModule, NbSelectModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { FsIconComponent } from './tree-grid/tree-grid.component';
import { TableCellContentComponent } from './smart-table/table-cell-content/table-cell-content.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    NbAlertModule,
    FormsModule,
    NbSelectModule,
    TranslateModule,
  ],
  declarations: [
    ...routedComponents,
    FsIconComponent,
    TableCellContentComponent
  ],
  exports:[TableCellContentComponent]
})
export class TablesModule { }
