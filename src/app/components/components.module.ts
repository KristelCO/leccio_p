import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 
import { HeaderComponent } from './header/header.component'; 
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

 
 
@NgModule({ 
  declarations: [ 
    HeaderComponent 
  ], 
  exports: [ 
    HeaderComponent 
  ], 
  imports: [ 
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    
  ] 
}) 
export class ComponentsModule { } 