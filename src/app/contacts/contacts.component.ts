import { Component, OnInit } from '@angular/core';
import {FormControl ,FormGroup ,Validators} from '@angular/forms';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})


export class ContactsComponent implements OnInit {

  
  userData = new FormGroup(
    {
      userName : new FormControl('' , [Validators.required ,Validators.minLength(4)]),
      userAge : new FormControl('' ,[Validators.required, Validators.min(10) ,Validators.max(60)]),
      userMail : new FormControl('' ,[Validators.required, Validators.email]),
      userPassword:new FormControl('' ,[Validators.required,Validators.pattern(/^[A-Z][a-zA-Z]{2,8}/)])
    }
  );

  dataControl : any = this.userData.controls ;
  dataContainer:object[]=[] ;
  
  saveForm()
  {

    let user =
    {
      name:this.dataControl.userName.value,
      age:this.dataControl.userAge.value,
      mail:this.dataControl.userMail.value,
      password:this.dataControl.userPassword.value,
    }

    this.dataContainer.push(user);
    console.log(this.dataContainer);
    localStorage.setItem("userInfo" ,JSON.stringify(this.dataContainer));
  }

  constructor() { }

  ngOnInit(): void {
  }

}
