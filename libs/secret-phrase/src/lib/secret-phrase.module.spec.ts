import { async, TestBed } from '@angular/core/testing';
import { SecretPhraseModule } from './secret-phrase.module';

describe('SecretPhraseModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SecretPhraseModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(SecretPhraseModule).toBeDefined();
  });
});
