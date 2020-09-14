import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { ToastrModule } from 'ngx-toastr'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { GameComponent } from './game/game.component';
import { DeckComponent } from './game/deck/deck.component';
import { CardComponent } from './components/card/card.component';
import { CurrentCardComponent } from './game/current-card/current-card.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { IconBackComponent, IconRedoComponent } from './components/icons/icons.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListItemComponent,
    TextFieldComponent,
    GameComponent,
    DeckComponent,
    CurrentCardComponent,
    CardComponent,
    IconBackComponent,
    IconRedoComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
