import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTableComponent } from './mainTable/mainTable.component';
import { MaterialModule } from '../material/material.module';
import { MainDialogFormComponent } from './mainDialogForm/mainDialogForm.component';



@NgModule({
  declarations: [
    MainTableComponent,
    MainDialogFormComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MainTableComponent,
    MainDialogFormComponent
  ]
})
export class ComponentsModule { }
