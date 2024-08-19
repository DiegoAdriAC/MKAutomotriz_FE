import { Component, Input, OnChanges } from '@angular/core';
import { Columns } from '../../interfaces/mainTable.interface';

@Component({
  selector: 'app-main-table',
  templateUrl: './mainTable.component.html',
  styleUrl: './mainTable.component.css',
})
export class MainTableComponent<T> implements OnChanges {
  @Input() columns: Columns[] = [];
  displayedColumns: string[] = [];
  @Input() dataSource: T[] = [];

  ngOnChanges(): void {
    this.getDisplayColumns();
  }

  getDisplayColumns(): void {
    this.displayedColumns = this.columns.filter(c => c.status == true).map(c => {
      return c.key
    });
  }
}
