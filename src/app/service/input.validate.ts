import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function clientProfile(){
    return {
        tinNo: new FormControl(''
            ,{validators: [Validators.required, Validators.pattern('[0-9]{12}')]}
        )
        ,classification: new FormControl(''
            ,{validators: [Validators.required]}
        )
        ,rdoCode: new FormControl(''
            ,{validators: [Validators.required]}
        )
        ,street: new FormControl(''
            ,{validators: [Validators.required]}
        )
        ,barangay: new FormControl(''
            ,{validators: [Validators.required]}
        )
        ,city: new FormControl(''
             ,{validators: [Validators.required]}
        )
        ,province: new FormControl(''
            ,{validators: [Validators.required]}
        )
        ,businessName: new FormControl(''
            ,{validators: [Validators.required]}
        )
        ,lastname: new FormControl(''
            ,{validators: [Validators.required]}
        )
        ,firstname: new FormControl(''
            ,{validators: [Validators.required]}
        )
      };
}