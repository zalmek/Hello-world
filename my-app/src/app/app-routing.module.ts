import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './route/home/home.component';
import { AboutComponent } from './route/about/about.component';
import { NotFoundComponent } from './route/not-found/not-found.component';
import { ItemComponent } from './route/item/item.component';
import { ItemDetailsComponent } from './route/item/item-details/item-details.component';
import { ItemStatComponent } from './route/item/item-stat/item-stat.component';


const routes: Routes = [
    {path:'', component: HomeComponent },
    {path:'about', component: AboutComponent  },
    {path:'item/:id', component: ItemComponent,children:[{path:'details',component:ItemDetailsComponent}, {path:'stat',component:ItemStatComponent}]  },
    {path:'**', component:  NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
