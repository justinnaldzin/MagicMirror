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
            "A true hero isn't measured by the size of his strength, but by the strength of his heart.<br>‒Hercules",
            "The past can hurt. But the way I see it, you can either run from it, or learn from it.<br>‒The Lion King",
            "If you keep on believing the dreams that you wish will come true.<br>‒Cinderella",
            "Some people care too much ... I think it's called love.<br>‒Winnie the Pooh",
            "Just because I cannot see it, doesn't mean I can't believe it.<br>‒A Nightmare Before Christmas",
            "The way to get started is to quit talking and begin doing.<br>‒Walt Disney",
            "If you can't say somethin' nice, don't say nothin' at all!<br>‒Bambi",
            "I'd rather die tomorrow than live a hundred years without you.<br>‒Pocahontas",
            "I never look back, darling. It distracts me from the now.<br>‒The Incredibles",
            "Don't just fly, soar.<br>‒Dumbo"
        ],
        afternoon: [
            'Hello, beauty!',
            'Looking good!',
            'Hey buddy!',
            'Sup',
            "All our dreams can come true if we have the courage to pursue them.<br>‒Walt Disney",
            "Happiness is a state of mind. It's just according to the way you look at things.<br>‒Walt Disney",
            "I give myself very good advice, but I very seldom follow it.<br>‒Alice In Wonderland",
            "When you got your pals, you got all you need.<br>‒Oliver & Company",
            "Always let your conscience be your guide.<br>‒Pinocchio",
            "Giving up is for rookies.<br>‒Hercules",
            "Life's not a spectator sport. If watchin' is all you're gonna do, then you're gonna watch your life go by without ya.<br>‒The Hunchback of Notre Dame",
            "A lie keeps growing and growing until it's as plain as the nose on your face.<br>‒Pinocchio",
            "A single grain of rice can tip the scale. One man may be the difference between victory and defeat.<br>‒Mulan",
            "In every job that must be done there is an element of fun.<br>‒Mary Poppins"
        ],
        evening: [
            "Sometimes the smallest things take up the most room in your heart.<br>‒Winnie The Pooh",
            "The things that make me different are the things that make me.<br>‒Winnie The Pooh",
            "Today is a good day to try.<br>‒The Hunchback of Notre Dame",
            "Like so many things, it is not what is outside, but what is inside that counts.<br>‒Aladdin",
            "The flower that blooms in adversity is the most rare and beautiful of all.<br>‒Mulan",
            "Believe you can, then you will.<br>‒Mulan",
            "If you hear music, dance.<br>‒Sleeping Beauty",
            "You're never too old to wish upon a star.<br>‒The Princess and the Frog",
            "The path to your destiny lies within the magic of your heart.<br>‒Tangled",
            "You are braver than you believe, stronger than you seem, and smarter than you think.<br>‒Winnie The Pooh",
            "Even miracles take a little time.<br>‒Cinderella"
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
