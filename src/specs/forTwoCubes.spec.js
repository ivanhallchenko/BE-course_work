const userHelper = require('../helpers/helper');
const agent = require('../helpers/superagentHelper');
const expect = require('chai').expect;

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

let throwPersentage = {
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0,
  11: 0,
  12: 0
}

 describe('Throwing two dice 100, 1000, 5000 times', function() {
   it('Two dice rolls 100', async function () {
     let resultOf100Rolls = await userHelper.get2Cubes100Rolls(agent); // GET response
     allValues = resultOf100Rolls.text;                                // Find our values in body
     allValues = allValues.split("\n");                                // Converting to one line
     allValues.pop();                                                  // Cut off the last space
     allValues = allValues.map( i => {                                 // Loop through the array, in which we remove tabs
       // '1\t4'
       let elem = i.split("\t").map(j => parseInt(j));                 // And convert the text to numbers for each element in new array
       // ["1", "4"]
       return elem[0] + elem[1];                                       // Then we return the sum of the two faces to the overwritten array
     });
     console.log("ALL DICE ROLLS TOTAL \n " + allValues + "\n");

     for(let k = 0; k < allValues.length; k++){                        // Count the number of dice points dropped out the same time, from 2 to 12
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
     console.log("The number of drops of the same amount \n" + Object.values(quantityOfValues));

     // Consider the percentage of each amount dropped relative to the ideal (8.3 times per 100 throws)
     for (let k = 2; k < Object.keys(quantityOfValues).length+2; k++ ){
       throwPersentage[k] = (Math.round(100 * (quantityOfValues['quantityOf' + k] / 8.3)));
     }
     console.log("The Fallout Percentage of each number, relative to the ideal.\nFor 100 rolls, 100 percent distribution would be 8.3 for each total of two dice \n" + Object.values(throwPersentage)+ "\n\n");

     for (let j = 2; j < 13; j++){
       console.log(`The amount ${j} dropped out ${Object.values(quantityOfValues['quantityOf' + j])} times instead of 8.3. The percentage of deviation was ${(100 - throwPersentage[j]) + "%"}`);
     }


     // переписать фунцию для вывода проверки гипотезы на 100, 1000, 5000 бросков

   });
   // it('Two dice rolls 1000', async function () {
   //   let resultOf1000Rolls = await userHelper.get2Cubes1000Rolls(agent);
   //   //console.log(resultOf1000Rolls)
   //   //expect(resultOf1000Rolls.statusCode).to.equal(200);
   //   allValues = resultOf1000Rolls.text;
   //   allValues = allValues.split("\n");
   //   allValues.pop();
   //   console.log(allValues);
   //   allValues = allValues.map( i => {
   //     // '1\t4'
   //     let elem = i.split("\t").map(j => parseInt(j));
   //     // ["1", "4"]
   //     //return parseInt(elem[0]) + parseInt(elem[1]);
   //     return elem[0] + elem[1];
   //   });
   //   console.log(allValues);
   //
   //   for(let k = 0; k < allValues.length; k++){
   //     switch (allValues[k]){
   //       case 2:
   //         quantityOfValues.quantityOf2++;
   //         break;
   //       case 3:
   //         quantityOfValues.quantityOf3++;
   //         break;
   //       case 4:
   //         quantityOfValues.quantityOf4++;
   //         break;
   //       case 5:
   //         quantityOfValues.quantityOf5++;
   //         break;
   //       case 6:
   //         quantityOfValues.quantityOf6++;
   //         break;
   //       case 7:
   //         quantityOfValues.quantityOf7++;
   //         break;
   //       case 8:
   //         quantityOfValues.quantityOf8++;
   //         break;
   //       case 9:
   //         quantityOfValues.quantityOf9++;
   //         break;
   //       case 10:
   //         quantityOfValues.quantityOf10++;
   //         break;
   //       case 11:
   //         quantityOfValues.quantityOf11++;
   //         break;
   //       case 12:
   //         quantityOfValues.quantityOf12++;
   //         break;
   //     }
   //   }
   //   console.log("Object quantityOfValues \n" + Object.values(quantityOfValues));
   // });
   // it('Two dice rolls 5000', async function () {
   //   let resultOf5000Rolls = await userHelper.get2Cubes5000Rolls(agent);
   //   //console.log(resultOf5000Rolls)
   //   //expect(resultOf5000Rolls.statusCode).to.equal(200);
   //   allValues = resultOf5000Rolls.text;
   //   allValues = allValues.split("\n");
   //   allValues.pop();
   //   console.log(allValues);
   //   allValues = allValues.map( i => {
   //     // '1\t4'
   //     let elem = i.split("\t").map(j => parseInt(j));
   //     // ["1", "4"]
   //     //return parseInt(elem[0]) + parseInt(elem[1]);
   //     return elem[0] + elem[1];
   //   });
   //   console.log(allValues);
   //
   //   for(let k = 0; k < allValues.length; k++){
   //     switch (allValues[k]){
   //       case 2:
   //         quantityOfValues.quantityOf2++;
   //         break;
   //       case 3:
   //         quantityOfValues.quantityOf3++;
   //         break;
   //       case 4:
   //         quantityOfValues.quantityOf4++;
   //         break;
   //       case 5:
   //         quantityOfValues.quantityOf5++;
   //         break;
   //       case 6:
   //         quantityOfValues.quantityOf6++;
   //         break;
   //       case 7:
   //         quantityOfValues.quantityOf7++;
   //         break;
   //       case 8:
   //         quantityOfValues.quantityOf8++;
   //         break;
   //       case 9:
   //         quantityOfValues.quantityOf9++;
   //         break;
   //       case 10:
   //         quantityOfValues.quantityOf10++;
   //         break;
   //       case 11:
   //         quantityOfValues.quantityOf11++;
   //         break;
   //       case 12:
   //         quantityOfValues.quantityOf12++;
   //         break;
   //     }
   //   }
   //   console.log("Object quantityOfValues \n" + Object.values(quantityOfValues));
   // });
 });
