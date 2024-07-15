import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialModule } from '../../../shared/module/material/material.module';
import { HttpService } from '../../../shared/services/http/http.service';
import { IItemTableElement } from '../items.types';

@Component({
  selector: 'items-overview-component',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './items-overview.component.html',
  styleUrl: './items-overview.component.scss',
})
export class ItemsOverviewComponent implements AfterViewInit {
  public dataSource = new MatTableDataSource<IItemTableElement>();
  public loading: boolean = true;
  public displayedColumns: string[] = ['id', 'name', 'description'];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  public constructor(private httpService: HttpService) {}

  public ngAfterViewInit() {
    this.httpService.get<IItemTableElement[]>('item-overview').subscribe({
      next: (result) => {
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.paginator = this.paginator;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching items:', error);
      },
    });
  }
}
