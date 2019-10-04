import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AccountComponent } from './components/account/account.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DbService } from './services/db.service';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { ChatComponent } from './components/chat/chat.component';
import { GroupDetailComponent } from './components/detail/group-detail/group-detail.component';
import { HomeComponent } from './components/home/home.component';
import { ControllerService } from './services/controller.service';
import { SocketService } from './services/socket.service';
import { SocketTestComponent } from './components/sockettest/sockettest.component';
import { MemberComponent } from './components/member/member.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountComponent,
    NavbarComponent,
    RegisterComponent,
    ChatComponent,
    GroupDetailComponent,
    HomeComponent,
    SocketTestComponent,
    MemberComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [DbService, ControllerService, SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
