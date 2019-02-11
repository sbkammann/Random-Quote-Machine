// qoute source https://www.goodreads.com/quotes
const quotes = [["Don\'t cry because it\'s over, smile because it happened." , "Dr. Seuss"],
["I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.","Marilyn Monroe"],
["Be yourself; everyone else is already taken.", "Oscar Wilde"],
["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.","Albert Einstein"],
["So many books, so little time.","Frank Zappa"],
["Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.","Bernard M. Baruch"],
["A room without books is like a body without a soul.","Marcus Tullius Cicero"],
["You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening,And live like it's heaven on earth.","William W. Purkey"],
["You know you're in love when you can't fall asleep because reality is finally better than your dreams.","Dr. Seuss"],
["You only live once, but if you do it right, once is enough.","Mae West"],
["Be the change that you wish to see in the world.","Mahatma Gandhi"],
["In three words I can sum up everything I've learned about life: it goes on.","Robert Frost"],
["If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.","J.K. Rowling"],
["Don’t walk in front of me… I may not follow. Don’t walk behind me… I may not lead. Walk beside me… just be my friend","Albert Camus"],
["Friendship ... is born at the moment when one man says to another \"What! You too? I thought that no one but myself . . .\"","C.S. Lewis"],
["No one can make you feel inferior without your consent.","Eleanor Roosevelt"],
["If you tell the truth, you don't have to remember anything.","Mark Twain"],
["A friend is someone who knows all about you and still loves you.","Elbert Hubbard"],
["I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.","Maya Angelou"],
["Always forgive your enemies; nothing annoys them so much.","Oscar Wilde"],
["To live is the rarest thing in the world. Most people exist, that is all.","Oscar Wilde"],
["Live as if you were to die tomorrow. Learn as if you were to live forever.","Mahatma Gandhi"],
["Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.","Martin Luther King Jr."],
["I am so clever that sometimes I don't understand a single word of what I am saying.","Oscar Wilde"],
["Without music, life would be a mistake.","Friedrich Nietzsche"],
["To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.","Ralph Waldo Emerson"],
["We accept the love we think we deserve.","Stephen Chbosky"],
["Insanity is doing the same thing, over and over again, but expecting different results.","Narcotics Anonymous"],
];
const text = document.getElementById('text');
const author = document.getElementById('author');
let i = Math.floor(Math.random()*quotes.length);
text.textContent = quotes[i][0];
author.textContent = `- ${quotes[i][1]}`;

const btn = document.getElementById('new-quote');
btn.addEventListener('click', nextQuote);
let j=true;
let randNum;
function nextQuote() {

  text.classList.remove('.animated');
  i = Math.floor(Math.random()*quotes.length);
  text.textContent = quotes[i][0];
  author.textContent = `- ${quotes[i][1]}`;
  randNum= Math.floor((Math.random()*4)+1) //1-8
  text.setAttribute("class", `font${randNum} animated${j}`);

  j=!j;
}
