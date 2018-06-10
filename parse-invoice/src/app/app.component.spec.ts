import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ParsingServiceService } from './parsing-service.service';
describe('AppComponent', () => {
  let ParsingServiceStub : Partial<ParsingServiceService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers:    [ {provide: ParsingServiceService, useValue: ParsingServiceStub } ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should render title in a P tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Please upload the file you want to parse.');
  }));
});
