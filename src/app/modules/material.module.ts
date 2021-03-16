import {NgModule} from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    imports: [
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatCardModule,
        MatInputModule,
        MatDividerModule,
        MatFormFieldModule,
        MatButtonModule
    ],
    exports:[
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatCardModule,
        MatInputModule,
        MatDividerModule,
        MatFormFieldModule,
        MatButtonModule
    ]
})
export class MaterialModule{

}