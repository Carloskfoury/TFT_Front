import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroiComponent } from './Pages/heroi/heroi.component';
import { SinergiasComponent } from './Pages/sinergias/sinergias.component';
import { ItensComponent } from './Pages/itens/itens.component'
import { HttpClientModule } from '@angular/common/http';
import { FormsComponent } from './Compartilhados/forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CriarHeroiComponent } from './Pages/criar-heroi/criar-heroi.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsItensComponent } from './Compartilhados/forms-itens/forms-itens.component';
import { CriarItemComponent } from './Pages/criar-item/criar-item.component';
import { FormsSinergiasComponent } from './Compartilhados/forms-sinergias/forms-sinergias.component';
import { CriarSinergiaComponent } from './Pages/criar-sinergia/criar-sinergia.component';
import { ModificadorHeroiComponent } from './Pages/modificador-heroi/modificador-heroi.component';
import { InformacaoHeroiComponent } from './Pages/informacao-heroi/informacao-heroi.component';
import { LoginComponent } from './Pages/login/login.component';
import { CriarUsuarioComponent } from './Pages/criar-usuario/criar-usuario.component';
import { FormsLoginComponent } from './Compartilhados/forms-login/forms-login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroiComponent,
    SinergiasComponent,
    ItensComponent,
    FormsComponent,
    CriarHeroiComponent,
    FormsItensComponent,
    CriarItemComponent,
    FormsSinergiasComponent,
    CriarSinergiaComponent,
    ModificadorHeroiComponent,
    InformacaoHeroiComponent,
    LoginComponent,
    CriarUsuarioComponent,
    FormsLoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
