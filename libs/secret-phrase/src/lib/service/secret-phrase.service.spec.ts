import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { SecretPhraseService } from './secret-phrase.service';

describe('SecretPhraseService', () => {
  let service: SecretPhraseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(SecretPhraseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
