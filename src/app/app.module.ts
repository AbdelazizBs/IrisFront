import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule} from '@angular/core';
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
import { ArticleComponent } from './pages/article/article.component';
import { EtapeProductionComponent } from './pages/etape-production/etape-production.component';
import { OrdreFabricationComponent } from './pages/ordre-fabrication/ordre-fabrication.component';
import { ClientComponent } from './pages/client/client.component';
import { ArticleClientComponent } from './pages/article-client/article-client.component';
import { ArticleCommandeComponent } from './pages/article-commande/article-commande.component';
import { ArticleNonLieeComponent } from './pages/article-non-liee/article-non-liee.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {allIcons, HeroIconModule} from 'ng-heroicon';
import { AgGridModule } from 'ag-grid-angular';
import {
  DxButtonModule,
  DxCheckBoxModule,
  DxDataGridModule,
  DxPopupModule,
  DxScrollViewModule,
  DxSelectBoxModule,
  DxTemplateModule, DxToolbarModule
} from 'devextreme-angular';


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
    DxButtonModule,
    DxTemplateModule,
    DxDataGridModule,
    AgGridModule,
    DxPopupModule,
    DxScrollViewModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    HeroIconModule.withIcons({
      ...allIcons
    }),
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxToolbarModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    LogoutComponent,
    CommandeComponent,
    MachineComponent,
    ArticleComponent,
    EtapeProductionComponent,
    OrdreFabricationComponent,
    ClientComponent,
    ArticleClientComponent,
    ArticleCommandeComponent,
    ArticleNonLieeComponent,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
