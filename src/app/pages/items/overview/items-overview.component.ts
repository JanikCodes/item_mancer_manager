import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialModule } from '../../../shared/module/material/material.module';
import { HttpService } from '../../../shared/services/http/http.service';
import { ItemTableElement } from '../items.types';

@Component({
  selector: 'items-overview-component',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './items-overview.component.html',
  styleUrl: './items-overview.component.scss',
})
export class ItemsOverviewComponent implements AfterViewInit {
  public displayedColumns: string[] = ['id', 'name', 'description'];
  public dataSource = new MatTableDataSource<ItemTableElement>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  public constructor(private httpService: HttpService) {}

  public ngAfterViewInit() {
    this.httpService.get<ItemTableElement[]>('item-overview').subscribe({
      next: (result) => {
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.paginator = this.paginator;
      },
      error: (error) => {
        console.error('Error fetching items:', error);
      },
    });
  }
}
