import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialModule } from '../../../shared/module/material/material.module';
import { HttpService } from '../../../shared/services/http/http.service';
import { IRarityTableElement } from '../rarities.types';

@Component({
  selector: 'rarities-overview-component',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './rarities-overview.component.html',
  styleUrl: './rarities-overview.component.scss',
})
export class RaritiesOverviewComponent implements AfterViewInit {
  public displayedColumns: string[] = ['name', 'color'];
  public dataSource = new MatTableDataSource<IRarityTableElement>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  public constructor(private httpService: HttpService) {}

  public ngAfterViewInit() {
    this.httpService.get<IRarityTableElement[]>('rarity-overview').subscribe({
      next: (result) => {
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.paginator = this.paginator;
      },
      error: (error) => {
        console.error('Error fetching rarities:', error);
      },
    });
  }
}
