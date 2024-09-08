import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {NeoflexComponent} from "./pages/neoflex/neoflex.component";
import {ProfitComponent} from "./pages/profit/profit.component";
import {CodexpertComponent} from "./pages/codexpert/codexpert.component";
import {OtherComponent} from "./pages/other/other.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'neoflex', component: NeoflexComponent},
  {path: 'prof-it', component: ProfitComponent},
  {path: 'codexpert', component: CodexpertComponent},
  {path: 'other-project', component: OtherComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
