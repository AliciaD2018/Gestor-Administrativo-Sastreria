import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { FullCalendarModule} from 'primeng/fullcalendar';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import {FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';


import { AppComponent } from './app.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistrarClienteComponent } from './components/registrarCliente/registrarCliente.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { OrdenesComponent } from './components/ordenes/ordenes.component';

import { HttpClientModule } from '@angular/common/http'
import { RegistrarMaterialComponent } from './components/registrarMaterial/registrarMaterial.component';

const routes: Routes = [

  {
    path:'',
    component: PrincipalComponent
  },
  {
    path:'clientes',
    component: ClientesComponent
  },
  {
    path:'calendario',
    component: CalendarioComponent
  }
  ,
  {
    path:'registrarCliente',
    component: RegistrarClienteComponent
  },
  {
    path:'inventario',
    component: InventarioComponent
  },
  {
    path:'ordenes',
    component: OrdenesComponent
  },
  {
    path:'registrarMaterial',
    component: RegistrarMaterialComponent
  },
  
];


@NgModule({
  declarations: [	
    AppComponent,
    PrincipalComponent,
    ClientesComponent,
    CalendarioComponent,
    RegistrarClienteComponent,
    InventarioComponent,
    OrdenesComponent,
    RegistrarMaterialComponent
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FullCalendarModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
