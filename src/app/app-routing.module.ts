import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AccountComponent } from './components/account/account.component';
import { RegisterComponent } from './components/register/register.component';
import { GroupDetailComponent } from './components/detail/group-detail/group-detail.component';
import { HomeComponent } from './components/home/home.component';
import { ChatComponent } from './components/chat/chat.component';
import { SocketTestComponent } from './components/sockettest/sockettest.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'account', component: AccountComponent },
  { path: 'group-detail', component: GroupDetailComponent },
  { path: 'chat', component: ChatComponent },
  { path: '', component: HomeComponent },
  { path: 'sockettest', component: SocketTestComponent },
  { path: '', component: HomeComponent },
  { path: '', component: HomeComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
