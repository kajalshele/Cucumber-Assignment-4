package QualityKioskTraining.UnitTestingUsingCucumber;

import org.junit.runner.RunWith;
import cucumber.junit.Cucumber;

@RunWith(Cucumber.class)
@Cucumber.Options(format = {"pretty", "html:target/cucumber"},features="FeatureFiles",glue= {"StepDefination"})
public class RunnerClass {

}
