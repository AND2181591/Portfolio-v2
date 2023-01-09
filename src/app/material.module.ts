import { NgModule } from "@angular/core";

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatChipsModule} from '@angular/material/chips';


@NgModule({
    imports: [
        MatIconModule, 
        MatButtonModule, 
        MatSidenavModule, 
        MatChipsModule
    ], 
    exports: [
        MatIconModule, 
        MatButtonModule, 
        MatSidenavModule, 
        MatChipsModule
    ]
})
export class MaterialModule {}