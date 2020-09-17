package tests;

import org.testng.Assert;
import org.testng.annotations.Test;

import pages.loginPage;

public class loginTest extends TestBase {
	
	
	loginPage loginObj;
	@Test(priority = 1)
	public void UserCanLoginSuccssfully() 
	{
		loginObj= new loginPage(driver);
		loginObj.clickOnLogin();
		loginObj.login("hebaraafat95@yahoo.com", "Heba#1234");
		loginObj.openMenu();
		Assert.assertTrue(loginObj.getTextValue().contains("Log Out"));

	}
	@Test(priority = 2)
	public void UserCanLogoutSuccssfully()
	{
		loginObj= new loginPage(driver);
       loginObj.logout();
       Assert.assertTrue(loginObj.getLogoutTextValue().contains("Log In"));

	}

}
