import {NgModule} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    exports:[
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule
    ],
})
export class ClientMaterialModule{

}