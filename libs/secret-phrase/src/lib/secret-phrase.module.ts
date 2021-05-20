import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SecretPhraseComponent } from './component/secret-phrase.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: SecretPhraseComponent },
    ]),
  ],
  declarations: [SecretPhraseComponent],
})
export class SecretPhraseModule { }
