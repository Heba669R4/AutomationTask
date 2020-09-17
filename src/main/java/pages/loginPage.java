package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class loginPage {

	static WebDriver driver;
	WebDriverWait wait; 
	
	
	public loginPage(WebDriver driver) {
		loginPage.driver=driver;
		wait = new WebDriverWait(driver, 50000000);
	}
	
	public void clickOnLogin() {
		wait.until(ExpectedConditions.elementToBeClickable(By.id("login-link")));

		driver.findElement(By.id("login-link")).click();
		
	}
	public void login (String email, String password) {

		wait.until(ExpectedConditions.visibilityOfElementLocated(By.name("loginEmail")));

		driver.findElement(By.name("loginEmail")).sendKeys(email);
		driver.findElement(By.name("loginPassword")).sendKeys(password);
		driver.findElement(By.id("login-form-button")).click();
	}
	
	public void openMenu() {
		
		
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"intl_homepage-injection-zone-1\"]/div[2]/div/div/div/ul/li[6]/article/div/div/h3/a/span[2]")));
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='account-icon-button']")));
		driver.findElement(By.xpath("//*[@id='account-icon-button']")).click();
	}
	
	public String getTextValue() {
		
		
		
		return driver.findElement(By.name("userLogout")).getText();
		
	}
	public String getLogoutTextValue() {
		
		
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='account-icon-button']")));
		driver.findElement(By.xpath("//*[@id='account-icon-button']")).click();
		return driver.findElement(By.id("login-title")).getText();
		
	}
	
	public void logout ()
	{
		driver.findElement(By.name("userLogout")).click();
	}
	
	
	
}
