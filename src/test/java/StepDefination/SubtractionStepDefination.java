package StepDefination;

import org.testng.Assert;

import QualityKioskTraining.UnitTestingUsingCucumber.Calculator;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;

public class SubtractionStepDefination {

	Calculator object = new Calculator();
	int answer;

	@When("^Subtraction function called with (\\d+) and (\\d+)$")
	public void subtractionWithPositiveNumber(int first, int second) {
		answer=object.subtraction(first, second);
	}

	@Then("^Subtraction function should return (\\d+)$")
	public void subtractionResult(int expectedResult) {
		Assert.assertEquals(answer, expectedResult,"Subtraction not work with positive number");
	}

	@When("^Subtraction function called with -(\\d+) and -(\\d+)$")
	public void subtractionWithNegativeNumber(int first, int second) {
		answer=object.subtraction(first, second);
	}

	@Then("^Subtraction function should return -(\\d+)$")
	public void subtractionResultNegative(int expectedResult) {
		Assert.assertEquals(answer, expectedResult,"Subtraction not work with negative number");
	}
}
