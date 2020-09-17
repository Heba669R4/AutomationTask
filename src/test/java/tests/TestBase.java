package tests;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;

public class TestBase {

	public static WebDriver driver;

	@BeforeTest
	public void startDriver()
	{
		
			System.setProperty("https.protocols", "TLSv1,TLSv1.1,TLSv1.2");
			System.setProperty("webdriver.chrome.driver",
					System.getProperty("user.dir")+"/Sources/chromedriver.exe");
			driver = new ChromeDriver();
			driver.manage().window().maximize();
	driver.navigate().to("https://edition.cnn.com/account/register");
		
		
	}

	@AfterTest
	public void tearDown() {

		driver.quit();
	}

}
