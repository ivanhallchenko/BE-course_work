const userHelper = require('../helpers/helper');
const agent = require('../helpers/superagentHelper');
const expect = require('chai').expect;

let allValues;
let quantityOfValues = {
  quantityOf1 : 0,
  quantityOf2 : 0,
  quantityOf3 : 0,
  quantityOf4 : 0,
  quantityOf5 : 0,
  quantityOf6 : 0
}

let throwPersentage = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0
}

describe('For one cube', function() {
  it('1 cube 100 rolls', async function () {
    let resultOf100Rolls = await userHelper.get1Cube100Rolls(agent);
    allValues = resultOf100Rolls.text;
    allValues = allValues.split("\n");
    allValues.pop();
    console.log(allValues);

    for(let i = 0; i < allValues.length; i++){
      switch (parseInt(allValues[i])){
        case 1:
          quantityOfValues.quantityOf1++;
          break;
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
      }
    }
    console.log(Object.values(quantityOfValues));
    //Consider the percentage of each amount dropped relative to the ideal (16.6 times per 100 throws)
      for (let k = 1; k < Object.keys(quantityOfValues).length+1; k++ ){
        throwPersentage[k] = (Math.round(100 * (quantityOfValues['quantityOf' + k] / 16.6)));
      }
      console.log("\nThe Fallout Percentage of each number, relative to the ideal.\nFor 100 rolls, 100 percent distribution would be 16.6 for each total of two dice \n" + Object.values(throwPersentage)+ "\n\n");

      for (let j = 1; j < 7; j++){
        console.log(`The amount ${j} dropped out ${Object.values(quantityOfValues['quantityOf' + j])} times instead of 16.6. The percentage of deviation was ${(100 - throwPersentage[j]) + "%"}`);
      }
  });
});
