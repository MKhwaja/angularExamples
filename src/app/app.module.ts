import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { IfValidationComponent } from './if-validation/if-validation.component';
import { SwitchExampleComponent } from './switch-example/switch-example.component';
import { CombinedExampleComponent } from './combined-example/combined-example.component';
import { ServiceexampleComponent } from './serviceexample/serviceexample.component';

const routes: Routes = [
  {path: 'form1', component: Form1Component},
  {path: 'form2', component: Form2Component},
  {path: 'ifValidation', component: IfValidationComponent},
  {path: 'switchExample', component: SwitchExampleComponent},
  {path: 'combinedExample', component: CombinedExampleComponent},
  {path: 'serviceexample', component: ServiceexampleComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    Form2Component,
    IfValidationComponent,
    SwitchExampleComponent,
    CombinedExampleComponent,
    ServiceexampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes), // <-- routes
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
