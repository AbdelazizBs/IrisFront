import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { AjouterArticleComponent } from './pages/ajouter-article/ajouter-article.component';
import { OrdreFabricationComponent } from './pages/ordre-fabrication/ordre-fabrication.component';
import { UpdateOrdreFabricationComponent } from './pages/update-ordre-fabrication/update-ordre-fabrication.component';
import { AjouterCommandeComponent } from './pages/ajouter-commande/ajouter-commande.component';
import { ClientComponent } from './pages/client/client.component';
import { AjouterClientComponent } from './pages/ajouter-client/ajouter-client.component';
import { ArticleClientComponent } from './pages/article-client/article-client.component';
import { UpdateClientComponent } from './pages/update-client/update-client.component';
import { ArticleCommandeComponent } from './pages/article-commande/article-commande.component';
import { ArticleNonLieeComponent } from './pages/article-non-liee/article-non-liee.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {allIcons, HeroIconModule} from 'ng-heroicon';
import { UpdateCommandeComponent } from './update-commande/update-commande.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    NgxMatSelectSearchModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
      HeroIconModule.withIcons({
        ...allIcons
      })
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
    AjouterArticleComponent,
    OrdreFabricationComponent,
    UpdateOrdreFabricationComponent,
    AjouterCommandeComponent,
    ClientComponent,
    AjouterClientComponent,
    ArticleClientComponent,
    UpdateClientComponent,
    ArticleCommandeComponent,
    ArticleNonLieeComponent,
    UpdateCommandeComponent,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
