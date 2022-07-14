import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { LogoutComponent } from './pages/logout/logout.component';
import { CommandeComponent } from './pages/commande/commande.component';
import { MachineComponent } from './pages/machine/machine.component';
import {UpdateMachineComponent} from './pages/update-machine/update-machine.component';
import { ArticleComponent } from './pages/article/article.component';
import { UpdateArticleComponent } from './pages/update-article/update-article.component';
import { EtapeProductionComponent } from './pages/etape-production/etape-production.component';
import { UpdateEtapeProductionComponent } from './pages/update-etape-production/update-etape-production.component';
import { AjouterEtapeComponent } from './pages/ajouter-etape/ajouter-etape.component';
import { AjouterMachineComponent } from './pages/ajouter-machine/ajouter-machine.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    LogoutComponent,
    CommandeComponent,
    MachineComponent,
    UpdateMachineComponent,
    ArticleComponent,
    UpdateArticleComponent,
    EtapeProductionComponent,
    UpdateEtapeProductionComponent,
    AjouterEtapeComponent,
    AjouterMachineComponent,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
