import { async, TestBed } from '@angular/core/testing';
import { CharacterMap } from './character-map';

describe('CharacterMapModule', () => {
  let service: CharacterMap;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CharacterMap],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(CharacterMap).toBeDefined();
  });
});
