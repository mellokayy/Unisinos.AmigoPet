import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PetsPage } from './pets.page';

describe('Tab2Page', () => {
  let component: PetsPage;
  let fixture: ComponentFixture<PetsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PetsPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
