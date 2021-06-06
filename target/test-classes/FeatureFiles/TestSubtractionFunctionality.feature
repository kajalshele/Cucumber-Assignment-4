Feature: Testing Subtraction functionality of CalculatorAPI

       Scenario: Testing Subtraction with Positive Numbers
               Given CalculatorAPI class object is created
               When Subtraction function called with 20 and 10
               Then Subtraction function should return 10

         Scenario: Testing Subtraction with Negative Numbers
               Given CalculatorAPI class object is created
               When Subtraction function called with -20 and -10
               Then Subtraction function should return -10
         
          Scenario: Testing Subtraction with Zero Numbers
               Given CalculatorAPI class object is created
               When Subtraction function called with 0 and 0
               Then Subtraction function should return 0
         
             
       