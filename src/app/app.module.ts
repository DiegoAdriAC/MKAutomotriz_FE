import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './shared/components/components.module';
import { MaterialModule } from './shared/material/material.module';
import { CatalogosModule } from './modules/catalogos/catalogos.module';
import { ReportsModule } from './modules/reportes/reportes.module';
import { SettingModule } from './modules/settings/settings.module';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    HomeComponent
  ],
  imports: [
    ReportsModule, CatalogosModule, SettingModule,
    MaterialModule,
    ComponentsModule,
    HttpClientModule, 
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
