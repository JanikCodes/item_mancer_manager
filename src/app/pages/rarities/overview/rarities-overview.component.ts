import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialModule } from '../../../shared/module/material/material.module';
import { HttpService } from '../../../shared/services/http/http.service';
import { RarityHelperService } from '../shared/services/rarity-helper/rarity-helper.service';
import { RarityService } from '../../../shared/services/entities/rarity/rarity.service';
import { Rarity } from '../../../shared/entities/rarity/rarity.entity';

@Component({
  selector: 'rarities-overview-component',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './rarities-overview.component.html',
  styleUrl: './rarities-overview.component.scss',
})
export class RaritiesOverviewComponent implements AfterViewInit, OnInit {
  public dataSource = new MatTableDataSource<Rarity>();
  public loading: boolean = true;
  public displayedColumns: string[] = ['name', 'color'];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  public constructor(
    private httpService: HttpService,
    private rarityHelperService: RarityHelperService,
    private rarityService: RarityService
  ) {}

  public ngOnInit(): void {
    this.rarityHelperService.handleOverviewUpdate$.subscribe(() => {
      this.updateOverview();
    });
  }

  public ngAfterViewInit() {
    this.updateOverview();
  }

  public updateOverview(): void {
    this.rarityService.getUserOverview().subscribe({
      next: (result) => {
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.paginator = this.paginator;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching rarities:', error);
      },
    });
  }
}
