// Data
// const img = '/img/profile(1562 x 1562).jpg';
const img = '/img/profile_250x250.jpg';
const name = 'Jexcode';
const email = 'bialakayode@gmail.com';
const hngLinkUrl = "https://www.hng.tech/learn";
const hngLinkText = 'HNG Learn';
const keywordLinkUrl = 'https://www.keyword.dog';
const keywordLinkText = 'Keyword Dog';
const scrapeanywebLinkUrl = 'https://www.scrapeanyweb.site';
const scrapeanywebLinkText = 'Scrapeany Website';



const slackDisplayName = document.querySelector('[data-testid="slackDisplayName"]')
const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
const currentDay = document.querySelector('[data-testid="currentDay"]');
const slackEmail = document.querySelector('[data-testid="slackEmail"]');
const slackProfilePicture = document.querySelector('[data-testid="slackProfilePicture"]');


const hngLink= document.querySelector('[data-testid="hngLink"]');
const keywordLink = document.querySelector('[data-testid="keywordLink"]');
const scrapeanywebLink = document.querySelector('[data-testid="scrapeanywebLink"]');


// Slack Display Name
slackDisplayName.innerText = name;

// Slack Email
slackEmail.innerText = email;

// Slack Profile Picture
slackProfilePicture.src = img;
slackProfilePicture.alt = name;
slackProfilePicture.title = name;

// Date & Time
function updateClock() {
  const now = new Date();

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  const dayName = days[now.getDay()];

  const day = now.getDate();
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const formattedTime = ` ${hours}: ${minutes}:${seconds}`;
  
  currentTimeUTC.innerText = `${formattedTime}`;
  currentDay.innerText =` ${dayName}`
}

setInterval(updateClock, 1000);
updateClock();


// links
hngLink.innerText = hngLinkText;
hngLink.href = hngLinkUrl;
keywordLink.innerText = keywordLinkText;
keywordLink.href = keywordLinkUrl;
scrapeanywebLink.innerText = scrapeanywebLinkText;
scrapeanywebLink.href = scrapeanywebLinkUrl;

