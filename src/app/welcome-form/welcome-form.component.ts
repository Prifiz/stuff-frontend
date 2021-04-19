import { Component, OnInit } from '@angular/core';
import { Stuff } from '../model/stuff';
import { StuffService } from '../services/stuff.service'

@Component({
  selector: 'app-welcome-form',
  templateUrl: './welcome-form.component.html',
  styleUrls: ['./welcome-form.component.css']
})
export class WelcomeFormComponent implements OnInit {
// stuff!: Stuff;
//   stuff: Stuff;    = {
//     name: 'n',
//     manufacturer: 'man',
//     model: 'mod',
//     description: 'desc'
//   };

  constructor(private stuffService : StuffService) {

  }

  // getStuff(): void {
  //   this.stuffService.getStuff().subscribe(data => {this.stuff = data})
  // }

  ngOnInit(): void {
    // this.getStuff()
  }

}
