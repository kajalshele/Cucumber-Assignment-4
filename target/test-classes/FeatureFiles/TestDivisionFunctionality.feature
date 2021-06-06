Feature: Testing Division functionality of CalculatorAPI

      Scenario: Testing Division with Positive Numbers
               Given CalculatorAPI class object is created
               When Division function called with 20 and 10
               Then Division function should return 2
    
       Scenario: Testing Division with Negative Numbers
               Given CalculatorAPI class object is created
               When Division function called with -20 and -10
               Then Division function should return 2
      
      