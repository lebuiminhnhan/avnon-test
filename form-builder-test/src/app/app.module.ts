import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormAnswerComponent } from './component/form-answer/form-answer.component';
import { FormBuilderComponent } from './component/form-builder/form-builder.component';
import { NotFoundComponent } from './component/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FormAnswerComponent,
    FormBuilderComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
