import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";
import { FoyerComponent } from './hebergement/foyer/foyer.component';
import { MaisonComponent } from './hebergement/maison/maison.component';
import { HomeComponent } from './home/home.component';
import { HebergeComponent } from './hebergement/heberge/heberge.component';
import { FinancerlogementComponent } from './hebergement/financerlogement/financerlogement.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { ServicebackendService } from './httpservice/servicebackend.service';
import { ForumComponent } from './forum/forum.component';
@NgModule({
  declarations: [
    AppComponent,
    FoyerComponent,
    MaisonComponent,
    HomeComponent,
    HebergeComponent,
    FinancerlogementComponent,
    ForumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClarityModule,
    HttpClientModule,
    FormsModule,
    
    ReactiveFormsModule
  ],
  providers: [ServicebackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
