import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { productsContainerComponent } from './components/productsContainer/productsContainer.component';
import { sliderComponent } from './components/slider/slider.component';

import { AppComponent } from './app.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { TableComponent } from './components/table/table.component';
import { TodoComponent } from './components/todo/todo.component';
import { TrackComponent } from './components/track/track.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    sliderComponent,
    productsContainerComponent,
    FooterComponent,
    ProductItemComponent,
    TableComponent,
    TodoComponent,
    TrackComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
