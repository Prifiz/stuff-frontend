import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Stuff } from '../model/stuff';
import { StuffService } from '../services/stuff.service'
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stuff',
  templateUrl: './stuff.component.html',
  styleUrls: ['./stuff.component.css']
})

export class StuffComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  stuffRecords!: Stuff[];
  dataSource = new MatTableDataSource<Stuff>(this.stuffRecords);
  displayedColumns: string[] = ['name', 'manufacturer', 'model', 'description'];
  selection = new SelectionModel<Stuff>(false, []);
  newRouter = 'new-stuff'

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  constructor(private stuffService: StuffService, private router: Router) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    console.log("Current sort: ${this.sort}");
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.stuffService.getAllStuff().subscribe(data => {
      this.stuffRecords = data
      this.dataSource = new MatTableDataSource<Stuff>(this.stuffRecords);
      this.dataSource.sort = this.sort;
    });
  }

  resetPaging(): void {
    this.paginator.pageIndex = 0;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  removeSelected() {
    this.selection.selected.forEach(item => {
      this.stuffService.deleteStuff(item)
      let index: number = this.stuffRecords.findIndex(d => d === item);
      this.stuffRecords.splice(index, 1)
      this.dataSource = new MatTableDataSource<Stuff>(this.stuffRecords);
    });
    this.selection = new SelectionModel<Stuff>(false, []);
  }


}
