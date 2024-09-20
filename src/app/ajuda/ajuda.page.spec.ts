import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AjudaPage } from './ajuda.page';

describe('AjudaPage', () => {
  let component: AjudaPage;
  let fixture: ComponentFixture<AjudaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjudaPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AjudaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
