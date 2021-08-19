const userHelper = require('../helpers/helper');
const agent = require('../helpers/superagentHelper');
const expect = require('chai').expect;

describe('TEST for one cube', function() {
  it('Get body', async function () {
    let resultOf100Rolls = await userHelper.get1Cube100Rolls(agent);
    //console.log(resultOf100Rolls)
    //expect(resultOf100Rolls.statusCode).to.equal(200);
    allValues = resultOf100Rolls.text;
    //console.log(allValues.split("\n"));
    allValues = allValues.split("\n");
    allValues.pop();
    console.log(allValues);
    allValues = allValues.map(i => {
      // '1\t4'
      let elem = i.split("\t").map(j => parseInt(j));
      // ["1", "4"]
      //return parseInt(elem[0]) + parseInt(elem[1]);
      return elem[0] + elem[1];
    });
    console.log(allValues);

    // сохранять значения в массив
    // перебирать массив и сохранять одинаковые значения в переменные, плюсуя их
    // после, из шести переменных посчитать отклонение между
  });
});
