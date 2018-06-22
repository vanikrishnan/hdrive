import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,AbstractControl,ValidationErrors} from '@angular/forms';
import {Http} from '@angular/http';
@Component({
  selector: 'app-adminregistration',
  templateUrl: './adminregistration.component.html',
  styleUrls: ['./adminregistration.component.css']
})
export class AdminregistrationComponent implements OnInit {
  id:FormGroup;
 public list=[{
name : 'Hyderabad'
 },
{
  name : 'Pune'
  },
{
  name : 'Chennai'
  
},
{
  name : 'Bangalore'
  
}];


  constructor(private httpservice : Http) {
this.id =new FormGroup({

name : new FormControl('',[Validators.required,Validators.pattern(/^([a-zA-Z])$/)]),

mail : new FormControl('',[Validators.required,Validators.pattern(/^([a-zA-Z0-9_\.\-])+\@virtusa.com+$/)]),

pswdmatch : new FormGroup({
pswd: new FormControl('',Validators.required),
cnfmpswd: new FormControl('',Validators.required)
},this.checkPswdMatch),

mobileno: new FormControl('',[Validators.required,Validators.pattern(/^[1-9][0-9]{9}$/),Validators.minLength(10)]),

loc : new FormControl('Hyderabad',Validators.required)

})

}
checkPswdMatch(ac : AbstractControl) : ValidationErrors {
const pswd=ac.get('pwd').value;
const cnfmpswd=ac.get('cnfmpwd').value;
if(pswd != cnfmpswd){
  return {
    'pwdnotmatch':true
  }
}
}
  ngOnInit() {
  }

}
