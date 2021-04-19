import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { AddStuffComponent } from './add-stuff/add-stuff.component';
import { StuffComponent } from './stuff/stuff.component';
import { UpcomingMaintenanceComponent } from './upcoming-maintenance/upcoming-maintenance.component'
import { WelcomeFormComponent } from './welcome-form/welcome-form.component'

const routes: Routes = [
  { path: 'maintenance', component: UpcomingMaintenanceComponent },
  { path: 'stuff', component: StuffComponent },
  { path: 'new-stuff', component: AddStuffComponent },
  { path: '', redirectTo: 'maintenance', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
