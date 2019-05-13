import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FilterComponent } from './filter/filter.component';
import { BoxListComponent } from './box-list/box-list.component';
import { HomeComponent } from './core/home/home.component';
import { BoxDetailComponent } from './box-list/box-detail/box-detail.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

import { BoxListService } from './box-list/box-list.service';
import { BoxComponent } from './box/box.component';
import { AdminComponent } from './admin/admin.component';
import { AdminListComponent } from './admin/admin-list/admin-list.component';
import { AdminEditComponent } from './admin/admin-edit/admin-edit.component';
import { boxListReducer } from './store/store-list.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    BoxListComponent,
    HomeComponent,
    BoxDetailComponent,
    PageNotFoundComponent,
    BoxComponent,
    AdminComponent,
    AdminListComponent,
    AdminEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ shoppingList: boxListReducer}) 
  ],
  providers: [BoxListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
