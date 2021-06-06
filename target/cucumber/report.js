$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('FeatureFiles\TestAdditionFunctionality.feature');
formatter.feature({
  "line": 1,
  "name": "Testing Addition functionality of Calculator API",
  "description": "",
  "id": "testing-addition-functionality-of-calculator-api",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Testing Addition with Positive Numbers",
  "description": "",
  "id": "testing-addition-functionality-of-calculator-api;testing-addition-with-positive-numbers",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "CalculatorAPI class object is created",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Addition function called with 20 and 10",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Addition function should return 30",
  "keyword": "Then "
});
formatter.match({
  "location": "AdditionStepDefination.objectCreate()"
});
formatter.result({
  "duration": 1249964900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 30
    },
    {
      "val": "10",
      "offset": 37
    }
  ],
  "location": "AdditionStepDefination.additionWithPositiveNumbers(int,int)"
});
formatter.result({
  "duration": 2568800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 32
    }
  ],
  "location": "AdditionStepDefination.additionResult(int)"
});
formatter.result({
  "duration": 5133100,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Testing Addition with Negative Numbers",
  "description": "",
  "id": "testing-addition-functionality-of-calculator-api;testing-addition-with-negative-numbers",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "CalculatorAPI class object is created",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Addition function called with -20 and -10",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Addition function should return -30",
  "keyword": "Then "
});
formatter.match({
  "location": "AdditionStepDefination.objectCreate()"
});
formatter.result({
  "duration": 50500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 31
    },
    {
      "val": "10",
      "offset": 39
    }
  ],
  "location": "AdditionStepDefination.additionWithNegativeNumbers(int,int)"
});
formatter.result({
  "duration": 269700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 33
    }
  ],
  "location": "AdditionStepDefination.additionResultNegative(int)"
});
formatter.result({
  "duration": 230200,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Testing Addition with Zero Numbers",
  "description": "",
  "id": "testing-addition-functionality-of-calculator-api;testing-addition-with-zero-numbers",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "CalculatorAPI class object is created",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Addition function called with 0 and 0",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Addition function should return 0",
  "keyword": "Then "
});
formatter.match({
  "location": "AdditionStepDefination.objectCreate()"
});
formatter.result({
  "duration": 54100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 30
    },
    {
      "val": "0",
      "offset": 36
    }
  ],
  "location": "AdditionStepDefination.additionWithPositiveNumbers(int,int)"
});
formatter.result({
  "duration": 159400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 32
    }
  ],
  "location": "AdditionStepDefination.additionResult(int)"
});
formatter.result({
  "duration": 123000,
  "status": "passed"
});
formatter.uri('FeatureFiles\TestDivisionFunctionality.feature');
formatter.feature({
  "line": 1,
  "name": "Testing Division functionality of CalculatorAPI",
  "description": "",
  "id": "testing-division-functionality-of-calculatorapi",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Testing Division with Positive Numbers",
  "description": "",
  "id": "testing-division-functionality-of-calculatorapi;testing-division-with-positive-numbers",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "CalculatorAPI class object is created",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Division function called with 20 and 10",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Division function should return 2",
  "keyword": "Then "
});
formatter.match({
  "location": "AdditionStepDefination.objectCreate()"
});
formatter.result({
  "duration": 22493900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 30
    },
    {
      "val": "10",
      "offset": 37
    }
  ],
  "location": "DivisionStepDefination.divisionWithPositiveNumber(int,int)"
});
formatter.result({
  "duration": 259300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 32
    }
  ],
  "location": "DivisionStepDefination.divisionResult(int)"
});
formatter.result({
  "duration": 580700,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Testing Division with Negative Numbers",
  "description": "",
  "id": "testing-division-functionality-of-calculatorapi;testing-division-with-negative-numbers",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "CalculatorAPI class object is created",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Division function called with -20 and -10",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Division function should return 2",
  "keyword": "Then "
});
formatter.match({
  "location": "AdditionStepDefination.objectCreate()"
});
formatter.result({
  "duration": 50500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 31
    },
    {
      "val": "10",
      "offset": 39
    }
  ],
  "location": "DivisionStepDefination.divisionWithNegativeNumber(int,int)"
});
formatter.result({
  "duration": 230100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 32
    }
  ],
  "location": "DivisionStepDefination.divisionResult(int)"
});
formatter.result({
  "duration": 144200,
  "status": "passed"
});
formatter.uri('FeatureFiles\TestMultiplicationFunctionality.feature');
formatter.feature({
  "line": 1,
  "name": "Testing Multiplication functionality of CalculatorAPI",
  "description": "",
  "id": "testing-multiplication-functionality-of-calculatorapi",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Testing Multiplication with Positive Numbers",
  "description": "",
  "id": "testing-multiplication-functionality-of-calculatorapi;testing-multiplication-with-positive-numbers",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "CalculatorAPI class object is created",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Multiplication function called with 20 and 10",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Multiplication function should return 200",
  "keyword": "Then "
});
formatter.match({
  "location": "AdditionStepDefination.objectCreate()"
});
formatter.result({
  "duration": 17215400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 36
    },
    {
      "val": "10",
      "offset": 43
    }
  ],
  "location": "MultiplicationStepDefination.multiplicationWithPositiveNumber(int,int)"
});
formatter.result({
  "duration": 343500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 38
    }
  ],
  "location": "MultiplicationStepDefination.multiplicationResult(int)"
});
formatter.result({
  "duration": 278600,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Testing Multiplication with Negative Numbers",
  "description": "",
  "id": "testing-multiplication-functionality-of-calculatorapi;testing-multiplication-with-negative-numbers",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "CalculatorAPI class object is created",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Multiplication function called with -20 and -10",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Multiplication function should return 200",
  "keyword": "Then "
});
formatter.match({
  "location": "AdditionStepDefination.objectCreate()"
});
formatter.result({
  "duration": 63400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 37
    },
    {
      "val": "10",
      "offset": 45
    }
  ],
  "location": "MultiplicationStepDefination.multiplicationWithNegativeNumber(int,int)"
});
formatter.result({
  "duration": 333400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 38
    }
  ],
  "location": "MultiplicationStepDefination.multiplicationResult(int)"
});
formatter.result({
  "duration": 170300,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Testing Multiplication with Zero Numbers",
  "description": "",
  "id": "testing-multiplication-functionality-of-calculatorapi;testing-multiplication-with-zero-numbers",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "CalculatorAPI class object is created",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Multiplication function called with 0 and 0",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Multiplication function should return 0",
  "keyword": "Then "
});
formatter.match({
  "location": "AdditionStepDefination.objectCreate()"
});
formatter.result({
  "duration": 78800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 36
    },
    {
      "val": "0",
      "offset": 42
    }
  ],
  "location": "MultiplicationStepDefination.multiplicationWithPositiveNumber(int,int)"
});
formatter.result({
  "duration": 134600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 38
    }
  ],
  "location": "MultiplicationStepDefination.multiplicationResult(int)"
});
formatter.result({
  "duration": 155600,
  "status": "passed"
});
formatter.uri('FeatureFiles\TestSubtractionFunctionality.feature');
formatter.feature({
  "line": 1,
  "name": "Testing Subtraction functionality of CalculatorAPI",
  "description": "",
  "id": "testing-subtraction-functionality-of-calculatorapi",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Testing Subtraction with Positive Numbers",
  "description": "",
  "id": "testing-subtraction-functionality-of-calculatorapi;testing-subtraction-with-positive-numbers",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "CalculatorAPI class object is created",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Subtraction function called with 20 and 10",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Subtraction function should return 10",
  "keyword": "Then "
});
formatter.match({
  "location": "AdditionStepDefination.objectCreate()"
});
formatter.result({
  "duration": 31399300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 33
    },
    {
      "val": "10",
      "offset": 40
    }
  ],
  "location": "SubtractionStepDefination.subtractionWithPositiveNumber(int,int)"
});
formatter.result({
  "duration": 278500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 35
    }
  ],
  "location": "SubtractionStepDefination.subtractionResult(int)"
});
formatter.result({
  "duration": 217300,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Testing Subtraction with Negative Numbers",
  "description": "",
  "id": "testing-subtraction-functionality-of-calculatorapi;testing-subtraction-with-negative-numbers",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "CalculatorAPI class object is created",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Subtraction function called with -20 and -10",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Subtraction function should return -10",
  "keyword": "Then "
});
formatter.match({
  "location": "AdditionStepDefination.objectCreate()"
});
formatter.result({
  "duration": 50000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 34
    },
    {
      "val": "10",
      "offset": 42
    }
  ],
  "location": "SubtractionStepDefination.subtractionWithNegativeNumber(int,int)"
});
formatter.result({
  "duration": 286600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 36
    }
  ],
  "location": "SubtractionStepDefination.subtractionResultNegative(int)"
});
formatter.result({
  "duration": 424100,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Testing Subtraction with Zero Numbers",
  "description": "",
  "id": "testing-subtraction-functionality-of-calculatorapi;testing-subtraction-with-zero-numbers",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "CalculatorAPI class object is created",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Subtraction function called with 0 and 0",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Subtraction function should return 0",
  "keyword": "Then "
});
formatter.match({
  "location": "AdditionStepDefination.objectCreate()"
});
formatter.result({
  "duration": 48100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 33
    },
    {
      "val": "0",
      "offset": 39
    }
  ],
  "location": "SubtractionStepDefination.subtractionWithPositiveNumber(int,int)"
});
formatter.result({
  "duration": 129000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 35
    }
  ],
  "location": "SubtractionStepDefination.subtractionResult(int)"
});
formatter.result({
  "duration": 185500,
  "status": "passed"
});
});