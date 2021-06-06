package StepDefination;

import org.testng.Assert;

import QualityKioskTraining.UnitTestingUsingCucumber.Calculator;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;

public class MultiplicationStepDefination {
	Calculator object = new Calculator();
	int answer;

	@When("^Multiplication function called with (\\d+) and (\\d+)$")
	public void multiplicationWithPositiveNumber(int first, int second) {
		answer=object.multiplication(first, second);
	}

	@Then("^Multiplication function should return (\\d+)$")
	public void multiplicationResult(int expectedResult) {
		Assert.assertEquals(answer, expectedResult,"Multiplication not work");
	}

	@When("^Multiplication function called with -(\\d+) and -(\\d+)$")
	public void multiplicationWithNegativeNumber(int first, int second) {
		answer=object.multiplication(first, second);
	}

}
