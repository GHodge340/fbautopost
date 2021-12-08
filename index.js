/*FB POSTING BOT
TITLE ART: https://patorjk.com/software/taag/#p=display&f=Graffiti&t=Type%20Something%20
*/
console.log(`

███████ ██████   ██████  ███████ ████████ 
██      ██   ██ ██    ██ ██         ██    
█████   ██████  ██    ██ ███████    ██    
██      ██      ██    ██      ██    ██    
██      ██       ██████  ███████    ██    
                                                                                   
`)
console.log(`FACEBOOK AUTO POST\nBy: Greg Hodge`)
console.log(`\n\nINITIATING FB AUTO POST... `)
const password = require('./config').password
const email = require('./config').email
const puppeteer = require('puppeteer');

(async () => { 
    
    try {
        //CREATE 24 TITLE...
        const title = [
            "We Tap'nTil2 this Weekend",
            "Let me tell yall a joke... but first a word from our sponsor..",
            "Remember when Havensite was lit..  Offshore, Shipwreck, Fat Turtle, Starz, Platinum, Reggae Lounge, Caribean Rock ...  Make Havensight Great Again",
            "This weekend we liming Havensight!! - Make Havensight Great Again",
            "Looking for place to go this weekend?? - Make Havensight Great Again",
            "I'm an Island Boy, Just Trying to Make Havensight Great Again! So i'm partying Tap & Still this weekend..",
            "Tap & Still Party Weekend.. Make Havensight Great Again",
            "Need something to do this weekend?... Well here you go...",
            "Bring your friends, and I'll bring the vibes...  Tap & Still Party this Friday!",
            "Food Drinks Music & Fete = Tap & Still This Friday!",
            "Tis Deh Season, We Don't need any other reason... to Party!",
            "This is you weekend party reminder!! St. Thomas, Friday we outside at Tap & Still",
            "This Friday at Tap n Still, Drinks on me...  I might play that song... LOL",
            "Follow me on Tik Tok.. If I get over 1000 followers by Friday.. Imma Do Body Shots to any lady that volunteers!.. ",
            "I ready to party this weekend... Tap n Still is the move... ",
            "I'm looking forward to rocking the Dj set this Friday at Tap & Still... Do they serve Casamigos? Only one way to find out!!",
            "Keeping it simple... The cool kids coming outside this Friday at Tap & Still!",
            "This is not financial advice, but if I had some extra money and wanted to live a little... I'd go to Tap & Still on Friday Night.. ",
            "The most interesting Dj in the world will be at Tap & Still, this Friday",
            "The Dj that coined the phrase - The roof is on fire!... Will be at Tap & Still.. ",
            "The Dj that Lil Wayne told - Go Dj! ... Will be at Tap & Still, this Friday..",
            "The Dj that stopped the music, but kept club dancing.. Will be at Tap & Still...",
            "The most interesting Dj in the world will be at Tap & Still...",
            "Who's Celebrating a Birthday this week?.. Come thru to Tap & Still Havensight this Weekend!",
            "This weekend let's go outside and lime at Tap & Still"
        ]
        let x = 0
        const hour = 3600000
        const hour2 = 7200000
        const hour3 = 10800000
        const hour6 = 21600000
        const hour10 = 36000000
        console.log(`THERE ARE ${title.length + 1} STATUS POSTS IN TOTAL\n\nFB AUTOPOST WILL POST 1 POST EVERY ${hour3 / hour} HRS`)
        const browser = await puppeteer.launch({
            headless: false
              //slowMo: 100
         }) 
        const page = await browser.newPage(); 
        await page.goto('https://m.facebook.com', {    
            waitUntil: 'networkidle2',  });  
        await page.waitForSelector("#m_login_email")
        await page.type("#m_login_email", email)
        await page.type("#m_login_password", password)
        await page.click(`[type="button"]`)
        await page.waitForNavigation(1000000)//WAIT FOR AUTH

        await page.waitForSelector("#MComposer")
        await page.click("#MComposer")
        await page.waitForSelector("#uniqid_1")
        await page.click("#uniqid_1")
        
        //SENTENCES...
        let sent = "Roses are Red, Don't Netflix & Chill, Friday coming we going Tap n Still.. "
        for ( let i = 0; i < sent.length; i++){
            await page.keyboard.press(sent[i])
        } 

        await page.keyboard.press('Enter')
        await page.keyboard.press('Enter')

        let sent1  = "This Friday Dec 10th let's have some fun by Tap & Still!!"
        for ( let i = 0; i < sent1.length; i++){
            await page.keyboard.press(sent1[i])
        } 

        await page.keyboard.press('Enter')
        
        let sent3 = "Music By: Dj Avalanche"
        for ( let i = 0; i < sent3.length; i++){
            await page.keyboard.press(sent3[i])
        } 

        await page.keyboard.press('Enter')

        let sent4 = "Admission: Free"
        for ( let i = 0; i < sent4.length; i++){
            await page.keyboard.press(sent4[i])
        } 

        await page.keyboard.press('Enter')
        
        let sent5 = "Vibes: Unlimited"
        for ( let i = 0; i < sent5.length; i++){
            await page.keyboard.press(sent5[i])
        } 

        await page.keyboard.press('Enter')

        let sent6 = "Drinks: Flowing"

        for ( let i = 0; i < sent6.length; i++){
            await page.keyboard.press(sent6[i])
        } 

        await page.keyboard.press('Enter')

        let sent7 = "Venue: Tap & Still"

        for ( let i = 0; i < sent7.length; i++){
            await page.keyboard.press(sent7[i])
        } 

        await page.keyboard.press('Enter')

        let sent8 = "Location: Havensite"

        for ( let i = 0; i < sent8.length; i++){
            await page.keyboard.press(sent8[i])
        } 

        await page.keyboard.press('Enter')
        await page.keyboard.press('Enter')

        let sent9 = "See You There!!"

        for ( let i = 0; i < sent9.length; i++){
            await page.keyboard.press(sent9[i])
        } 

        await page.keyboard.press('Enter')

        const [fileChooser] = await Promise.all([
            page.waitForFileChooser(),
            page.click("#structured_composer_form > div._6it-._6itw > div > button:nth-child(1) > div > div._4g34._6ity"), // some button that triggers file selection
          ]);
          
          await fileChooser.accept(['/home/ghodge340/WebDev/fbautopost/263976899_2067381706747253_7186749718951994763_n.jpg']);

        await page.click("#composer-main-view-id > div.acw > div > div > button")

        console.log(`STATUS POST #${x} of ${title.length}` )
        
        setTimeout(() => {
            repeat();
        }, hour3);
        
        async function repeat(){
            try {
                await page.waitForSelector("#MComposer")
        await page.click("#MComposer")
        await page.waitForSelector("#uniqid_1")
        await page.click("#uniqid_1")
        
        //TITLE
        for ( let i = 0; i < title[x].length; i++){
            await page.keyboard.press(sent[i])
            x++;
        } 

        await page.keyboard.press('Enter')
        await page.keyboard.press('Enter')
        
        //SENTENCES
        let sent1  = "This Friday Dec 10th let's have some fun by Tap & Still!!"
        for ( let i = 0; i < sent1.length; i++){
            await page.keyboard.press(sent1[i])
        } 

        await page.keyboard.press('Enter')
        
        let sent3 = "Music By: Dj Avalanche"
        for ( let i = 0; i < sent3.length; i++){
            await page.keyboard.press(sent3[i])
        } 

        await page.keyboard.press('Enter')

        let sent4 = "Admission: Free"
        for ( let i = 0; i < sent4.length; i++){
            await page.keyboard.press(sent4[i])
        } 

        await page.keyboard.press('Enter')
        
        let sent5 = "Vibes: Unlimited"
        for ( let i = 0; i < sent5.length; i++){
            await page.keyboard.press(sent5[i])
        } 

        await page.keyboard.press('Enter')

        let sent6 = "Drinks: Flowing"

        for ( let i = 0; i < sent6.length; i++){
            await page.keyboard.press(sent6[i])
        } 

        await page.keyboard.press('Enter')

        let sent7 = "Venue: Tap & Still"

        for ( let i = 0; i < sent7.length; i++){
            await page.keyboard.press(sent7[i])
        } 

        await page.keyboard.press('Enter')

        let sent8 = "Location: Havensite"

        for ( let i = 0; i < sent8.length; i++){
            await page.keyboard.press(sent8[i])
        } 

        await page.keyboard.press('Enter')
        await page.keyboard.press('Enter')

        let sent9 = "See You There!!"

        for ( let i = 0; i < sent9.length; i++){
            await page.keyboard.press(sent9[i])
        } 

        await page.keyboard.press('Enter')

        const [fileChooser] = await Promise.all([
            page.waitForFileChooser(),
            page.click("#structured_composer_form > div._6it-._6itw > div > button:nth-child(1) > div > div._4g34._6ity"), // some button that triggers file selection
          ]);
          
          await fileChooser.accept(['/home/ghodge340/WebDev/fbautopost/263976899_2067381706747253_7186749718951994763_n.jpg']);

        await page.click("#composer-main-view-id > div.acw > div > div > button")
        
        console.log(`STATUS POST #${x} of ${title.length}` )

        //POST COUNT
        if (x === title.length){
            console(`POSTED ALL STATUSES... \nENDING ALGORITHM..`)
            await browser.close();
        }

        else if ( x < title.length){
            setTimeout(() => {
                rinse();
            }, hour3);
        }


        async function rinse(){
            try {
                await page.waitForSelector("#MComposer")
                await page.click("#MComposer")
                await page.waitForSelector("#uniqid_1")
                await page.click("#uniqid_1")
                
                //TITLE
                for ( let i = 0; i < title[x].length; i++){
                    await page.keyboard.press(sent[i])
                    x++;
                } 
        
                await page.keyboard.press('Enter')
                await page.keyboard.press('Enter')
                
                //SENTENCES
                let sent1  = "This Friday Dec 10th let's have some fun by Tap & Still!!"
                for ( let i = 0; i < sent1.length; i++){
                    await page.keyboard.press(sent1[i])
                } 
        
                await page.keyboard.press('Enter')
                
                let sent3 = "Music By: Dj Avalanche"
                for ( let i = 0; i < sent3.length; i++){
                    await page.keyboard.press(sent3[i])
                } 
        
                await page.keyboard.press('Enter')
        
                let sent4 = "Admission: Free"
                for ( let i = 0; i < sent4.length; i++){
                    await page.keyboard.press(sent4[i])
                } 
        
                await page.keyboard.press('Enter')
                
                let sent5 = "Vibes: Unlimited"
                for ( let i = 0; i < sent5.length; i++){
                    await page.keyboard.press(sent5[i])
                } 
        
                await page.keyboard.press('Enter')
        
                let sent6 = "Drinks: Flowing"
        
                for ( let i = 0; i < sent6.length; i++){
                    await page.keyboard.press(sent6[i])
                } 
        
                await page.keyboard.press('Enter')
        
                let sent7 = "Venue: Tap & Still"
        
                for ( let i = 0; i < sent7.length; i++){
                    await page.keyboard.press(sent7[i])
                } 
        
                await page.keyboard.press('Enter')
        
                let sent8 = "Location: Havensite"
        
                for ( let i = 0; i < sent8.length; i++){
                    await page.keyboard.press(sent8[i])
                } 
        
                await page.keyboard.press('Enter')
                await page.keyboard.press('Enter')
        
                let sent9 = "See You There!!"
        
                for ( let i = 0; i < sent9.length; i++){
                    await page.keyboard.press(sent9[i])
                } 
        
                await page.keyboard.press('Enter')
        
                const [fileChooser] = await Promise.all([
                    page.waitForFileChooser(),
                    page.click("#structured_composer_form > div._6it-._6itw > div > button:nth-child(1) > div > div._4g34._6ity"), // some button that triggers file selection
                  ]);
                  
                  await fileChooser.accept(['/home/ghodge340/WebDev/fbautopost/263976899_2067381706747253_7186749718951994763_n.jpg']);
        
                await page.click("#composer-main-view-id > div.acw > div > div > button")
                
                console.log(`STATUS POST #${x} of ${title.length}` )
                
                //POST COUNT
                if (x === title.length){
                    console(`POSTED ALL STATUSES... \nENDING ALGORITHM..`)
                    await browser.close();
                }

                else if ( x < title.length){ 
                    setTimeout(() => {
                        repeat();
                    }, hour3);
                }
           

            } catch (error) {
                
            }
        }

            } catch (error) {
                console.error(error)
            }
        }
       
    } catch (error) {
        console.error(error)
    }
}) ()
