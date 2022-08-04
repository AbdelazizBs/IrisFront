import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import {AuthGuardService} from '../../services/auth-guard.service';
import {CommandeComponent} from '../../pages/commande/commande.component';
import {LogoutComponent} from '../../pages/logout/logout.component';
import {MachineComponent} from '../../pages/machine/machine.component';
import {UpdateMachineComponent} from '../../pages/update-machine/update-machine.component';
import {ArticleComponent} from '../../pages/article/article.component';
import {UpdateArticleComponent} from '../../pages/update-article/update-article.component';
import {EtapeProductionComponent} from '../../pages/etape-production/etape-production.component';
import {UpdateEtapeProductionComponent} from '../../pages/update-etape-production/update-etape-production.component';
import {AjouterEtapeComponent} from '../../pages/ajouter-etape/ajouter-etape.component';
import {AjouterMachineComponent} from '../../pages/ajouter-machine/ajouter-machine.component';
import {AjouterArticleComponent} from '../../pages/ajouter-article/ajouter-article.component';
import {OrdreFabricationComponent} from '../../pages/ordre-fabrication/ordre-fabrication.component';
import {UpdateOrdreFabricationComponent} from '../../pages/update-ordre-fabrication/update-ordre-fabrication.component';
import {AjouterCommandeComponent} from '../../pages/ajouter-commande/ajouter-commande.component';
import {ClientComponent} from '../../pages/client/client.component';
import {ArticleClientComponent} from '../../pages/article-client/article-client.component';
import {AjouterClientComponent} from '../../pages/ajouter-client/ajouter-client.component';
import {UpdateClientComponent} from '../../pages/update-client/update-client.component';
import {ArticleCommandeComponent} from '../../pages/article-commande/article-commande.component';
import {ArticleNonLieeComponent} from '../../pages/article-non-liee/article-non-liee.component';

export const AdminLayoutRoutes: Routes = [
  /* { path: 'dashboard',      component: DashboardComponent , canActivate : [AuthGuardService]},
    { path: 'user-profile',   component: UserProfileComponent , canActivate : [AuthGuardService] },
    { path: 'tables',         component: TablesComponent  , canActivate : [AuthGuardService]},
    { path: 'icons',          component: IconsComponent , canActivate : [AuthGuardService] },
    { path: 'maps',           component: MapsComponent  , canActivate : [AuthGuardService]}*/

  { path: 'article',      component: ArticleComponent },
  { path: 'etape-production',      component: EtapeProductionComponent },
  { path: 'dashboard',      component: DashboardComponent },
  { path: 'user-profile',   component: UserProfileComponent  },
  { path: 'tables',         component: TablesComponent  },
  { path: 'icons',          component: IconsComponent  },
  { path: 'logout',          component: LogoutComponent  },
  { path: 'machine',          component: MachineComponent  },
  { path: 'update-machine/:id',    component: UpdateMachineComponent  },
  { path: 'update-article/:id',    component: UpdateArticleComponent  },
  { path: 'update-ordre-fabrication/:codeArticle',    component: UpdateOrdreFabricationComponent  },
  { path: 'update-etape-production/:id',    component: UpdateEtapeProductionComponent  },
  { path: 'ajouter-etape',    component: AjouterEtapeComponent  },
  { path: 'ajouter-machine',    component: AjouterMachineComponent  },
  { path: 'commande',           component: CommandeComponent  },
  { path: 'ajouter-article',           component: AjouterArticleComponent  },
  { path: 'ajouter-commande',           component: AjouterCommandeComponent  },
  { path: 'client',           component: ClientComponent},
  { path: 'article-non-liee',           component: ArticleNonLieeComponent},
  { path: 'ordre-fabrication/:id',           component: OrdreFabricationComponent  },
  { path: 'article-client/:nom/:id',           component: ArticleClientComponent  },
  { path: 'update-client/:id',           component: UpdateClientComponent  },
  { path: 'article-commande/:idCmd/:nomClient/:numCmd',           component: ArticleCommandeComponent  },
  { path: 'ajouter-client',           component: AjouterClientComponent  }


];
