package StepDefination;

import org.testng.Assert;

import QualityKioskTraining.UnitTestingUsingCucumber.Calculator;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;

public class DivisionStepDefination {
	Calculator object = new Calculator();
	int answer;

	@When("^Division function called with (\\d+) and (\\d+)$")
	public void divisionWithPositiveNumber(int first, int second) {
		answer = object.division(first, second);
	}

	@Then("^Division function should return (\\d+)$")
	public void divisionResult(int expectedResult) {
		Assert.assertEquals(answer, expectedResult, "Division not work with Positive number");
	}

	@When("^Division function called with -(\\d+) and -(\\d+)$")
	public void divisionWithNegativeNumber(int first, int second) {
		answer = object.division(first, second);
	}

}
