import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    SiteLayoutComponent,
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
