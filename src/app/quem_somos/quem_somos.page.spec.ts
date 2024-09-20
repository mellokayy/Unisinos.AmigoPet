import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { QuemSomosPage } from './quem_somos.page';

describe('QuemSomosPage', () => {
  let component: QuemSomosPage;
  let fixture: ComponentFixture<QuemSomosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuemSomosPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(QuemSomosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
