import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ViewDetailsComponent } from './view-details/view-details.component';
import {MatButtonModule,
 MatCheckboxModule,
 MatFormFieldModule,
 MatAutocompleteModule,
 MatInputModule,
 MatGridListModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewServiceService } from './services/view-service.service';


@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    ViewDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatGridListModule,
    BrowserAnimationsModule
  ],
  providers: [ViewServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
