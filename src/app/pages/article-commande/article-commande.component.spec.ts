import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCommandeComponent } from './article-commande.component';

describe('ArticleCommandeComponent', () => {
  let component: ArticleCommandeComponent;
  let fixture: ComponentFixture<ArticleCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleCommandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
