$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ComputerMenu.feature");
formatter.feature({
  "line": 1,
  "name": "Computer menu Test",
  "description": "",
  "id": "computer-menu-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7791088400,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should see products are arrange in Alphabatical order",
  "description": "",
  "id": "computer-menu-test;user-should-see-products-are-arrange-in-alphabatical-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Computer Tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Desktop menu",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select Sort By position Name: Z to A",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should verify the Products are arrange in Descending order.",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 139212600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerMenuSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 1062207100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerMenuSteps.iClickOnDesktopMenu()"
});
formatter.result({
  "duration": 507777100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerMenuSteps.iSelectSortByPositionNameZToA()"
});
formatter.result({
  "duration": 226589000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerMenuSteps.iShouldVerifyTheProductsAreArrangeInDescendingOrder()"
});
formatter.result({
  "duration": 260025900,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: stale element not found\n  (Session info: chrome\u003d113.0.5672.94)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#stale_element_reference\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [c4811269e566f8474befae271b11ee7d, getElementText {id\u003d3371E5219264BA6A0EDA1AB7DDF41A81_element_43}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.94, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\pinak\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50706}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:50706/devtoo..., se:cdpVersion: 113.0.5672.94, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (c4811269e566f8474befae271b11ee7d)] -\u003e tag name: h2]\nSession ID: c4811269e566f8474befae271b11ee7d\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:257)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getText(RemoteWebElement.java:207)\r\n\tat com.nopcommerce.demo.pages.DesktopPage.defaultProductList(DesktopPage.java:42)\r\n\tat com.nopcommerce.demo.steps.ComputerMenuSteps.iShouldVerifyTheProductsAreArrangeInDescendingOrder(ComputerMenuSteps.java:35)\r\n\tat ✽.Then I should verify the Products are arrange in Descending order.(ComputerMenu.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1530290300,
  "status": "passed"
});
formatter.before({
  "duration": 3378638800,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User should add product to shopping cart successfully",
  "description": "",
  "id": "computer-menu-test;user-should-add-product-to-shopping-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on Computer Tab",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on Desktop menu",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select Sort By position Name: A to Z",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Add to Cart of Product Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see Build your own computer",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I select processor 2.2 GHz Intel Pentium Dual-Core E2200",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select ram 8GB [+$60.00]",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select HDD 400 GB [+$100.00]",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select OS Vista Premium [+$60.00]",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on Microsoft Office [+$50.00]\" and \"Total Commander [+$5.00] checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see Price $1,475.00",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on ADD TO CART Button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see The product has been added to your shopping cart",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I click on cross button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I mouse hover on shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on GO TO CART",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see Shopping cart",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I change Qty of product and update shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should see total price is $2,950.00",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I click on check box of terms and condition",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see Welcome, Please Sign In!",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "I click on CHECKOUT AS GUEST",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I fill all the mandatory details",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click to Continue",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I select radio button of Next Day Air($0.00)",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on radio button Credit Card",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on Continues",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I Select Master card From Select credit card dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I fill all the card details",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "I click on Continues",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I should see Payment method is Credit card",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I should seeShipping method is Next Day Air",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I should see total price $2,950.00",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I click on Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I should see text Thank You",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "I should see Your order has been successfully processed!",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I click on Continues button",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I should see Welcome to our store",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 32700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerMenuSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 1008825300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerMenuSteps.iClickOnDesktopMenu()"
});
formatter.result({
  "duration": 431171000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerMenuSteps.iSelectSortByPositionNameAToZ()"
});
formatter.result({
  "duration": 127513500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerMenuSteps.iClickOnAddToCartOfProductBuildYourOwnComputer()"
});
formatter.result({
  "duration": 2056225400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerMenuSteps.iShouldSeeBuildYourOwnComputer()"
});
formatter.result({
  "duration": 1291871000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    },
    {
      "val": "2",
      "offset": 21
    },
    {
      "val": "2200",
      "offset": 52
    }
  ],
  "location": "ComputerMenuSteps.iSelectProcessorGHzIntelPentiumDualCoreE(int,int,int)"
});
formatter.result({
  "duration": 204436300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 13
    },
    {
      "val": "60",
      "offset": 20
    },
    {
      "val": "00",
      "offset": 23
    }
  ],
  "location": "ComputerMenuSteps.iSelectRamGB$(int,int,int)"
});
formatter.result({
  "duration": 169793600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 13
    },
    {
      "val": "100",
      "offset": 23
    },
    {
      "val": "00",
      "offset": 27
    }
  ],
  "location": "ComputerMenuSteps.iSelectHDDGB$(int,int,int)"
});
formatter.result({
  "duration": 181387500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60",
      "offset": 29
    },
    {
      "val": "00",
      "offset": 32
    }
  ],
  "location": "ComputerMenuSteps.iSelectOSVistaPremium$(int,int)"
});
formatter.result({
  "duration": 96681000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 31
    },
    {
      "val": "00",
      "offset": 34
    },
    {
      "val": " and ",
      "offset": 38
    },
    {
      "val": "5",
      "offset": 63
    },
    {
      "val": "00",
      "offset": 65
    }
  ],
  "location": "ComputerMenuSteps.iClickOnMicrosoftOffice$TotalCommander$Checkbox(int,int,String,int,int)"
});
formatter.result({
  "duration": 225279000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 20
    },
    {
      "val": "475",
      "offset": 22
    },
    {
      "val": "00",
      "offset": 26
    }
  ],
  "location": "ComputerMenuSteps.iShouldSeePrice$(int,int,int)"
});
formatter.result({
  "duration": 2029819600,
  "error_message": "java.lang.AssertionError: Not displayed expected [$1,470.00] but found [$1,475.00]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat com.nopcommerce.demo.steps.ComputerMenuSteps.iShouldSeePrice$(ComputerMenuSteps.java:88)\r\n\tat ✽.And I should see Price $1,475.00(ComputerMenu.feature:24)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ComputerMenuSteps.iClickOnADDTOCARTButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iShouldSeeTheProductHasBeenAddedToYourShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iClickOnCrossButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iMouseHoverOnShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iClickOnGOTOCART()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iShouldSeeShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iChangeQtyOfProductAndUpdateShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 29
    },
    {
      "val": "950",
      "offset": 31
    },
    {
      "val": "00",
      "offset": 35
    }
  ],
  "location": "ComputerMenuSteps.iShouldSeeTotalPriceIs$(int,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iClickOnCheckBoxOfTermsAndCondition()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iClickOnCheckoutButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iShouldSeeWelcomePleaseSignIn()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iClickOnCHECKOUTASGUEST()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iFillAllTheMandatoryDetails()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iClickToContinue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 39
    },
    {
      "val": "00",
      "offset": 41
    }
  ],
  "location": "ComputerMenuSteps.iSelectRadioButtonOfNextDayAir$(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iClickOnContinueButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iClickOnRadioButtonCreditCard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iClickOnContinues()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iSelectMasterCardFromSelectCreditCardDropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iFillAllTheCardDetails()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iClickOnContinues()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iShouldSeePaymentMethodIsCreditCard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iShouldSeeShippingMethodIsNextDayAir()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 26
    },
    {
      "val": "950",
      "offset": 28
    },
    {
      "val": "00",
      "offset": 32
    }
  ],
  "location": "ComputerMenuSteps.iShouldSeeTotalPrice$(int,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iClickOnConfirm()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iShouldSeeTextThankYou()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iShouldSeeYourOrderHasBeenSuccessfullyProcessed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iClickOnContinuesButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iShouldSeeWelcomeToOurStore()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1148167800,
  "status": "passed"
});
formatter.uri("Electronic.feature");
formatter.feature({
  "line": 1,
  "name": "Computer menu Test",
  "description": "",
  "id": "computer-menu-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5902803500,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should navigate to Cell Phone page successfully",
  "description": "",
  "id": "computer-menu-test;user-should-navigate-to-cell-phone-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover to Electronics Tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover and click on Cell Phones tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to Cell Phone page",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 87800,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicMenuSteps.iMouseHoverToElectronicsTab()"
});
formatter.result({
  "duration": 207425700,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicMenuSteps.iMouseHoverAndClickOnCellPhonesTab()"
});
formatter.result({
  "duration": 1676516900,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicMenuSteps.iShouldNavigateToCellPhonePage()"
});
formatter.result({
  "duration": 59884100,
  "status": "passed"
});
formatter.after({
  "duration": 1122563700,
  "status": "passed"
});
formatter.before({
  "duration": 2529095600,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User should add product to Cart and Place the Order Successfully",
  "description": "",
  "id": "computer-menu-test;user-should-add-product-to-cart-and-place-the-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I mouse hover to Electronics Tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I mouse hover and click on Cell Phones tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should navigate to Cell Phone page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I click on List view tab",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Nokia Lumia 1020",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see Nokia Lumia 1020",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I should see price $349.00",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I change the Qty to 2",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on Add to Cart",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should see The product is added to your shopping cart",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I click cross",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I mouse hover on Shopping cart and click on Go to Cart",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should see text Shopping cart",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I should see Qty is 2",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see price is $698.00",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on check box of terms and service",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see Welcome Please Sign In!",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 31200,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicMenuSteps.iMouseHoverToElectronicsTab()"
});
formatter.result({
  "duration": 253119100,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicMenuSteps.iMouseHoverAndClickOnCellPhonesTab()"
});
formatter.result({
  "duration": 620433500,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicMenuSteps.iShouldNavigateToCellPhonePage()"
});
formatter.result({
  "duration": 49041600,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicMenuSteps.iClickOnListViewTab()"
});
formatter.result({
  "duration": 89948400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1020",
      "offset": 23
    }
  ],
  "location": "ElectronicMenuSteps.iClickOnNokiaLumia(int)"
});
formatter.result({
  "duration": 23211178600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1020",
      "offset": 25
    }
  ],
  "location": "ElectronicMenuSteps.iShouldSeeNokiaLumia(int)"
});
formatter.result({
  "duration": 20096078500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "349",
      "offset": 20
    },
    {
      "val": "00",
      "offset": 24
    }
  ],
  "location": "ElectronicMenuSteps.iShouldSeePrice$(int,int)"
});
formatter.result({
  "duration": 25254600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    }
  ],
  "location": "ElectronicMenuSteps.iChangeTheQtyTo(int)"
});
formatter.result({
  "duration": 222058700,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicMenuSteps.iClickOnAddToCart()"
});
formatter.result({
  "duration": 93580300,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicMenuSteps.iShouldSeeTheProductIsAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 298146700,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicMenuSteps.iClickCross()"
});
formatter.result({
  "duration": 53682700,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicMenuSteps.iMouseHoverOnShoppingCartAndClickOnGoToCart()"
});
formatter.result({
  "duration": 5309230100,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicMenuSteps.iShouldSeeTextShoppingCart()"
});
formatter.result({
  "duration": 29076000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    }
  ],
  "location": "ElectronicMenuSteps.iShouldSeeQtyIs(int)"
});
formatter.result({
  "duration": 58207000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "698",
      "offset": 23
    },
    {
      "val": "00",
      "offset": 27
    }
  ],
  "location": "ElectronicMenuSteps.iShouldSeePriceIs$(int,int)"
});
formatter.result({
  "duration": 23799000,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicMenuSteps.iClickOnCheckBoxOfTermsAndService()"
});
formatter.result({
  "duration": 112504100,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicMenuSteps.iClickOnCheckout()"
});
formatter.result({
  "duration": 658689400,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicMenuSteps.iShouldSeeWelcomePleaseSignIn()"
});
formatter.result({
  "duration": 50263500,
  "status": "passed"
});
formatter.after({
  "duration": 769157300,
  "status": "passed"
});
formatter.uri("TopMenu.feature");
formatter.feature({
  "line": 1,
  "name": "Top Menu Test",
  "description": "As user I should navigate to selected menu page",
  "id": "top-menu-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User should navigate to selected menu page",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-selected-menu-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on any menu from \"\u003cTopmenu tab\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I navigate to selected menu page \"\u003cNavigate Page\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-selected-menu-page;",
  "rows": [
    {
      "cells": [
        "Topmenu tab",
        "Navigate Page"
      ],
      "line": 10,
      "id": "top-menu-test;user-should-navigate-to-selected-menu-page;;1"
    },
    {
      "cells": [
        "Computers",
        "Computers"
      ],
      "line": 11,
      "id": "top-menu-test;user-should-navigate-to-selected-menu-page;;2"
    },
    {
      "cells": [
        "Electronics",
        "Electronics"
      ],
      "line": 12,
      "id": "top-menu-test;user-should-navigate-to-selected-menu-page;;3"
    },
    {
      "cells": [
        "Apparel",
        "Apparel"
      ],
      "line": 13,
      "id": "top-menu-test;user-should-navigate-to-selected-menu-page;;4"
    },
    {
      "cells": [
        "Digital downloads",
        "Digital downloads"
      ],
      "line": 14,
      "id": "top-menu-test;user-should-navigate-to-selected-menu-page;;5"
    },
    {
      "cells": [
        "Books",
        "Books"
      ],
      "line": 15,
      "id": "top-menu-test;user-should-navigate-to-selected-menu-page;;6"
    },
    {
      "cells": [
        "Jewelry",
        "Jewelry"
      ],
      "line": 16,
      "id": "top-menu-test;user-should-navigate-to-selected-menu-page;;7"
    },
    {
      "cells": [
        "Gift Cards",
        "Gift Cards"
      ],
      "line": 17,
      "id": "top-menu-test;user-should-navigate-to-selected-menu-page;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2341747800,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User should navigate to selected menu page",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-selected-menu-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on any menu from \"Computers\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I navigate to selected menu page \"Computers\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 37600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 26
    }
  ],
  "location": "TopMenuSteps.iClickOnAnyMenuFrom(String)"
});
formatter.result({
  "duration": 609331400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 34
    }
  ],
  "location": "TopMenuSteps.iNavigateToSelectedMenuPage(String)"
});
formatter.result({
  "duration": 48676500,
  "status": "passed"
});
formatter.after({
  "duration": 790728000,
  "status": "passed"
});
formatter.before({
  "duration": 2476950900,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User should navigate to selected menu page",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-selected-menu-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on any menu from \"Electronics\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I navigate to selected menu page \"Electronics\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 26800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 26
    }
  ],
  "location": "TopMenuSteps.iClickOnAnyMenuFrom(String)"
});
formatter.result({
  "duration": 1037531300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 34
    }
  ],
  "location": "TopMenuSteps.iNavigateToSelectedMenuPage(String)"
});
formatter.result({
  "duration": 48942000,
  "status": "passed"
});
formatter.after({
  "duration": 727938600,
  "status": "passed"
});
formatter.before({
  "duration": 1768018300,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User should navigate to selected menu page",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-selected-menu-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on any menu from \"Apparel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I navigate to selected menu page \"Apparel\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 25600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apparel",
      "offset": 26
    }
  ],
  "location": "TopMenuSteps.iClickOnAnyMenuFrom(String)"
});
formatter.result({
  "duration": 1127174300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apparel",
      "offset": 34
    }
  ],
  "location": "TopMenuSteps.iNavigateToSelectedMenuPage(String)"
});
formatter.result({
  "duration": 42857600,
  "status": "passed"
});
formatter.after({
  "duration": 730568600,
  "status": "passed"
});
formatter.before({
  "duration": 2099495500,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User should navigate to selected menu page",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-selected-menu-page;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on any menu from \"Digital downloads\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I navigate to selected menu page \"Digital downloads\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 38800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Digital downloads",
      "offset": 26
    }
  ],
  "location": "TopMenuSteps.iClickOnAnyMenuFrom(String)"
});
formatter.result({
  "duration": 1259960600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Digital downloads",
      "offset": 34
    }
  ],
  "location": "TopMenuSteps.iNavigateToSelectedMenuPage(String)"
});
formatter.result({
  "duration": 31818600,
  "status": "passed"
});
formatter.after({
  "duration": 686553300,
  "status": "passed"
});
formatter.before({
  "duration": 1892797500,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User should navigate to selected menu page",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-selected-menu-page;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on any menu from \"Books\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I navigate to selected menu page \"Books\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 31000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 26
    }
  ],
  "location": "TopMenuSteps.iClickOnAnyMenuFrom(String)"
});
formatter.result({
  "duration": 1329128800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 34
    }
  ],
  "location": "TopMenuSteps.iNavigateToSelectedMenuPage(String)"
});
formatter.result({
  "duration": 39517100,
  "status": "passed"
});
formatter.after({
  "duration": 722701300,
  "status": "passed"
});
formatter.before({
  "duration": 1785516500,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User should navigate to selected menu page",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-selected-menu-page;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on any menu from \"Jewelry\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I navigate to selected menu page \"Jewelry\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 23000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jewelry",
      "offset": 26
    }
  ],
  "location": "TopMenuSteps.iClickOnAnyMenuFrom(String)"
});
formatter.result({
  "duration": 1154092200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jewelry",
      "offset": 34
    }
  ],
  "location": "TopMenuSteps.iNavigateToSelectedMenuPage(String)"
});
formatter.result({
  "duration": 31622500,
  "status": "passed"
});
formatter.after({
  "duration": 717462100,
  "status": "passed"
});
formatter.before({
  "duration": 1813294600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User should navigate to selected menu page",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-selected-menu-page;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on any menu from \"Gift Cards\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I navigate to selected menu page \"Gift Cards\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 24900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Cards",
      "offset": 26
    }
  ],
  "location": "TopMenuSteps.iClickOnAnyMenuFrom(String)"
});
formatter.result({
  "duration": 1032019300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Cards",
      "offset": 34
    }
  ],
  "location": "TopMenuSteps.iNavigateToSelectedMenuPage(String)"
});
formatter.result({
  "duration": 42541900,
  "status": "passed"
});
formatter.after({
  "duration": 696862400,
  "status": "passed"
});
});