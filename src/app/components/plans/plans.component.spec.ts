import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PlansComponent } from './plans.component';

describe('PlansComponent', () => {
  let component: PlansComponent;
  let fixture: ComponentFixture<PlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlansComponent ],
      imports:[
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return 3000',()=>{
    let base = 30000;
    let personalPlans = 1500;
    let enterpriseplan = 8500;
    let prevYears=0;
    let y = component.makeCalculation(personalPlans,enterpriseplan,base,prevYears)
    expect(y).toBe(3000);
  });

  it('should return 4700',()=>{
    let base = 300000;
    let personalPlans = 1500;
    let enterpriseplan = 8500;
    let prevYears=0;
    let y = component.makeCalculation(personalPlans,enterpriseplan,base,prevYears)
    expect(y).toBe(4700);
  });

  it('should return 600',()=>{
    let base = 30000;
    let personalPlans = 1000;
    let enterpriseplan = 1000;
    let prevYears=0;
    let y = component.makeCalculation(personalPlans,enterpriseplan,base,prevYears)
    expect(y).toBe(600);
  });
});
