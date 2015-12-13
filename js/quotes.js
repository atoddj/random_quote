var quotes = ["I'm tiny Rick!","Wubba-lubba-dub-dub!","School is just a bunch of people running around bumping into each other, got a guy up front says, '2 + 2,' and the people in the back say, '4.' Then the bell rings and they give you a carton of milk and a piece of paper that says you can go take a dump or something. I mean, it's not a place for smart people, Jerry. I know that's not a popular opinion, but that's my two cents on the issue.","Sometimes science is more art than science, Morty. A lot of people don't get that.","What people call 'love' is just a chemical reaction that compels animals to breed. It hits hard, Morty, then it slowly fades, leaving you stranded in a failing marriage. I did it, your parents are going to do it. Break the cycle, Morty. Rise Above. Focus on science"," I know that new situations can be intimidating. You looking around and it's all scary and different, but y'know, meeting them head-on, charging into 'em like a bull - that's how we grow as people. I'm no stranger to scary situations, I deal with them all the time.","I thought the whole point of having a dog was to feel superior.", "There's always another pawn shop", "These people are building a monument to compromise."];

function generate() {
	tweetQuote = quotes[Math.floor(quotes.length * Math.random())];
	return tweetQuote;
}

function tweetFixer(text) {
	if (text.length > 114) {
	  text = text.slice(0, 114 - 3);
	  text += "...";
	}
	tweetable = encodeURIComponent(text);
	$(".twitter-share-button").attr("href", "https://twitter.com/intent/tweet?text=" + tweetable + " - http://toddj.com");
}

$("p").text(generate);
tweetFixer(tweetQuote);
$("button").click(function(){
	$("p").text(generate);
	tweetFixer(tweetQuote);
});

