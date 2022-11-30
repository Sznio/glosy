const scraperObject = {
      url: "https://forms.office.com/Pages/ResponsePage.aspx?id=q3sTo9ca50SS1msuGDAh-67IHe-uOIJOtGteq3pNQE5UQ1lWNFZXSjVWU05CTEI2WDU1TjBFVkk2WS4u",
      async scraper(browser) {
            let page = await browser.newPage();
            // console.log(`Navigating to ${this.url}...`);
            await page.goto(this.url);
            // Wait for the required DOM to be rendered
            await page.waitForSelector('[value="10"]');
            await page.waitForSelector('[title="Prześlij"]');

            const button = await page.$('[value="10"]');
            const submit = await page.$('[title="Prześlij"]');
            await button.click();
            await submit.click();
            return;
      },
};

module.exports = scraperObject;
