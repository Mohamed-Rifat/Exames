var quotesArray = [
    {
        Quote: "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
        author: "― Mahatma Gandhi"
    },
    {
        Quote: "“A friend is someone who knows all about you and still loves you.”",
        author: "― Elbert Hubbard"
    },
    {
        Quote: "“If you tell the truth, you don't have to remember anything”",
        author: "― Mark Twain",
    },
    {
        Quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        author: "― Dr. Seuss",
    },
    {
        Quote: "“Be the change that you wish to see in the world.”",
        author: "― Mahatma Gandhi",
    },
    {
        Quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        author: "― Albert Einstein",
    }
];
var x=0;
var generateQuote = function(){
    if (x>=quotesArray.length) {
        x=0;
        document.getElementById("quote").innerHTML = quotesArray[i].Quote;
        document.getElementById("author").innerHTML = quotesArray[i].author;
    }else{
    for(i=x;i<=x;i++){
    document.getElementById("quote").innerHTML = quotesArray[i].Quote;
    document.getElementById("author").innerHTML = quotesArray[i].author;
    console.log(i);
}
}
x=i;
}