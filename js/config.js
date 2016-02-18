var config = {
    lang: 'en',
    time: {
        timeFormat: 12,
        displaySeconds: true,
        digitFade: false,
    },
    weather: {
        //change weather params here:
        //units: metric or imperial
        params: {
            q: 'Norristown',
            units: 'imperial',
            // if you want a different lang for the weather that what is set above, change it here
            lang: 'en',
            APPID: 'OPENWEATHER_API_KEY'
        }
    },
    compliments: {
        interval: 30000,
        fadeInterval: 4000,
        morning: [
            'Good morning, handsome!',
            'Enjoy your day!',
            'How was your sleep?',
            "A true hero isn't measured by the size of his strength, but by the strength of his heart.<br>―Hercules",
            "The past can hurt. But the way I see it, you can either run from it, or learn from it.<br>―The Lion King",
            "If you keep on believing the dreams that you wish will come true.<br>―Cinderella",
            "Some people care too much ... I think it's called love.<br>―Winnie the Pooh",
            "Just because I cannot see it, doesn't mean I can't believe it.<br>―A Nightmare Before Christmas",
            "The way to get started is to quit talking and begin doing.<br>―Walt Disney",
            "If you can't say somethin' nice, don't say nothin' at all!<br>―Bambi",
            "I'd rather die tomorrow than live a hundred years without you.<br>―Pocahontas",
            "I never look back, darling. It distracts me from the now.<br>―The Incredibles",
            "Don't just fly, soar.<br>―Dumbo"
        ],
        afternoon: [
            "‐One<br>‑Two<br>‒Three<br>–Four<br>—Five<br>−Six<br>⸗Seven"
        ],
        evening: [
            "‐One<br>‑Two<br>‒Three<br>–Four<br>—Five<br>−Six<br>⸗Seven"
        ]
    },
    calendar: {
        maximumEntries: 10, // Total Maximum Entries
		displaySymbol: true,
		defaultSymbol: 'calendar', // Fontawsome Symbol see http://fontawesome.io/cheatsheet/
        urls: [
		{
			symbol: 'male', 
			url: "CALENDAR_URL_1"
		},
		{
			symbol: 'female',
			url: "CALENDAR_URL_2"
		}//,
		// {
			// symbol: 'circle',
			// url: "CALENDAR_URL_3",
		// }
		]
    },
    news: {
        feed: 'http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml'
    }
}
