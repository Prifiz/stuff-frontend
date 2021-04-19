import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoIdStuff } from '../model/no-id-stuff';
import { StuffService } from '../services/stuff.service';

@Component({
  selector: 'app-add-stuff',
  templateUrl: './add-stuff.component.html',
  styleUrls: ['./add-stuff.component.css']
})
export class AddStuffComponent implements OnInit {

  // stuff: NoIdStuff = {} as NoIdStuff;

  constructor(private stuffService : StuffService, private router: Router) { }

  ngOnInit(): void {
  }

  submitted = false;

  onSubmit() { this.submitted = true; }

  newStuff(stuff: NoIdStuff) {
    console.log("Before create")
    this.stuffService.createStuff(stuff);
    this.router.navigate(['/stuff']);
  }
}
