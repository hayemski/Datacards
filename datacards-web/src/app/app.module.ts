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
import { WeaponFormComponent } from './components/cards/card/forms/weapon-form/weapon-form.component';
import { MainStatsFormComponent } from './components/cards/card/forms/main-stats-form/main-stats-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OperativeSelectionComponent } from './components/cards/operative/operative-selection/operative-selection.component';
import { SymbolReplace } from './pipes/symbolReplace';
import { AbilitiesNotesComponent } from './components/cards/card/abilities-notes/abilities-notes.component';




@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardComponent,
    MainStatsComponent,
    WeaponFormComponent,
    MainStatsFormComponent,
    OperativeSelectionComponent,
    SymbolReplace,
    AbilitiesNotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
