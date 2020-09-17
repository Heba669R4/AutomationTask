package tests;

import org.testng.Assert;
import org.testng.annotations.Test;

import pages.UserRegistrationPage;

public class UserRegistrationTest extends TestBase
{

	UserRegistrationPage registerObject;	
	
	
	@Test(priority = 1)
	public void UserCanRegisterSuccssfully() 
	{
		registerObject= new UserRegistrationPage(driver);
		registerObject.register("Nemo12345ysysy@gmail.com", "Nemoooo@67#");

		Assert.assertTrue(registerObject.getTextValue().contains("Click the link in the email we have sent to your inbox."));
		driver.navigate().to("https://edition.cnn.com/account/register");
	}
	
	@Test(priority = 2)
	public void RegisterwithInvaildEmail() 
	{
		registerObject= new UserRegistrationPage(driver);
		registerObject.register("test@gmail.com", "Nemoooo@67#");

		Assert.assertTrue(registerObject.getwrongTextValue().contains("This account already exists. Please log in."));

	}



	
}
