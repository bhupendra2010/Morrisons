package PageObjectPackage;

import CommonPackage.DriverFactory;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.List;
import java.util.Random;

public class ProductPage extends DriverFactory {

    public void baseurl(){
        String actual=driver.getCurrentUrl();
        Assert.assertEquals(actual, "https://groceries.morrisons.com/webshop/startWebshop.do");

    }
    public void selectproduct(String Products){
        driver.findElement(By.id("findText")).sendKeys(Products);
        driver.findElement(By.cssSelector("input[type='submit']")).click();
        List<WebElement>prt=driver.findElements(By.cssSelector("h4[class='fop-title']"));
        prt.size();
        Random random=new Random();
        WebElement randomno=prt.get(random.nextInt(prt.size()));
        randomno.click();
    }
    public void baskettrolly(){
        driver.findElement(By.xpath("//*[@id=\"overview\"]/section[2]/ul/li/div[1]/button")).click();
    }
}
