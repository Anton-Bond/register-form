import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SupportChatComponent } from './shared/support-chat/support-chat.component';
import { RegistrationModule } from './registration/registration.module';
import { HeaderComponent } from './shared/layouts/header/header.component';
import { FooterComponent } from './shared/layouts/footer/footer.component';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { AppFilterPipe } from './shared/pipes/app-filter.pipe';
import { DropDownSearchComponent } from './shared/drop-down-search/drop-down-search.component';

@NgModule({
  declarations: [
    AppComponent,
    SupportChatComponent,
    HeaderComponent,
    FooterComponent,
    DropdownDirective,
    AppFilterPipe,
    DropDownSearchComponent
  ],
  imports: [
    BrowserModule,
    RegistrationModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
