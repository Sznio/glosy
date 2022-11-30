let count = 0;
const main = async () => {
      while (1) {
            const browserObject = require("./browser");
            const scraperController = require("./pageController");

            //Start the browser and create a browser instance

            let browserInstance = browserObject.startBrowser();

            // Pass the browser instance to the scraper controller
            await scraperController(browserInstance);
            console.log(count++ + 1);
      }
};
main();
