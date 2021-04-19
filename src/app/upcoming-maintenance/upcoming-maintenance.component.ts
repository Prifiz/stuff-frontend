import { Component, OnInit } from '@angular/core';
import { Stuff } from '../model/stuff';
import { TableColumn } from '../table-data/TableColumn';

@Component({
  selector: 'app-upcoming-maintenance',
  templateUrl: './upcoming-maintenance.component.html',
  styleUrls: ['./upcoming-maintenance.component.css']
})
export class UpcomingMaintenanceComponent implements OnInit {

  stuffTableColumns!: TableColumn[];
  stuff!: Stuff[];

  constructor() { }

  ngOnInit(): void {
    this.initializeColumns();
    this.stuff = this.getStuff();
  }

  initializeColumns(): void {
    this.stuffTableColumns = [
      {
        name: 'Name',
        dataKey: 'name',
        position: 'left',
        isSortable: true
      },
      {
        name: 'Manufacturer',
        dataKey: 'manufacturer',
        position: 'left',
        isSortable: true
      },
      {
        name: 'Model',
        dataKey: 'model',
        position: 'left',
        isSortable: true
      },
      {
        name: 'Description',
        dataKey: 'description',
        position: 'left',
        isSortable: true
      },
    ];
  }

  getStuff(): any[] {
    return [
      {name: 'mon', manufacturer: 'lg', model: '234', description: 'lol'},
      {name: 'mon1', manufacturer: 'lg1', model: '2341', description: 'lol1'}
    ]
  }
}
