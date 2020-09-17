$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/End2End_Tests.feature");
formatter.feature({
  "name": "Automated End2End Tests",
  "description": "  Description: The purpose of this feature is to test End 2 End integration.",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Customer place an order by purchasing an item from search",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "name": "he search for \"\u003cproductName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "choose to buy Two items",
  "keyword": "And "
});
formatter.step({
  "name": "moves to checkout cart and enter personal details on checkout page and place the order",
  "keyword": "And "
});
formatter.step({
  "name": "he can view the order and download the invoice",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "productName"
      ]
    },
    {
      "cells": [
        "Apple MacBook Pro 13-inch"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Customer place an order by purchasing an item from search",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "E2ETests.user_is_on_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he search for \"Apple MacBook Pro 13-inch\"",
  "keyword": "When "
});
formatter.match({
  "location": "E2ETests.he_search_for(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: Element \u003cul id\u003d\"ui-id-1\" class\u003d\"ui-menu ui-widget ui-widget-content ui-autocomplete ui-front\"\u003e could not be scrolled into view\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-53K6SHE\u0027, ip: \u0027192.168.1.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 68.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20190705220548, moz:geckodriverVersion: 0.24.0, moz:headless: false, moz:processID: 11628, moz:profile: C:\\Users\\Lenovo\\AppData\\Loc..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: d78e1a87-1719-485a-84c7-43da7957ea64\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat pages.SearchPage.ProductSearchUsingAutoSuggest(SearchPage.java:43)\r\n\tat steps.E2ETests.he_search_for(E2ETests.java:26)\r\n\tat ✽.he search for \"Apple MacBook Pro 13-inch\"(file:src/test/java/features/End2End_Tests.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "choose to buy Two items",
  "keyword": "And "
});
formatter.match({
  "location": "E2ETests.choose_to_buy_Two_items()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "moves to checkout cart and enter personal details on checkout page and place the order",
  "keyword": "And "
});
formatter.match({
  "location": "E2ETests.moves_to_checkout_cart_and_enter_personal_details_on_checkout_page_and_place_the_order()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "he can view the order and download the invoice",
  "keyword": "Then "
});
formatter.match({
  "location": "E2ETests.he_can_view_the_order_and_download_the_invoice()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/java/features/UserRegistration.feature");
formatter.feature({
  "name": "User Registration",
  "description": "    I want to check that the user can register can in our e-commerce website.",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User Registration",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "UserRegistration.the_user_in_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i click on register link",
  "keyword": "When "
});
formatter.match({
  "location": "UserRegistration.i_click_on_register_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i entered the user data",
  "keyword": "And "
});
formatter.match({
  "location": "UserRegistration.i_entered_the_user_data()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the registration page displayed successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "UserRegistration.the_registration_page_displayed_successfully()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: Failed to convert data to an object\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-53K6SHE\u0027, ip: \u0027192.168.1.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 68.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20190705220548, moz:geckodriverVersion: 0.24.0, moz:headless: false, moz:processID: 11628, moz:profile: C:\\Users\\Lenovo\\AppData\\Loc..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: d78e1a87-1719-485a-84c7-43da7957ea64\n*** Element info: {Using\u003dcss selector, value\u003ddiv.result}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat steps.UserRegistration.the_registration_page_displayed_successfully(UserRegistration.java:40)\r\n\tat ✽.the registration page displayed successfully(file:src/test/java/features/UserRegistration.feature:8)\r\n",
  "status": "failed"
});
});