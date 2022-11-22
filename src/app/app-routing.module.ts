import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroiComponent } from './Pages/heroi/heroi.component';
import { HomeComponent } from './Pages/home/home.component';
import { ItensComponent } from './Pages/itens/itens.component';
import { SinergiasComponent } from './Pages/sinergias/sinergias.component';
import { CriarHeroiComponent } from './Pages/criar-heroi/criar-heroi.component';
import { CriarItemComponent } from './Pages/criar-item/criar-item.component';
import { CriarSinergiaComponent } from './Pages/criar-sinergia/criar-sinergia.component';
import { InformacaoHeroiComponent } from './Pages/informacao-heroi/informacao-heroi.component';
import { ModificadorHeroiComponent } from './Pages/modificador-heroi/modificador-heroi.component';
import { LoginComponent } from './Pages/login/login.component';
import { CriarUsuarioComponent } from './Pages/criar-usuario/criar-usuario.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  {path:'sinergias', component: SinergiasComponent},
  {path:'itens', component:ItensComponent},
  {path:'Login', component:LoginComponent},
  {path:'heroi', component:HeroiComponent,
  children:[
    {path:'informacaoHeroi',component:InformacaoHeroiComponent}]},
    {path:'modificarHeroi',component:ModificadorHeroiComponent},
  {path:'criarHeroi', component:CriarHeroiComponent},
  {path:'criarItem', component:CriarItemComponent},
  {path:'criarSinergia', component:CriarSinergiaComponent},
  {path:'criarUsuario', component:CriarUsuarioComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
