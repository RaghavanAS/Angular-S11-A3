import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CityService } from './Services/City-Service';
import { CustomerService } from './Services/Customer-Service';
import { CustomerComponentComponent } from './customer-component/customer-component.component';
import { ChangeChar } from './pipes/changeToCapital';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponentComponent,
    ChangeChar
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CityService, CustomerService, ChangeChar],
  bootstrap: [AppComponent]
})
export class AppModule { }
