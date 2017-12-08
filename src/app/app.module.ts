import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";

import { FloWi } from './app.component';

const config = {
  apiKey: "AIzaSyD_TECDbtRmwJTSGJcZQ85Q5YLuNdjRtdY",
  authDomain: "flowiapp.firebaseapp.com",
  databaseURL: "https://flowiapp.firebaseio.com",
  projectId: "flowiapp",
  storageBucket: "flowiapp.appspot.com",
  messagingSenderId: "661431034739"
};

@NgModule({
  declarations: [
    FloWi
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(FloWi),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    FloWi
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
