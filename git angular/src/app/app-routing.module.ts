import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoyerComponent } from './hebergement/foyer/foyer.component';
import { MaisonComponent } from './hebergement/maison/maison.component';
import { HebergeComponent } from './hebergement/heberge/heberge.component';
import { FinancerlogementComponent } from './hebergement/financerlogement/financerlogement.component';
import { ForumComponent } from './forum/forum.component';


const routes: Routes = [
  {path:'',redirectTo:'/accueil',pathMatch:'full'},//periorite important
  {path:'accueil',component:HomeComponent},
  {path:'hebergementfoyer',component:FoyerComponent},
  {path:'hebergementmaison',component:MaisonComponent},
  {path:'finacerhebergement',component:FinancerlogementComponent},
  {path:'heberge',component:HebergeComponent},
  {path:'forum',component:ForumComponent},

  
  
 
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
