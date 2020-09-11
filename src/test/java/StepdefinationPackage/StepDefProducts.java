package StepdefinationPackage;

import PageObjectPackage.ProductPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefProducts {
    ProductPage page=new ProductPage();
    @Given("^User is on homepage$")
    public void user_is_on_homepage() throws Throwable {
        page.baseurl();
    }

    @When("^User search for the \"([^\"]*)\"$")
    public void user_search_for_the(String arg1) throws Throwable {
        page.selectproduct(arg1);
    }

    @When("^select the required product$")
    public void select_the_required_product() throws Throwable {
        page.baskettrolly();
    }

    @Then("^User should put selected items in baskets\\.$")
    public void user_should_put_selected_items_in_baskets() throws Throwable {

    }


}
