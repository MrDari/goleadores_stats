import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { DataService } from '../services/Data.service';
import { MatTableDataSource } from '@angular/material/table';
import { Player, PlayerData } from '../Interfaces/Players';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-data-table',
  templateUrl: './DataTable.component.css',
  styleUrl: './datos-tabla.component.css'
})
export class DataTableComponent {

  displayedColumns: string[] = ['Photo','Name', 'Last Name', 'Team', 'Goals'];
  dataSource = new MatTableDataSource<PlayerData>();



  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor (private dService: DataService){
    // this.dataSource.filterPredicate = this.customFilterPredicate;

  }

  ngOnInit(){
    this.dService.obtenerStatsGoleo().subscribe( users => {
      this.dataSource.data= users.response;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }

    )
  }

  customFilterPredicate(data: Player, filter: string): boolean {
    const filterValue = filter.toLowerCase();
    return data.name.toLowerCase().includes(filterValue);
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue )
    // this.dataSource.filterPredicate  = this.customFilterPredicate
    console.log(this.dataSource)
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
}
}
