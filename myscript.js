
let money,time;
function start(){
    money = +prompt("Ваш бюджет на месяц","");
    prompt("Введите дату в формате YYYY-MM-DD","");

    while(isNaN(money) || money=="" || money==null){
        money = +prompt("Ваш бюджет на месяц","");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    optionalExpenses: {},
    income:[],
    savings:true,
    expenses: {}
};

/*let a1= prompt("Введите обязательную статью расходов в этом месяце",""),
    a2= prompt("Во сколько обойдется?",""),
    a3= prompt("Введите обязательную статью расходов в этом месяце",""),
    a4=prompt("Во сколько обойдется?","");

    appData.expenses.a1=a2;
    appData.expenses.a3=a4;
    */


// for (let i=0; i<2; i++) {
//     let reqSt = prompt("Введите обязательную статью расходов в этом месяце",""),
//         smSt = prompt("Во сколько обойдется?","");
//     if (typeof(reqSt)==='string' && typeof(reqSt) !=null && typeof(smSt) !=null && reqSt !='' && smSt !='' && reqSt.length <50) {
//         console.log('add element')
//         appData.expenses[reqSt]=smSt;
//     }
//     else {
//         alert("Введенные значения не соответствуют условиям, выполните повторный ввод");
//         i--;
//     }
    
    
// };
function chooseExpenses(){
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
}

function chooseOptExpenses(){
    let j;
    while (j<3){
        let st = prompt("Введите необязательную статью расходов в этом месяце","");
        let sm = prompt("Во сколько обойдется?","");
        
        if (typeof(reqSt)==='string' && typeof(reqSt) !=null && typeof(smSt) !=null && reqSt !='' && smSt !='' && reqSt.length <50) {            
            appData.optionalExpenses[st]=sm;
            j++;
        }
        else {
            alert("Введенные значения не соответствуют условиям, выполните повторный ввод");            
        }
    }
}

chooseExpenses();

// i=0;
// do {
//     reqSt = prompt("Введите обязательную статью расходов в этом месяце","");
//     smSt = prompt("Во сколько обойдется?","");
//     if (typeof(reqSt)==='string' && typeof(reqSt) !=null && typeof(smSt) !=null && reqSt !='' && smSt !='' && reqSt.length <50) {
//        console.log('add element')
//        appData.expenses[reqSt]=smSt;
//        i++;
//    }
//    else {
//        alert("Введенные значения не соответствуют условиям, выполните повторный ввод");
      
//    }
// }
// while (i<2) ;

// appData.moneyPerDay=(appData.budget/30).toFixed(); //возвращает строковое значение
// alert("Бюджет на 1 день =" + appData.moneyPerDay);
// console.log(appData);

function detectLevel() {
    if (appData.moneyPerDay <=100) {
        console.log("Min");
    } else if (appData.moneyPerDay >100 && appData.moneyPerDay<2000 ) {
        console.log("Avg");
    } else console.log("Max");
}

function checkSavings(){
    if (appData.savings == true) {
        let save = +prompt('Сумма накоплений?'),
        percent = +prompt('Какой процент?');
        appData.monthIncome = save/100/12*percent;
        alert("Ваш доход " + appData.monthIncome);
    }
}
function detectDayBudget(budg){
    return (budg/30).toFixed();
}
appData.moneyPerDay = detectDayBudget(appData.budget);
alert("Бюджет на 1 день =" + appData.moneyPerDay);

checkSavings();
