Feature: Testing Multiplication functionality of CalculatorAPI

       Scenario: Testing Multiplication with Positive Numbers
               Given CalculatorAPI class object is created
               When Multiplication function called with 20 and 10
               Then Multiplication function should return 200
     
      Scenario: Testing Multiplication with Negative Numbers
               Given CalculatorAPI class object is created
               When Multiplication function called with -20 and -10
               Then Multiplication function should return 200
     
     Scenario: Testing Multiplication with Zero Numbers
               Given CalculatorAPI class object is created
               When Multiplication function called with 0 and 0
               Then Multiplication function should return 0
     