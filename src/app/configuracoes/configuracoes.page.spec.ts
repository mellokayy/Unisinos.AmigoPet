import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ConfiguracoesPage } from './configuracoes.page';

describe('ConfiguracoesPage', () => {
  let component: ConfiguracoesPage;
  let fixture: ComponentFixture<ConfiguracoesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfiguracoesPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfiguracoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
