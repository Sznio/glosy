const browserObject = require("./browser");
const scraperController = require("./pageController");

//Start the browser and create a browser instance
const main = async () => {
      let count = 0;
      while (1) {
            let browserInstance = browserObject.startBrowser();

            await scraperController(browserInstance);

            console.log(count++ + 1);
      }
};
main();

// Pass the browser instance to the scraper controller
