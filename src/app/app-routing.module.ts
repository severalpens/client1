import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AccountComponent } from './components/account/account.component';
import { RegisterComponent } from './components/register/register.component';
import { GroupDetailComponent } from './components/detail/group-detail/group-detail.component';
import { HomeComponent } from './components/home/home.component';
import { ChatComponent } from './components/chat/chat.component';
import { SocketTestComponent } from './components/sockettest/sockettest.component';
import { MemberComponent } from './components/member/member.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'account', component: AccountComponent },
  { path: 'member', component: MemberComponent },
  { path: 'group-detail', component: GroupDetailComponent },
  { path: 'chat/:group/:channel/:member', component: ChatComponent },
  { path: 'sockettest', component: SocketTestComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
