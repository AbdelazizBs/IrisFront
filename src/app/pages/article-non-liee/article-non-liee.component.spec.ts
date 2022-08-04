import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleNonLieeComponent } from './article-non-liee.component';

describe('ArticleNonLieeComponent', () => {
  let component: ArticleNonLieeComponent;
  let fixture: ComponentFixture<ArticleNonLieeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleNonLieeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleNonLieeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
