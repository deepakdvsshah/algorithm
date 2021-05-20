import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { SecretPhraseComponent } from './secret-phrase.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('SecretPhraseComponent', () => {
  let component: SecretPhraseComponent;
  let fixture: ComponentFixture<SecretPhraseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule, ReactiveFormsModule, RouterTestingModule],
      declarations: [SecretPhraseComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretPhraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
