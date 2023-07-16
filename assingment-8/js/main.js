


var quotes = ['Be yourself; everyone else is already taken. <br> --Oscar Wilde' , 'So many books, so little time. <br> --Frank Zappa' , 'A room without books is like a body without a soul. <br> --Marcus Tullius Cicero' , 'You only live once, but if you do it right, once is enough. <br> --Mae West' , 'Be the change that you wish to see in the world. <br> --Mahatma Gandhi' , "If you tell the truth, you don't have to remember anything. <br> --Mark Twain" , "Without music, life would be a mistake. <br> --Friedrich Nietzsche" , "A friend is someone who knows all about you and still loves you. <br> --Elbert Hubbard" , "To live is the rarest thing in the world. Most people exist, that is all. <br> --Oscar Wilde" , "Always forgive your enemies; nothing annoys them so much. <br> --Oscar Wilde"]

function newQuote(){
    var i = Number(Math.floor(Math.random() * 10))
    document.getElementById('quote').innerHTML = quotes[i]
}

