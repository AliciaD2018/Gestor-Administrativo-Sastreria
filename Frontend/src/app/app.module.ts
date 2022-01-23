import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { FullCalendarModule} from 'primeng/fullcalendar';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';

import { AppComponent } from './app.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { PrincipalComponent } from './components/principal/principal.component';

import { RegistrarClienteComponent } from './components/registrarCliente/registrarCliente.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { OrdenesComponent } from './components/ordenes/ordenes.component';

import { HttpClientModule } from '@angular/common/http'
import { RegistrarMaterialComponent } from './components/registrarMaterial/registrarMaterial.component';
import { ModificarInventarioComponent } from './components/modificarInventario/modificarInventario.component';
import { RegistrarOrdenComponent } from './components/registrarOrden/registrarOrden.component';
import { ModificarOrdenComponent } from './components/modificarOrden/modificarOrden.component';
import { CrearOrdenComponent } from './components/crearOrden/crearOrden.component';
import { DetalleOrdenComponent } from './components/detalleOrden/detalleOrden.component';
import { RegistrarAbonoComponent } from './components/registrarAbono/registrarAbono.component';
import { RegistrarPrendaComponent } from './components/registrarPrenda/registrarPrenda.component';
import { PopupEnviarEmailComponent } from './components/popupEnviarEmail/popupEnviarEmail.component';
import { PopupSeleccionarClienteComponent } from './components/popupSeleccionarCliente/popupSeleccionarCliente.component';
import { PopupVerDetallesClienteComponent } from './components/popupVerDetallesCliente/popupVerDetallesCliente.component';
import { PopupModificarClienteComponent } from './components/popupModificarCliente/popupModificarCliente.component';
import { PopupRegistrarClienteComponent } from './components/popupRegistrarCliente/popupRegistrarCliente.component';
import { PopupAdvertenciaComponent } from './components/popupAdvertencia/popupAdvertencia.component';
import { PopupRegistrarMaterialComponent } from './components/popupRegistrarMaterial/popupRegistrarMaterial.component';
import { PopupVerDetallesMaterialComponent } from './components/popupVerDetallesMaterial/popupVerDetallesMaterial.component';
import { PopupModificarMaterialComponent } from './components/popupModificarMaterial/popupModificarMaterial.component';

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
  {
    path:'modificarInventario',
    component: ModificarInventarioComponent
  },
  {
    path:'registrarOrden',
    component: RegistrarOrdenComponent
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
  },
  {
    path:'popupEnviarEmail',
    component: PopupEnviarEmailComponent
  },
  {
    path:'popupSeleccionarCliente',
    component: PopupSeleccionarClienteComponent
  },
  {
    path:'popupVerDetallesCliente',
    component: PopupVerDetallesClienteComponent
  },
  {
    path:'popupModificarCliente',
    component: PopupModificarClienteComponent
  },
  {
    path: 'popupRegistrarCliente',
    component: PopupRegistrarClienteComponent
  },
  {
    path: 'popupAdvertencia',
    component: PopupAdvertenciaComponent
  },
  {
    path: 'popupRegistrarMaterial',
    component: PopupRegistrarMaterialComponent
  },
  {
    path: 'popupVerDetallesMaterial',
    component: PopupVerDetallesMaterialComponent
  },
  {
    path:'popupModificarMaterial',
    component: PopupModificarMaterialComponent
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
    RegistrarMaterialComponent,
    ModificarInventarioComponent,
    RegistrarOrdenComponent,
    ModificarOrdenComponent,
    DetalleOrdenComponent,
    CrearOrdenComponent,
    RegistrarAbonoComponent,
    RegistrarPrendaComponent,
    PopupEnviarEmailComponent,
    PopupSeleccionarClienteComponent,
    PopupVerDetallesClienteComponent,
    PopupModificarClienteComponent,
    PopupRegistrarClienteComponent,
    PopupAdvertenciaComponent,
    PopupRegistrarMaterialComponent,
    PopupVerDetallesMaterialComponent,
    PopupModificarMaterialComponent
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
    HttpClientModule,
    MatDialogModule,
    MatDividerModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
