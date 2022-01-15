import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { FullCalendarModule} from 'primeng/fullcalendar';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';


import { AppComponent } from './app.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { PrincipalComponent } from './components/principal/principal.component';

import { RegistrarClienteComponent } from './components/registrarCliente/registrarCliente.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { OrdenesComponent } from './components/ordenes/ordenes.component';

import { HttpClientModule } from '@angular/common/http'
import { RegistrarMaterialComponent } from './components/registrarMaterial/registrarMaterial.component';
import { ModificarClienteComponent } from './components/modificarCliente/modificarCliente.component';
import { ModificarInventarioComponent } from './components/modificarInventario/modificarInventario.component';
import { RegistrarOrdenComponent } from './components/registrarOrden/registrarOrden.component';
import { ModificarOrdenComponent } from './components/modificarOrden/modificarOrden.component';
import { VerDetallesClienteComponent } from './components/verDetallesCliente/verDetallesCliente.component';
import { CrearOrdenComponent } from './components/crearOrden/crearOrden.component';
import { DetalleOrdenComponent } from './components/detalleOrden/detalleOrden.component';
import { RegistrarAbonoComponent } from './components/registrarAbono/registrarAbono.component';
import { RegistrarPrendaComponent } from './components/registrarPrenda/registrarPrenda.component';

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
    path:'modificarClientes',
    component: ModificarClienteComponent
  },
  {
    path:'ordenes',
    component: OrdenesComponent
  },
  {
    path:'registrarMaterial',
    component: RegistrarMaterialComponent
  },
  {
    path:'modificarCliente',
    component: ModificarClienteComponent
  },
  {
    path:'modificarInventario',
    component: ModificarInventarioComponent
  },
  {
    path:'registrarOrden',
    component: RegistrarOrdenComponent
  },
  {
    path:'verDetallesCliente',
    component: VerDetallesClienteComponent
  },
  {
    path:'modificarOrden',
    component: ModificarOrdenComponent
  },
  {
    path:'crearOrden',
    component: CrearOrdenComponent
  },
  {
    path:'detalleOrden',
    component: DetalleOrdenComponent
  },
  {
    path:'registrarAbono',
    component: RegistrarAbonoComponent
  },
  {
    path:'registrarPrenda',
    component: RegistrarPrendaComponent
  }
];


@NgModule({
  declarations: [	
    AppComponent,
    PrincipalComponent,
    ClientesComponent,
    CalendarioComponent,
    RegistrarClienteComponent,
    ModificarClienteComponent,
    InventarioComponent,
    OrdenesComponent,
    RegistrarMaterialComponent,
    ModificarInventarioComponent,
    RegistrarOrdenComponent,
    ModificarOrdenComponent,
    DetalleOrdenComponent,
    CrearOrdenComponent,
    VerDetallesClienteComponent,
    RegistrarAbonoComponent,
    RegistrarPrendaComponent
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
