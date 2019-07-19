import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyAssetsComponent } from 'src/app/my-assets/my-assets.component';
import { OpportunitiesComponent } from 'src/app/opportunities/opportunities.component';
import { AssetsService } from './services/assets.service';

const routes: Routes = [
  {
    path: 'myassets/:type',
    component: MyAssetsComponent,
    resolve: {
      assets: AssetsService
    }
  },
  {
    path: 'opportunities',
    component: OpportunitiesComponent
  },
  {
    path: '**',
    redirectTo: 'myassets/all'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
