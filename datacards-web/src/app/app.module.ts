import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { CardComponent } from './components/cards/card/card.component';
import { MaterialModule } from './material/material/material.module';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { MainStatsComponent } from './components/cards/card/main-stats/main-stats.component';




@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardComponent,
    MainStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
