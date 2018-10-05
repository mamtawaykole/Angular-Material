import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomMaterialModule } from './custommaterial.module';
import { MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { GridListDynamicExample } from './justGridChecking/gridExample.component';
import { FooterComponet } from './justGridChecking/footer.component';
import { HeaderComponent } from './justGridChecking/header.component';
import { LoginFormComponent } from './Login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    GridListDynamicExample,
    FooterComponet,
    HeaderComponent,
    LoginFormComponent
    
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    CustomMaterialModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [],
  // bootstrap: [GridListDynamicExample]
  bootstrap:[LoginFormComponent]
})
export class AppModule { }
