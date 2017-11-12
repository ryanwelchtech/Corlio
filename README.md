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
![demo static](/Screenshots/iPhoneX1)
![demo static](/Screenshots/iPhoneX2)
![demo static](/Screenshots/iPhoneX3)
![demo static](/Screenshots/iPhone81)
![demo static](/Screenshots/iPhone82)
![demo static](/Screenshots/iPhone83)
![demo static](/Screenshots/iPhoneSE1)
![demo static](/Screenshots/iPhoneSE2)
![demo static](/Screenshots/iPhoneSE3)
## To-do
- [x] Added App icons
- [x] Changed the UI
- [x] Made it cross platform
- [x] Support for iPhone X
- [ ] Correctly save the inputted information
- [ ] Implement the Coinbase and Poloniex APIs
- [ ] Login/Sign Up pages
- [ ] Pull to refresh to get live data
