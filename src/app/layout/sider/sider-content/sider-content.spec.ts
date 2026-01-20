import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiderContent } from './sider-content';

describe('SiderContent', () => {
  let component: SiderContent;
  let fixture: ComponentFixture<SiderContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiderContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiderContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
