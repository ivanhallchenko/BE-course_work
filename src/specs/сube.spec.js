const agent = require('../helpers/superagentHelper');
const expect = require('chai').expect;

let allValues;

describe.only('Rolling Cubes', function() {
  it('Get all rolls', async function(numberOfRolls = process.env.ROLLS || 1000, dices = process.env.DICES || 1, deviation = process.env.DEVIATION || 5) {
    let res = await agent
        .get(`https://www.random.org/integers/?num=${numberOfRolls}&min=${dices}&max=${dices*6}&col=1&base=10&format=plain&rnd=new`)
        .then((res) => {
          return res;
        });
    allValues = await res.text;
    allValues = allValues.split("\n");
    allValues.pop();
    console.log(allValues);

    let quantityOfValues = new Map();

    allValues.forEach(function(a){
      if (quantityOfValues[a] !== undefined)
        ++quantityOfValues[a];
      else
        quantityOfValues[a] = 1;
    });

    console.log(Object.values(quantityOfValues));

    let idealPercentile = numberOfRolls/(dices*(5+1));

      console.log(`\nThe Fallout Percentage of each number, relative to the ideal.\nFor ${numberOfRolls} rolls, 100 percent distribution would be  ${idealPercentile.toFixed(2)} for each`);


      for (let k = 1; k < Object.keys(quantityOfValues).length+1; k++ ){
        let differenceThrows = Math.abs(idealPercentile.toFixed(2) - quantityOfValues[k]);
        //console.log( "differenceThrows " + differenceThrows);

        let possibleDifference = (idealPercentile.toFixed(2) * deviation)/100;
        //console.log( "possibleDifference " + possibleDifference);

         let differenceDeviation = (differenceThrows * 100)/idealPercentile.toFixed(2);
        // console.log( "differenceDeviation " + differenceDeviation);
        console.log(`The amount ${k} dropped out ${quantityOfValues[k]} times instead of ${idealPercentile.toFixed(2)}. The difference of deviation amounted to ${differenceDeviation.toFixed(2)} %`);
        if (differenceThrows <= possibleDifference){
          console.log(`For value ${k} Result is PASS!`)
        }
        else {
          console.log(`For value ${k} Result is FALSE!`)
        }
      }
  });
});
