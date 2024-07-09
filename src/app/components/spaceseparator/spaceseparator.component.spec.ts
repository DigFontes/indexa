import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceseparatorComponent } from './spaceseparator.component';

describe('SpaceseparatorComponent', () => {
  let component: SpaceseparatorComponent;
  let fixture: ComponentFixture<SpaceseparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpaceseparatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpaceseparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
