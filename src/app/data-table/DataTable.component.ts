import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../services/Data.service';
import { MatTableDataSource } from '@angular/material/table';
import { Player, PlayerData, PlayerResponse } from '../Interfaces/Players';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './DataTable.component.html',
  styleUrl: './DataTable.component.css',
})
export class DataTableComponent implements OnInit {
  displayedColumns: string[] = ['Photo', 'Name', 'Last Name', 'Team', 'Goals'];
  dataSource : MatTableDataSource<PlayerResponse>;
  isDarkTheme = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dService: DataService,
    public themeService: ThemeService
  ) {
  }

  ngOnInit() {
    this.dService.GetGoalStats().subscribe((users: PlayerResponse []) => {
      this.dataSource =  new MatTableDataSource (users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
