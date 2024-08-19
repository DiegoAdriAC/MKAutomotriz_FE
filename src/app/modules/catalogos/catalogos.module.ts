import { NgModule } from "@angular/core";
import { CatalogosRoutingModule } from "./catalogos-routing.module";
import { CommonModule } from "@angular/common";
import { ClientesComponent } from "./clientes/clientes.component";
import { ProvedoresComponent } from "./provedores/provedores.component";
import { ServiciosComponent } from "./servicios/servicios.component";

@NgModule({
    declarations: [
        ClientesComponent,
        ProvedoresComponent,
        ServiciosComponent
    ],
    exports: [
        CommonModule,
        CatalogosRoutingModule
    ]
})
export class CatalogosModule { }