package StepDefination;

import org.testng.Assert;

import QualityKioskTraining.UnitTestingUsingCucumber.Calculator;
import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;

public class AdditionStepDefination {
	Calculator object;
	int answer;

	@Given("^CalculatorAPI class object is created$")
	public void objectCreate() {
		object = new Calculator();
	}

	@When("^Addition function called with (\\d+) and (\\d+)$")
	public void additionWithPositiveNumbers(int first, int second) {
		answer = object.addition(first, second);
	}

	@Then("^Addition function should return (\\d+)$")
	public void additionResult(int expectedResult) {
		Assert.assertEquals(answer, expectedResult,"Addition not work with positive number");
	}

	@When("^Addition function called with -(\\d+) and -(\\d+)$")
	public void additionWithNegativeNumbers(int first, int second) {
		answer = object.addition(first, second);
	}

	@Then("^Addition function should return -(\\d+)$")
	public void additionResultNegative(int expectedResult) {
		Assert.assertEquals(answer, expectedResult,"Addition not work with negative number");
		}

}


