import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareProjectFormComponent } from './share-project-form.component';

describe('ShareProjectFormComponent', () => {
  let component: ShareProjectFormComponent;
  let fixture: ComponentFixture<ShareProjectFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareProjectFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareProjectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
