const expect = require('chai').expect;
const program = require('../src/exercise2');

describe(`${program.title}`, function () {

  it('Function yolo with mysterious parameter should return a list of messages', function () {

    const whereIsMyMind = [
      {
        name: "William",
        sex: 1,
      },
      {
        name: "Gaius",
        sex: 1,
      },
      {
        name: "Lee",
        sex: 1,
      },
      {
        name: "Kara",
        sex: 2,
      },
      {
        name: "Laura",
        sex: 2,
      },
      {
        name: "Number six",
        sex: 9,
      },
      {
        name: "Number height",
        sex: 9,
      }
    ];

    const output = [
      "0 not known character(s) ",
      "3 male character(s) William, Gaius, Lee",
      "2 female character(s) Kara, Laura",
      "2 not applicable character(s) Number six, Number height"
    ];

    expect(program.run(whereIsMyMind)).to.be.eql(output);
  });

});