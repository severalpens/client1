import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit/:_id', component: EditComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
