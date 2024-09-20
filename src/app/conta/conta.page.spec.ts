import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ContaPage } from './conta.page';

describe('ContaPage', () => {
  let component: ContaPage;
  let fixture: ComponentFixture<ContaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContaPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ContaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
