package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


public class UserRegistrationPage {

	static WebDriver driver;
	WebDriverWait wait; 
	
	
	public UserRegistrationPage(WebDriver driver) {
		UserRegistrationPage.driver=driver;
		wait = new WebDriverWait(driver, 500);
	}
	
	public void register (String email, String password) 
	{

		wait.until(ExpectedConditions.visibilityOfElementLocated(By.name("registrationEmail")));
		driver.findElement(By.name("registrationEmail")).clear();
	driver.findElement(By.name("registrationEmail")).sendKeys(email);
	driver.findElement(By.name("registrationPassword")).clear();
	driver.findElement(By.name("registrationPassword")).sendKeys(password);
	driver.findElement(By.xpath("//*[@id=\"registration-page-content\"]/form/label[1]")).click();
	driver.findElement(By.xpath("//*[@id=\"registration-page-content\"]/form/label[2]")).click();
	driver.findElement(By.id("registration-button")).click();
	}
	
	public String getTextValue() {
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("unverified-modal-body")));

		return driver.findElement(By.id("unverified-modal-body")).getText();
		
	}
	public String getwrongTextValue() {
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"feedback-message\"]/div")));

		return driver.findElement(By.xpath("//*[@id=\"feedback-message\"]/div")).getText();
		
	}
	

	
}
