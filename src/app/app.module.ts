import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ComponentsModule } from './shared/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { HomeModule } from './pages/home/home.module';
import { NeoflexComponent } from './pages/neoflex/neoflex.component';
import { ProfitComponent } from './pages/profit/profit.component';
import { CodexpertComponent } from './pages/codexpert/codexpert.component';
import { OtherComponent } from './pages/other/other.component';
import { PostNeoflexComponent } from './pages/neoflex/post-neoflex/post-neoflex.component';
import { PostProfitComponent } from './pages/profit/post-profit/post-profit.component';
import { ComunicationComponent } from './pages/profit/comunication/comunication.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NeoflexComponent,
    ProfitComponent,
    CodexpertComponent,
    OtherComponent,
    PostNeoflexComponent,
    PostProfitComponent,
    ComunicationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ComponentsModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
