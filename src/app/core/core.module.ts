import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer/footer.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [FooterComponent, NavbarComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, FooterComponent],
})
export class CoreModule {}
