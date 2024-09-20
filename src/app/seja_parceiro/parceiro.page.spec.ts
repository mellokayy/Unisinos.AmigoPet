import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ParceiroPage } from './parceiro.page';

describe('ParceiroPage', () => {
  let component: ParceiroPage;
  let fixture: ComponentFixture<ParceiroPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParceiroPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ParceiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
