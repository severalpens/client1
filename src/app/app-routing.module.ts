import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { AccountComponent } from './components/account/account.component';


const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'account', component: AccountComponent }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
