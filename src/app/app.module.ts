import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Para Formularios 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Para Requisições
import {HttpClientModule} from '@angular/common/http';

//Import para Components

import{MatFormFieldModule} from '@angular/material/form-field';
import{MatPaginatorModule} from '@angular/material/paginator';
import{MatSnackBarModule} from '@angular/material/snack-bar';
import{MatCheckboxModule} from '@angular/material/checkbox';
import{MatToolbarModule} from '@angular/material/toolbar';
import{MatSidenavModule} from '@angular/material/sidenav';
import{MatButtonModule} from '@angular/material/button';
import{MatSelectModule} from '@angular/material/select';
import{MatTableModule} from '@angular/material/table';
import{MatRadioModule} from '@angular/material/radio';
import{MatInputModule} from '@angular/material/input';
import{MatIconModule} from '@angular/material/icon';
import{MatListModule} from '@angular/material/list';
import{MatCardModule} from '@angular/material/card';



//Components do Projeto
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { TecnicoListComponent } from './components/tecnico/tecnico-list/tecnico-list.component';
import { LoginComponent } from './components/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptorProvider } from './intercerptors/auth.interceptor';
import { TecnicoCreateComponent } from './components/tecnico/tecnico-create/tecnico-create.component';
import { NgxMaskModule } from 'ngx-mask';
import { TecnicoUpdateComponent } from './components/tecnico/tecnico-update/tecnico-update.component';
import { TecnicoDeleteComponent } from './components/tecnico/tecnico-delete/tecnico-delete.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { ClienteListComponent } from './components/cliente/cliente-list/cliente-list.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { ChamadoListComponent } from './components/chamado/chamado-list/chamado-list.component';
import { ChamadoCreateComponent } from './components/chamado/chamado-create/chamado-create.component';
import { ChamadoUpdateComponent } from './components/chamado/chamado-update/chamado-update.component';
import { ChamadoReadComponent } from './components/chamado/chamado-read/chamado-read.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HeaderComponent,
    TecnicoListComponent,
    LoginComponent,
    TecnicoCreateComponent,
    TecnicoUpdateComponent,
    TecnicoDeleteComponent,
    ClienteCreateComponent,
    ClienteUpdateComponent,
    ClienteListComponent,
    ClienteDeleteComponent,
    ChamadoListComponent,
    ChamadoCreateComponent,
    ChamadoUpdateComponent,
    ChamadoReadComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatRadioModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    NgxMaskModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true
    }),
   
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
