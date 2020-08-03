console.log("script")


const puppeteer = require("puppeteer-core");

(async  () => {
    try{
        "use strict";
        const browser = await puppeteer.launch({
            executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
            headless: false,
            defaultViewport: null
        });
        const page = await browser.newPage();
        await page.goto("https://github.com/varunkumar3091999");
        await page.screenshot({ path: "github.png", fullPage: true, omitBackground: true });
        // await page.pdf({path: "github.pdf", format: "letter"})
        // await page.pdf({
        //     path: 'hn.pdf',
        //     format: 'A4',
        //   });
        await browser.close();
        console.log("puppeteer")
    }  
    catch(error) {
        console.log(error)
    }
       
})();