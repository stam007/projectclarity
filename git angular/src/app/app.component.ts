import { Component } from '@angular/core';
import { ServicebackendService } from './httpservice/servicebackend.service';
import { error } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'admin';

  login_modal=true;


 connect=true;
 registre =false;
 class_registre="btn btn-link nav-link"
 class_login="btn btn-link nav-link "

 login_data={
  "email":"",
  "password":""
 }

 registre_data={
  

    "email":"",
    "password":"",
    "nom":"",
    "prenom":"",
    "situation":"",
    "adresse":"",
    "ville":"",
    "domaine_etude":""

 }

 ngOnInit() {


  const data_client=JSON.parse(localStorage.getItem('data_registre'))
  if(data_client)
  {
    this.login_modal=false;
  }
  //localStorage.setItem('data_category', JSON.stringify(rr));
  //localStorage.removeItem('client_Panier');
}

constructor(private service:ServicebackendService) { 
    
}
switch_inscrire()
{
  this.connect =false;
  this.registre =true;
}

switch_connexion()
{
  this.connect =true;
  this.registre =false;
}

inscrire()
{
  this.login_modal=false;
  console.log(this.registre_data)
this.service.getcreate(this.registre_data,'createvisiteur').subscribe(rr=>
  {
    
    localStorage.setItem('data_registre', JSON.stringify(this.registre_data));
    this.login_modal=false;
  },error=>
  {

  })


}

connexion()
{
  this.login_modal=false;
  console.log(this.login_data)
  this.service.getcreate(this.login_data,'loginuser').subscribe(rr=>
    {
      console.log(rr)
      localStorage.setItem('data_registre', JSON.stringify(this.login_data));
      
    },error=>
    {
  
    })
}

}
