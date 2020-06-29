import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { SupportChatComponent } from './shared/support-chat/support-chat.component';
import { RegistrationModule } from './registration/registration.module';
import { HeaderComponent } from './shared/layouts/header/header.component';
import { FooterComponent } from './shared/layouts/footer/footer.component';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { AppFilterPipe } from './shared/pipes/app-filter.pipe';
import { DropDownSearchComponent } from './shared/drop-down-search/drop-down-search.component';
// import { PopupWindowComponent } from './shared/components/popup-window/popup-window.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteLayoutComponent,
    SupportChatComponent,
    HeaderComponent,
    FooterComponent,
    DropdownDirective,
    AppFilterPipe,
    DropDownSearchComponent,
    // PopupWindowComponent
  ],
  imports: [
    BrowserModule,
    RegistrationModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
