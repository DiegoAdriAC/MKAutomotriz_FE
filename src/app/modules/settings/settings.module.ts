import { NgModule } from "@angular/core";
import { SettingsRoutingModule } from "./settings-routing.module";
import { CommonModule } from "@angular/common";
import { UserComponent } from "./User/User.component";
import { MaterialModule } from "../../shared/material/material.module";
import { ComponentsModule } from "../../shared/components/components.module";

@NgModule({
    declarations: [
        UserComponent
    ],
    imports: [
        CommonModule,
        SettingsRoutingModule,
        MaterialModule,
        ComponentsModule
    ]
})
export class SettingModule { }