import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular'; 
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';


const firebaseConfig = {
  apiKey: "AIzaSyDx2BCc4dBG4DZmgYAz4YqE1zlDGnWcJ8g",
  authDomain: "unisinos-amigo-pet.firebaseapp.com",
  projectId: "unisinos-amigo-pet",
  storageBucket: "unisinos-amigo-pet.appspot.com",
  messagingSenderId: "166902406692",
  appId: "1:166902406692:web:72eadba68bd01b3f0582b1",
  measurementId: "G-FVTSJ7TFGG"
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),   
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
