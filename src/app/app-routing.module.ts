import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { BoxComponent } from './box/box.component';
import { BoxListComponent } from './box-list/box-list.component';
import { BoxDetailComponent } from './box-list/box-detail/box-detail.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component';
import { AdminListComponent } from './admin/admin-list/admin-list.component';
import { AdminEditComponent } from './admin/admin-edit/admin-edit.component';

const routes: Routes = [ 
    { path: '', component: HomeComponent },
    { path: 'box', component: BoxComponent , children: [
        { path: 'list', component: BoxListComponent },
        { path: 'detail/:id', component: BoxDetailComponent }
    ] },
    { path: 'admin', component: AdminComponent , children: [
        { path: 'list', component: AdminListComponent },
        { path: 'edit', component: AdminEditComponent },
        { path: 'edit/:id', component: AdminEditComponent }
    ] },
/*     { path: 'servers', component: ServersComponent , children: [
        { path: ':id', component: ServerComponent },
        { path: ':id/edit', component: EditServerComponent } 
    ]}, */
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
