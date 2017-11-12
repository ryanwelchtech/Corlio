# Welcome to Corlio!
## What is Corlio and what does it stand for?
Corlio is the combination of "Coin" and "Portfolio". The idea of this app was to develop a more up to date version of an app I made five months ago called <a href="https://github.com/rizzryan/Crypto-app">Crypto-app</a>. Check out the <a href="https://github.com/rizzryan/Crypto-app/blob/master/README.md">README.md</a> documentation of Crypto-app to understand why I developed this project and why I found it interesting.
## What is different between Crypto-app and Corlio?
When one takes a look at Corlio, s/he is immediately greeted with the UI that is much better than Crypto-app. I practically fulfilled the "future improvements" I mentioned in <a href="https://github.com/rizzryan/Crypto-app/blob/master/README.md#whats-next-for-crypto-app">What's next for Crypto-app</a>.
## How I built Corlio?
I used the wonderful <a href="https://github.com/facebook/react-native">React Native Framework</a> for JavaScript. I planned on making the app cross platform because I wanted to learn JavaScript in a unique way while branching away from Swift. Swift did not allow me to make Corlio cross platform. With the React Native Framework, I am able to write once and build on many devices, such as desktops, Android phones, Windows phones, iPhones and iPads.
## Is Corlio the next form of PayPal but for cryptocurrency?
It depends on whoever wants to fork it and make the necessary revisions to further improve Corlio. I wrote the app by myself for the majority of the 24 hour duration at Hack NJIT. At the time of writing this, I only had about 20 minutes of sleep.
## Is Corlio completed?
No, it is not. I still have yet to implement the <a href="https://www.coinbase.com">Coinbase</a> and <a href="https://www.poloniex.com">Poloniex</a>APIs. I also have to figure out how to save the current input on the page. Currently, when text is inputted into the forms and the user navigates to a new page and goes back, the page is rendered as a new page. This is not useful, especially with the portfolio portion of the app. Like in Crypto-app, I was not able to implement pull to refresh. The current fix is to force close the app, delete it from the most recently opened app tray, and open the app again so that the prices are updated.
## Screenshots
### Corlio on iPhone X
![demo static](/Screenshots/iPhoneX1.png)
![demo static](/Screenshots/iPhoneX2.png)
![demo static](/Screenshots/iPhoneX3.png)
### Corlio on iPhone 8
![demo static](/Screenshots/iPhone81.png)
![demo static](/Screenshots/iPhone82.png)
![demo static](/Screenshots/iPhone83.png)
### Corlio on iPhone SE
![demo static](/Screenshots/iPhoneSE1.png)
![demo static](/Screenshots/iPhoneSE2.png)
![demo static](/Screenshots/iPhoneSE3.png)
## Functionality of Corlio
In the screenshots above, the main screen is the screen with the data on the different coins. Portfolio allows one to multiply their amount of that coin by the value of the coin in USD to generate their value of their portfolio. The send portion is pretty straight forward with the input labels in the screenshots. Simply enter in the email address or wallet address, amount, type of coin, what the coin is being exchanged to, and the various credentials for the Coinbase and Poloniex APIs to enable sending of cryptocurrency.
## To-do
- [x] Added App icons
- [x] Changed the UI
- [x] Made it cross platform
- [x] Support for iPhone X
- [x] Update README.md with screenshots
- [ ] Correctly save the inputted information
- [ ] Implement the Coinbase and Poloniex APIs
- [ ] Login/Sign Up pages
- [ ] Pull to refresh to get live data
