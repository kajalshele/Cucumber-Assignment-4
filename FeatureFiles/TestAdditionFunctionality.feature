Feature: Testing Addition functionality of Calculator API

      Scenario: Checking Addition functionality with Positive Numbers
               Given CalculatorAPI class object is created
               When Addition function is called with 10 and 20
               Then Addition function should return 30
     
     
      Scenario: Checking Subtraction functionality with Positive Numbers
               Given CalculatorAPI class object is created
               When Subtraction function is called with 20 and 10
               Then Addition function should return 1
               
               