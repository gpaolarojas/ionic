import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ChapiAppPage } from '../pages/chapi-app/chapi-app';
import { ChapiApp2Page } from '../pages/chapi-app2/chapi-app2';
import { EventsPage } from '../pages/events/events';
import { EventDescript1Page } from '../pages/event-descript1/event-descript1';
import { EventDescript2Page } from '../pages/event-descript2/event-descript2';
import { EventDescript3Page } from '../pages/event-descript3/event-descript3';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { InteresesPage } from '../pages/intereses/intereses';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ChapiAppPage,
    ChapiApp2Page,
    EventsPage,
    EventDescript1Page,
    EventDescript2Page,
    EventDescript3Page,
    SignupPage,
    LoginPage,
    InteresesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChapiAppPage,
    ChapiApp2Page,
    EventsPage,
    EventDescript1Page,
    EventDescript2Page,
    EventDescript3Page,
    SignupPage,
    LoginPage,
    InteresesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}