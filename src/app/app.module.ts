import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WithStatusComponent } from './with-status/with-status.component';
import { WithoutStatusComponent } from './without-status/without-status.component';
import { ConfirmationAlertComponent } from './confirmation-alert/confirmation-alert.component';
import { ShoppingCartStatusComponent } from './shopping-cart-status/shopping-cart-status.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    WithStatusComponent,
    WithoutStatusComponent,
    ConfirmationAlertComponent,
    ShoppingCartStatusComponent,
    BasicFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
