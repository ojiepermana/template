import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LayoutModule } from 'src/layout/layout.module';

const config = {
  apiKey: "AIzaSyDVACPtgpbRKhc9OhXBr69ntqaJ6oH34Ys",
  authDomain: "acpt-frend.firebaseapp.com",
  projectId: "acpt-frend",
  storageBucket: "acpt-frend.appspot.com",
  messagingSenderId: "659831005205",
  appId: "1:659831005205:web:a605df5e5f68af966a6e1c"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AngularFireModule.initializeApp(config),
    AppRoutingModule,
    FontAwesomeModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
