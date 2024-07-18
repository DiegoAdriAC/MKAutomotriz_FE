import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ServicesModule } from './services/services.module';
import { PagesModule } from './pages/pages.module';
import { InterfacesModule } from './interfaces/interfaces.module';
import { ComponentsModule } from './components/components.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './Angular_material/material.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ServicesModule,
    PagesModule,
    InterfacesModule,
    ComponentsModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
