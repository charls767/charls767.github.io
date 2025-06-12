import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header'; // ⚠️ No 'app-header', sino el nombre de la clase
@NgModule({
  imports: [
    CommonModule,
    HeaderComponent,
  ]
})
export class HeadModule {}
