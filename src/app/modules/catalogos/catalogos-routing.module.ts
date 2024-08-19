import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from "./clientes/clientes.component";
import { ProvedoresComponent } from "./provedores/provedores.component";
import { ServiciosComponent } from "./servicios/servicios.component";

const routes: Routes = [
    {
        path: 'Clientes',
        component: ClientesComponent
    },
    {
        path: 'Proveedores',
        component: ProvedoresComponent
    },
    {
        path: 'Servicios',
        component: ServiciosComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CatalogosRoutingModule {}