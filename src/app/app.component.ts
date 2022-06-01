import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Reactive-Form-creation';
  

  //   Email_regex="[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]"

  //formGroup: FormGroup | any;
  user: FormGroup | any;

  constructor(private fb: FormBuilder) {

  }



  /*  ngOnInit(): void {
   /*   this.formGroup=new FormGroup({
       firstName:new FormControl("reterg"),
       lastName:new FormControl("rhgrhrt")
 
     })
  
     this.user=new FormGroup({
       name:new FormControl('',Validators.required),
 
 
       account:new FormGroup({         // Nested Child
         email:new FormControl('',Validators.required),
         confirm:new FormControl('',Validators.required),
       })
     })
 
    
 
   }  */

  ngOnInit(): void {
    this.user = this.fb.group({
      name: ['', Validators.required,],
      password: ['', [Validators.required,Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$')
    ]],
      confirmpassword: ['', [Validators.required]],



      account: this.fb.group({
        email: ['', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],    //Validators.pattern(this.Email_regex)
        confirm: ['', Validators.required],
      })

    })
  }
  onClick(formdata: any) {
    console.log(formdata)
    //console.log(this.user.value)
  }


}