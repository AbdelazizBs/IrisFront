import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleClientComponent } from './article-client.component';

describe('ArticleClientComponent', () => {
  let component: ArticleClientComponent;
  let fixture: ComponentFixture<ArticleClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
