var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];

var employees = [atticus, jem, boo, scout, robert, mayella];

var resultArray = [];

var employeeTitles = ["Name","Employee Number","Yearly Salary","Bonus Rating"];
var resultsTitles = ["Name","Bonus Percent", "Salary with Bonus","Bonus"];

// Constants Below

var reviewScore1 = 0;
var reviewScore2 = 0;
var reviewScore3 = 0.4;
var reviewScore4 = 0.6;
var reviewScore5 = 0.10;

var seniorityEmployeeIDLength = 4;
var seniorityBonusAdjustment = 0.05;

var salaryMax = 65000;
var salaryMaxPercentAdjustment = -0.01;

var bonusMax = 0.13;
var bonusMin = 0.00;



//list of functions
//main function - runs the whole show
//  createBonusDataArray  - creates the array of new data for each employee
//                      1. name
//                      2. bonus percent
//                      3. salary + bonus
//                      4. bonus in dollar ammount
//    calculateBonusPercent- calculates bonus percent
//      getReviewScoreAdjustment - determines percent increase based on review
//      getSeniorityAdjustment - determines if employee has seniority adjustment
//      getSalaryAdjustment - determines if employee exceeds salary threshold
//      getPercentageRange - determines if bonus falls within acceptable range
//    displayDataArrays - displays new array of information

main(employees);

function main(employees) {
  for (var i = 0; i < employees.length; i++){
    resultArray = empOutput(employees[i]);
    console.log(resultArray);
    displayDataArrays(employees[i],resultArray);
  }
}

function empOutput (employee) {
var result = [];
var basePay = parseInt(employee[2]);
var bonusPercent = calculateBonusPercent(employee[1], employee[2], employee[3]);
var bonus = basePay * bonusPercent;


result [0] = employee[0];
result [1] = bonusPercent;
result [2] = basePay + bonus;
result [3] = Math.round(bonus);

return result;
}

function calculateBonusPercent(employeeNum,salary,rating){
  var bonusPercentCalc = 0;

  bonusPercentCalc += getReviewScoreAdjustment(rating);
  console.log("bonusPercentCalc after rating",bonusPercentCalc);
  bonusPercentCalc += getSeniorityAdjustment(employeeNum);
  console.log("bonusPercentCalc after Seniority",bonusPercentCalc);
  bonusPercentCalc += getSalaryAdjustment(salary);
  console.log("bonusPercentCalc after Salary", bonusPercentCalc);
  bonusPercentCalc = getPercentageRange(bonusPercentCalc);

  return bonusPercentCalc;
}

function getReviewScoreAdjustment(rating){
  console.log("Rating",rating);
  var bonusPercent = 0;

  switch (rating) {
    case 1:
    bonusPercent += reviewScore1;
    break;

    case 2:
    bonusPercent += reviewScore2;
    break;

    case 3:
    bonusPercent += reviewScore3;
    break;

    case 4:
    bonusPercent += reviewScore4;
    break;

    case 5:
    bonusPercent += reviewScore5;
    break;
  }
  console.log("bonusPercent",bonusPercent);
  return bonusPercent;
}

function getSeniorityAdjustment(employeeNum){
  var bonusPercent = 0;
  if (employeeNum.length == seniorityEmployeeIDLength) {
    bonusPercent += seniorityBonusAdjustment;
  }
  console.log("bonusPercent in getSeniorityAdjustment", bonusPercent);
  return bonusPercent;
}

function getSalaryAdjustment(salary){
  var bonusPercent = 0;
  console.log("salary.parseInt in getSalaryAdjustment", parseInt(salary));
  if (parseInt(salary) > salaryMax) {
    bonusPercent = salaryMaxPercentAdjustment;
  }
  console.log("bonusPercent in getSalaryAdjustment", bonusPercent);
  return bonusPercent;
}

function getPercentageRange(bonusPercentCalc){
  var bonusPercent = bonusPercentCalc;
  if(bonusPercent > bonusMax) {
    bonusPercent = bonusMax;
  }

  else if (bonusPercent < bonusMin) {
    bonusPercent = bonusMin;
  }
  return bonusPercent;
}

function displayDataArrays () {
    // $('body').append('<ul> Employee: '+ employees[i][0]+'</ul>');
    // console.log(employees[i].length);
    //   for (var j = 0; j < employees[i].length; j++){
    //     $('body').append('<li>'+employeeTitles[j]+': '+employees[i][j]+'</li>');
    //   }
    //   for (var k = 1; k < resultArray.length; k++){
    //     $('body').append('<li>'+resultsTitles[k]+': '+resultArray[k]+'</li>');
    //   }
    //    $('body').append('<p>'+resultArray+'</p>');
    // }
}
