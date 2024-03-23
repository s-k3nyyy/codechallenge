//import module
const readline = require('readline');

//TAX rates function
function calculateTax(income) {
    //the tax rateslabs
    const taxesSlabes = [{
                limit: 24000,
                rate: 0.1
            },
            {
                limit: 32333,
                rate: 0.25
            },
            {
                limit: 500000,
                rate: 0.3
            },
            {
                limit: 800000,
                rate: 0.325
            },
            {
                limit:Infinity,
                rate: 0.35
                },
            ];
  //initilize our tax to zero
  let tax =0;
  //initilize remainIncome to total income         
  let remainIncome = income;
  for (const slab of taxesSlabes){
    if(remainIncome <=0 ) break;
    const taxableAmount = Math.min(remainIncome,slab.limit);
    tax += taxableAmount * slab.rate;
    //update tax
    remainIncome -= taxableAmount;
}
  return tax;}

//define NHIFrates
function caclNhifDeduction(grosspay){
    const NHIFrates = [
        {limit:5999,deduction:150},
        {limit:7999,deduction:300},
        {limit:11999,deduction:400},
        {limit:14999, deduction:500},
        {limit:19999, deduction:600},
        {limit:24999, deduction:750},
        {limit:29999, deduction:850},
        {limit:34999, deduction:900},
        {limit:39999, deduction:950},
        {limit:44999, deduction:1000},
        {limit:49999, deduction:1100},
        {limit:59999, deduction:1200},
        {limit:69999, deduction:1300},
        {limit:79999, deduction:1400},
        {limit:89999, deduction:1500},
        {limit:99999, deduction:1600},
        {limit:Infinity, deduction:1700},
        

    ];
    for (const rate of NHIFrates){
        if(grosspay <= rate.limit){
            return rate.deduction;
        }
    }
}
//excedd the highrst limit 
return NHIFrates[NHIFrates.length - 1]
