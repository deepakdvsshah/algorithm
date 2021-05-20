import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@rabbi-challenge/secret-phrase').then(
        (m) => m.SecretPhraseModule
      ),
  },
];
@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(appRoutes, {
      initialNavigation: 'enabled',
      useHash: true,
      relativeLinkResolution: 'legacy',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
