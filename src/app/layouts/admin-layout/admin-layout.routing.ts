import { Routes } from '@angular/router';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import {CommandeComponent} from '../../pages/commande/commande.component';
import {LogoutComponent} from '../../pages/logout/logout.component';
import {MachineComponent} from '../../pages/machine/machine.component';
import {ArticleComponent} from '../../pages/article/article.component';
import {EtapeProductionComponent} from '../../pages/etape-production/etape-production.component';
import {OrdreFabricationComponent} from '../../pages/ordre-fabrication/ordre-fabrication.component';
import {ClientComponent} from '../../pages/client/client.component';
import {ArticleClientComponent} from '../../pages/article-client/article-client.component';
import {ArticleCommandeComponent} from '../../pages/article-commande/article-commande.component';
import {ArticleNonLieeComponent} from '../../pages/article-non-liee/article-non-liee.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard',      component: DashboardComponent},
    // { path: 'user-profile',   component: UserProfileComponent , canActivate : [AuthGuardService] },

    { path: 'maps',           component: MapsComponent  },
  { path: 'article',      component: ArticleComponent },
  { path: 'etape-production',      component: EtapeProductionComponent },
  { path: 'dashboard',      component: DashboardComponent },
  { path: 'user-profile',   component: UserProfileComponent  },
  { path: 'tables',         component: TablesComponent  },
  { path: 'icons',          component: IconsComponent  },
  { path: 'logout',          component: LogoutComponent  },
  { path: 'machine',          component: MachineComponent  },
  { path: 'commande',           component: CommandeComponent  },
  { path: 'client',           component: ClientComponent},
  { path: 'article-non-liee',           component: ArticleNonLieeComponent},
  { path: 'ordre-fabrication/:idArticle',           component: OrdreFabricationComponent  },
  { path: 'article-client/:nom/:id',           component: ArticleClientComponent  },
  { path: 'article-commande/:idCmd/:nomClient/:numCmd',           component: ArticleCommandeComponent  },


];
