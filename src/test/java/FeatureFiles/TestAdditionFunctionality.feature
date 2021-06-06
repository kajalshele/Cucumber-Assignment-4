Feature: Testing Addition functionality of Calculator API

      Scenario: Testing Addition with Positive Numbers
               Given CalculatorAPI class object is created
               When Addition function called with 20 and 10
               Then Addition function should return 30
       
        Scenario: Testing Addition with Negative Numbers
               Given CalculatorAPI class object is created
               When Addition function called with -20 and -10
               Then Addition function should return -30
       
        Scenario: Testing Addition with Zero Numbers
               Given CalculatorAPI class object is created
               When Addition function called with 0 and 0
               Then Addition function should return 0
               
     