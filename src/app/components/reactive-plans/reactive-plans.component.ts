import { Component} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-plans',
  templateUrl: './reactive-plans.component.html',
  styleUrls: ['./reactive-plans.component.scss']
})
export class ReactivePlansComponent{
  form: FormGroup;
  income = 0;
  personalplan = 0;
  enterpriseplan = 0;
  total = -1;
  setAndorra = false;
  firstTrace = 0.19;
  secondTrace = 0.24;
  thirdTrace = 0.3;
  fourthTrace = 0.37;
  fifthTrace = 0.45;
  sixthTrace = 0.47;
  firstTraceAnd = 0;
  secondTraceAnd = 0.05;
  thirdTraceAnd = 0.1;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      income: [0, [Validators.required, Validators.min(0)]],
      personalplan: [0, [Validators.required, Validators.min(0), Validators.max(1500)]],
      enterpriseplan: [0, [Validators.required, Validators.min(0), Validators.max(8500)]]
    });
  }
  onChanges():void {
    this.getErrorMessage('income')
    this.getErrorMessage('personalplan')
    this.getErrorMessage('enterpriseplan')
  }

  getResult() {
    if (this.form.valid) {
    const base = this.form.get('income')?.value;
    const personalPlan = this.form.get('personalplan')?.value;
    const enterprisePlan = this.form.get('enterpriseplan')?.value;
    this.total = this.makeCalculation(personalPlan,enterprisePlan,base,0);
  }
  else{
    this.onChanges();
  }
}
getAResult() {
  if (this.form.valid) {
  const base = this.form.get('income')?.value;
  const personalPlan = this.form.get('personalplan')?.value;
  const enterprisePlan = this.form.get('enterpriseplan')?.value;
  this.total = this.makeArCalculation(personalPlan,enterprisePlan,base,0);
}
else{
  this.onChanges();
}
}
makeCalculation(personalplan:number,companyPlan:number, income:number,total:number){
  total = personalplan;
  total += companyPlan;
  let result;
  const percentage =  this.evaluateRange(income)
  if( total == 0) { result = 0; return result}
  else { result =  total * percentage; return result;}
}
makeArCalculation(personalplan:number,companyPlan:number, income:number,total:number){
  total = personalplan;
  total += companyPlan;
  let result;
  const percentage =  this.evaluateAndRange(income)
  if( total == 0) { result = 0; return result}
  else { result =  total * percentage; return result;}
}
  evaluateRange(t:number):number{
    if (t<= 12450){return this.firstTrace}
    else if (t>=12451 && t<=20199){return this.secondTrace}
    else if (t>=20200 && t<=35199){return this.thirdTrace}
    else if (t>=35200 && t<=59999){return this.fourthTrace}
    else if (t>=60000 && t<=299999){return this.fifthTrace}
    else {return this.sixthTrace}
  }
  setAndorraf(){
    const selector = <HTMLButtonElement> document.getElementById('langSel');
    if(this.setAndorra){
      this.setAndorra = false
      selector.innerHTML = 'ES';
    }
    else{
      this.setAndorra = true;
      selector.innerHTML = 'AD';
    }
  }
  evaluateAndRange(t:number):number{
    if (t<= 24000){return this.firstTraceAnd}
    else if (t>=24001 && t<=40000){return this.secondTraceAnd}
    else{return this.thirdTraceAnd}
  }
  getErrorMessage(controlName: string) {
    const control = this.form.get(controlName);
    if (control?.hasError('required')) {
      alert( `${controlName} field is required`);
    }
    if (control?.hasError('min')) {
      alert( `The minimum value is ${control.errors?.['min'].min} for ${controlName}`);
    }
    if (control?.hasError('max')) {
      alert( `The maximum value is ${control.errors?.['max'].max} for ${controlName}`);
    }
    return '';
  }
}
