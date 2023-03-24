import { Component } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent {
  income =0;
  personalplan =0;
  enterpriseplan =0;
  total =0;
  result = -1;
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

  getResult(){
    if(this.personalplan<=1500 && this.enterpriseplan<=8500 && this.income >0){this.doOperations();}
    else if(this.personalplan>1500 && this.enterpriseplan<=8500 && this.income > 0) {alert('Some data is wrong, try to fill Personal Plan up to 1500');}
    else if(this.personalplan<=1500 && this.enterpriseplan>8500 && this.income > 0) {alert('Some data is wrong, try to fill Enterprise Plan up to 8500');}
    else{
     alert('Some data is wrong, income can´t be 0');}
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
  getAResult(){
    if(this.personalplan<=1500 && this.enterpriseplan<=8500 && this.income >0){this.doOperationsAnd();}
    else if(this.personalplan>1500 && this.enterpriseplan<=8500 && this.income > 0) {alert('Some data is wrong, try to fill Personal Plan up to 1500');}
    else if(this.personalplan<=1500 && this.enterpriseplan>8500 && this.income > 0) {alert('Some data is wrong, try to fill Enterprise Plan up to 8500');}
    else{alert('Some data is wrong, income can´t be 0');}
  }
  makeCalculation(personalplan:number,companyPlan:number, income:number,total:number){
    total = personalplan;
    total += companyPlan;
    let result:number;
    const percentage =  this.evaluateRange(income)
    if( total == 0) { result = 0; return result}
    else { result =  total * percentage; return result;}
  }
  doOperations(){
    this.total = this.personalplan 
    this.total += this.enterpriseplan; 
    const percentage = this.evaluateRange(this.income)
    if(this.total == 0) {this.result = 0}
    else {this.result = this.total * percentage;}
  }
  doOperationsAnd(){
    this.total = this.personalplan 
    this.total += this.enterpriseplan; 
    const percentage = this.evaluateAndRange(this.income)
    if(this.total == 0) {this.result = 0}
    else {this.result = this.total * percentage;}
  }

  evaluateRange(t:number):number{
    if (t<= 12450){return this.firstTrace}
    else if (t>=12451 && t<=20199){return this.secondTrace}
    else if (t>=20200 && t<=35199){return this.thirdTrace}
    else if (t>=35200 && t<=59999){return this.fourthTrace}
    else if (t>=60000 && t<=299999){return this.fifthTrace}
    else {return this.sixthTrace}
  }
  evaluateAndRange(t:number):number{
    if (t<= 24000){return this.firstTraceAnd}
    else if (t>=24001 && t<=40000){return this.secondTraceAnd}
    else{return this.thirdTraceAnd}
  }

}
