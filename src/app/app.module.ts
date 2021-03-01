import { AcaoService } from './service/acao.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AcaoComponent } from './acao/acao.component';

@NgModule({
  declarations: [
    AppComponent,
    AcaoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [AcaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
