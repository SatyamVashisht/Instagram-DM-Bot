const puppeteer = require("puppeteer");
let username = "wager_mobile7";
let password = "********";
let idx;
async function insta(url) {
    let browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"],
        slowMo: 10,
        //    executablePath: 'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe'
    })
    let pages = await browser.pages();
    let tab = pages[0];
    await tab.goto(url, { waitUntil: "networkidle2" });
    await tab.waitForTimeout(3000);
    await tab.type('input[name="username"]', username, { delay: 100 });
    await tab.type('input[name="password"]', password, { delay: 100 });
    await tab.click('.sqdOP.L3NKy.y3zKF');//login button
    await tab.waitForTimeout(3000);
    await tab.waitForSelector('.sqdOP.yWX7d.y3zKF', { visible: true });
    await tab.click('.sqdOP.yWX7d.y3zKF');//not now
    await tab.waitForTimeout(3000);
    await tab.waitForSelector('.aOOlW.HoLwm', { visible: true });//notifications not now
    await tab.click('.aOOlW.HoLwm');//notifications not now
    await tab.waitForTimeout(3000);
    await tab.click('.KdEwV');//messages icon
    await tab.waitForTimeout(3000);
    //    await tab.waitForSelector('#fe227e159ccec',{ visible : true});
    //    let element = tab.$('#fe227e159ccec');
    //    await element.click();
    //    await tab.waitForSelector('#fe227e159ccec');
    //    await tab.click('#fe227e159ccec');

    let element = await tab.$$('._7UhW9.xLCgt.MMzan.KV-D4.fDxYl');
    let allusername = [];
    for (let i = 0; i < element.length; i += 2) {
        let elementText = await tab.evaluate(function (elem) { return elem.textContent; }, element[i]);
        allusername.push(elementText);
    }
    for (let i = 0; i < allusername.length; i++) {
        if (allusername[i] == "sidddd_1511") {
            element[2 * i].click();
        }
    }
    // await tab.waitForTimeout(3000);
    // let allbuttons = [];
    // await tab.waitForSelector('.sqdOP.yWX7d.y3zKF', { visible: true });
    // let element1 = await tab.$$('.sqdOP.yWX7d.y3zKF');
    // // console.log(element1);
    // // console.log(element1.length);
    
    // for (let i = 0; i < element1.length; i++) {
    //     let elementText1 = await tab.evaluate(function (elem) { return elem.textContent; }, element1[i]);
    //     allbuttons.push(elementText1);
    //     console.log(elementText1);
    // }
    // for (let i = 0; i < allbuttons.length; i++) {
    //     if (allbuttons[i] == "Send") {
    //         idx = i;
    //         // console.log(idx);
    //     }
    // }
    await tab.waitForTimeout(3000);
    for (let i = 0; i < 10; i++) {
        await tab.type('.Igw0E.IwRSH.eGOV_.vwCYk.ItkAi', "❤️❤️❤️");
        await tab.click('.Igw0E.IwRSH.eGOV_._4EzTm.JI_ht .sqdOP.yWX7d.y3zKF');
    }
    tab.close();
}
insta("https://www.instagram.com/");