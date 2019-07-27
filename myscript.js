let money = +prompt("Ваш бюджет на месяц","");
console.log(money);

let time = prompt("Введите дату в формате YYYY-MM-DD","");
console.log(time);

let appData = {
    budget: money,
    timeData: time,
    optionalExpenses: {},
    income:[],
    savings:false,
    expenses: {}
};

/*let a1= prompt("Введите обязательную статью расходов в этом месяце",""),
    a2= prompt("Во сколько обойдется?",""),
    a3= prompt("Введите обязательную статью расходов в этом месяце",""),
    a4=prompt("Во сколько обойдется?","");

    appData.expenses.a1=a2;
    appData.expenses.a3=a4;
    */


for (let i=0; i<2; i++) {
    let reqSt = prompt("Введите обязательную статью расходов в этом месяце",""),
        smSt = prompt("Во сколько обойдется?","");
    if (typeof(reqSt)==='string' && typeof(reqSt) !=null && typeof(smSt) !=null && reqSt !='' && smSt !='' && reqSt.length <50) {
        console.log('add element')
        appData.expenses[reqSt]=smSt;
    }
    else {
        alert("Введенные значения не соответствуют условиям, выполните повторный ввод");
        i--;
    }
    
    
};
let i=0;
while (i<2) {
     reqSt = prompt("Введите обязательную статью расходов в этом месяце","");
     smSt = prompt("Во сколько обойдется?","");
     if (typeof(reqSt)==='string' && typeof(reqSt) !=null && typeof(smSt) !=null && reqSt !='' && smSt !='' && reqSt.length <50) {
        console.log('add element')
        appData.expenses[reqSt]=smSt;
        i++;
    }
    else {
        alert("Введенные значения не соответствуют условиям, выполните повторный ввод");
       
    }
}

i=0;
do {
    reqSt = prompt("Введите обязательную статью расходов в этом месяце","");
    smSt = prompt("Во сколько обойдется?","");
    if (typeof(reqSt)==='string' && typeof(reqSt) !=null && typeof(smSt) !=null && reqSt !='' && smSt !='' && reqSt.length <50) {
       console.log('add element')
       appData.expenses[reqSt]=smSt;
       i++;
   }
   else {
       alert("Введенные значения не соответствуют условиям, выполните повторный ввод");
      
   }
}
while (i<2) ;

appData.moneyPerDay=appData.budget/30;
alert("Бюджет на 1 день =" + appData.moneyPerDay);
console.log(appData);

if (appData.moneyPerDay <=100) {
    console.log("Min")
} else if (appData.moneyPerDay >100 && appData.moneyPerDay<2000 ) {
    console.log("Avg")
} else console.log("Max");
