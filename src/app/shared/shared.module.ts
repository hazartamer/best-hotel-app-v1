import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ValidDirective } from '../directives/valid.directive';







@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ValidDirective,
    RouterLink
    
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ValidDirective,
    RouterLink,
    RouterOutlet
    
  ]
})
export class SharedModule { }