import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { FloWi } from './app.component';
import { HubPage } from '../pages/hub/hub';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// Services
import { FirestoreService } from '../services/firestore.service';

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
    FloWi,
    HubPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(FloWi),
    AngularFireModule.initializeApp(config, 'flowi'),
    AngularFirestoreModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    FloWi,
    HubPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirestoreService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
