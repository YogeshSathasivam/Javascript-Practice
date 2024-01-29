const quotes = [
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The best way to predict the future is to create it. - Peter Drucker",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "Whatever you are, be a good one. - Abraham Lincoln",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "Don't count the days, make the days count. - Muhammad Ali",
    "The only limit to our impact is our imagination and commitment. - Tony Robbins",
    "If you want to achieve greatness stop asking for permission. - Anonymous",
    "The future belongs to those who prepare for it today. - Malcolm X",
    "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
    "It is never too late to be what you might have been. - George Eliot",
    "Success is not just about making money. It's about making a difference. - Unknown",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "The only thing standing between you and your goal is the story you keep telling yourself. - Jordan Belfort",
    "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteText = document.getElementById("quote-text");
    quoteText.textContent = quotes[randomIndex];
}

generateQuote();