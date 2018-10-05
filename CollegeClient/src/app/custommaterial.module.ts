import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatDividerModule, MatToolbarModule, MatTabsModule, 
   MatCheckboxModule, MatChipsModule, MatOptionModule, MatProgressBarModule, MatSlideToggleModule,
   MatMenuModule, MatDialogModule, MatSnackBarModule, MatSelectModule, MatSidenavModule, MatCardModule, MatIconModule, MatFormFieldModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [],
  imports: [BrowserModule,BrowserAnimationsModule,MatButtonModule,MatInputModule,
    MatGridListModule,MatDividerModule,MatToolbarModule,MatTabsModule,MatCheckboxModule,
    MatChipsModule,MatOptionModule,MatGridListModule,MatProgressBarModule,
    MatSlideToggleModule,MatMenuModule,MatDialogModule,MatSnackBarModule,MatSelectModule,MatSidenavModule,
    MatCardModule,MatIconModule,MatProgressBarModule,MatTabsModule,MatFormFieldModule],
  providers: [],
//   bootstrap: [AppComponent]
exports:[BrowserModule,BrowserAnimationsModule,MatButtonModule,MatInputModule,
  MatGridListModule,MatDividerModule,MatToolbarModule,MatTabsModule,MatCheckboxModule,
  MatChipsModule,MatOptionModule,MatGridListModule,MatProgressBarModule,
  MatSlideToggleModule,MatMenuModule,MatDialogModule,MatSnackBarModule,MatSelectModule,MatSidenavModule,
  MatCardModule,MatIconModule,MatProgressBarModule,MatFormFieldModule ]
})
export class CustomMaterialModule { }
