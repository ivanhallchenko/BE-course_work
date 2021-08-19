const userHelper = require('../helpers/helper');
const agent = require('../helpers/superagentHelper');
const expect = require('chai').expect;

let percentile = 100/(2*5);
let allValues;
let quantityOfValues = {
  quantityOf2 : 0,
  quantityOf3 : 0,
  quantityOf4 : 0,
  quantityOf5 : 0,
  quantityOf6 : 0,
  quantityOf7 : 0,
  quantityOf8 : 0,
  quantityOf9 : 0,
  quantityOf10 : 0,
  quantityOf11 : 0,
  quantityOf12 : 0
}

 describe('Throwing two dice 100, 1000, 5000 times', function() {
   it('Two dice rolls 100', async function () {
     let resultOf100Rolls = await userHelper.get2Cubes100Rolls(agent);
     //console.log(resultOf100Rolls)
     //expect(resultOf100Rolls.statusCode).to.equal(200);
     allValues = resultOf100Rolls.text;
     allValues = allValues.split("\n");
     allValues.pop();
     console.log(allValues);
     allValues = allValues.map( i => {
       // '1\t4'
       let elem = i.split("\t").map(j => parseInt(j));
       // ["1", "4"]
       //return parseInt(elem[0]) + parseInt(elem[1]);
       return elem[0] + elem[1];
     });
     console.log(allValues);

     for(let k = 0; k < allValues.length; k++){
       switch (allValues[k]){
         case 2:
           quantityOfValues.quantityOf2++;
           break;
         case 3:
           quantityOfValues.quantityOf3++;
           break;
         case 4:
           quantityOfValues.quantityOf4++;
           break;
         case 5:
           quantityOfValues.quantityOf5++;
           break;
         case 6:
           quantityOfValues.quantityOf6++;
           break;
         case 7:
           quantityOfValues.quantityOf7++;
           break;
         case 8:
           quantityOfValues.quantityOf8++;
           break;
         case 9:
           quantityOfValues.quantityOf9++;
           break;
         case 10:
           quantityOfValues.quantityOf10++;
           break;
         case 11:
           quantityOfValues.quantityOf11++;
           break;
         case 12:
           quantityOfValues.quantityOf12++;
           break;
       }
     }
     console.log("Object quantityOfValues \n" + Object.values(quantityOfValues));

     // написать формулу (количество бросков / 8.3 * 100), для 100 бросков, 100 процентов = 8,3 раза
     // посчитать  каждого кубика относительно 8,3
     // Каждое число должно выпасть 8,3 раза
     // Если, разнница выпадания каждого числа отличается от 8,3 то это и есть наше отклонение
     // И вывести для каждого числа процент отклонения

     // переписать фунцию для вывода проверки гипотезы на 100, 1000, 5000 бросков


   });
   it('Two dice rolls 1000', async function () {
     let resultOf1000Rolls = await userHelper.get2Cubes1000Rolls(agent);
     //console.log(resultOf1000Rolls)
     //expect(resultOf1000Rolls.statusCode).to.equal(200);
     allValues = resultOf1000Rolls.text;
     allValues = allValues.split("\n");
     allValues.pop();
     console.log(allValues);
     allValues = allValues.map( i => {
       // '1\t4'
       let elem = i.split("\t").map(j => parseInt(j));
       // ["1", "4"]
       //return parseInt(elem[0]) + parseInt(elem[1]);
       return elem[0] + elem[1];
     });
     console.log(allValues);

     for(let k = 0; k < allValues.length; k++){
       switch (allValues[k]){
         case 2:
           quantityOfValues.quantityOf2++;
           break;
         case 3:
           quantityOfValues.quantityOf3++;
           break;
         case 4:
           quantityOfValues.quantityOf4++;
           break;
         case 5:
           quantityOfValues.quantityOf5++;
           break;
         case 6:
           quantityOfValues.quantityOf6++;
           break;
         case 7:
           quantityOfValues.quantityOf7++;
           break;
         case 8:
           quantityOfValues.quantityOf8++;
           break;
         case 9:
           quantityOfValues.quantityOf9++;
           break;
         case 10:
           quantityOfValues.quantityOf10++;
           break;
         case 11:
           quantityOfValues.quantityOf11++;
           break;
         case 12:
           quantityOfValues.quantityOf12++;
           break;
       }
     }
     console.log("Object quantityOfValues \n" + Object.values(quantityOfValues));

     // написать формулу (количество бросков / 8.3 * 100), для 100 бросков, 100 процентов = 8,3 раза
     // посчитать  каждого кубика относительно 8,3
     // Каждое число должно выпасть 8,3 раза
     // Если, разнница выпадания каждого числа отличается от 8,3 то это и есть наше отклонение
     // И вывести для каждого числа процент отклонения

     // переписать фунцию для вывода проверки гипотезы на 100, 1000, 5000 бросков


   });
   it('Two dice rolls 5000', async function () {
     let resultOf5000Rolls = await userHelper.get2Cubes5000Rolls(agent);
     //console.log(resultOf5000Rolls)
     //expect(resultOf5000Rolls.statusCode).to.equal(200);
     allValues = resultOf5000Rolls.text;
     allValues = allValues.split("\n");
     allValues.pop();
     console.log(allValues);
     allValues = allValues.map( i => {
       // '1\t4'
       let elem = i.split("\t").map(j => parseInt(j));
       // ["1", "4"]
       //return parseInt(elem[0]) + parseInt(elem[1]);
       return elem[0] + elem[1];
     });
     console.log(allValues);

     for(let k = 0; k < allValues.length; k++){
       switch (allValues[k]){
         case 2:
           quantityOfValues.quantityOf2++;
           break;
         case 3:
           quantityOfValues.quantityOf3++;
           break;
         case 4:
           quantityOfValues.quantityOf4++;
           break;
         case 5:
           quantityOfValues.quantityOf5++;
           break;
         case 6:
           quantityOfValues.quantityOf6++;
           break;
         case 7:
           quantityOfValues.quantityOf7++;
           break;
         case 8:
           quantityOfValues.quantityOf8++;
           break;
         case 9:
           quantityOfValues.quantityOf9++;
           break;
         case 10:
           quantityOfValues.quantityOf10++;
           break;
         case 11:
           quantityOfValues.quantityOf11++;
           break;
         case 12:
           quantityOfValues.quantityOf12++;
           break;
       }
     }
     console.log("Object quantityOfValues \n" + Object.values(quantityOfValues));

     // написать формулу (количество бросков / 8.3 * 100), для 100 бросков, 100 процентов = 8,3 раза
     // посчитать  каждого кубика относительно 8,3
     // Каждое число должно выпасть 8,3 раза
     // Если, разнница выпадания каждого числа отличается от 8,3 то это и есть наше отклонение
     // И вывести для каждого числа процент отклонения

     // переписать фунцию для вывода проверки гипотезы на 100, 1000, 5000 бросков


   });
 });
