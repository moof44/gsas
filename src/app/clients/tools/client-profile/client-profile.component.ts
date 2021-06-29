import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl,ValidationErrors, NgModel} from '@angular/forms';
import {clientProfile} from '../../../service/input.validate';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.scss']
})
export class ClientProfileComponent implements OnInit {
  @Output() profileForm:FormGroup;
  profileValidators;
  classification:string | undefined = undefined;

  constructor() { 
    this.profileValidators = clientProfile();
    this.profileValidators.businessName = new FormControl('',{validators: [this.prerequisiteValue('non-individual')]});
    this.profileValidators.lastname = new FormControl('',{validators: [this.prerequisiteValue('individual')]});
    this.profileValidators.firstname = new FormControl('',{validators: [this.prerequisiteValue('individual')]});
    this.profileForm = new FormGroup(this.profileValidators);
  }

  ngOnInit(): void {
  } 

  prerequisiteValue(expected:string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if(this.profileValidators.classification.value === expected){
        return (control.value==='') ? {required:true}: null;
      }else{
        return null;
      }
    }
  }

  showClassificationInput(classification:string){
    this.classification = classification;
    console.log(this.classification)
    this.profileForm.controls.businessName.updateValueAndValidity();
    this.profileForm.controls.lastname.updateValueAndValidity();
    this.profileForm.controls.firstname.updateValueAndValidity();
  }

}
