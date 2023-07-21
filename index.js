const express=require('express')
const app=express()
let port= 5400

Users=[
    {
       UserId:1,
       Lastname:"Babatola",
       Firstname:"Oyindamola" ,
       Username:"Oyin2023",
       Middlename:"R",
       Email:"oyin@gmail.com",
       Age:25,
       MaritalStatus:"Single",
       Sex:"Female",
       Weight:50,
       BloodGroup:"",
       Genotype:"",
       Height:"",
       Complexion:"",
       Address:{
           City:"Iwo" ,
           Street:"Ire-Akari",
           State:"Osun State",
           Country:"Nigeria",
       },
       Phone:2348168679642,
       age:20,
       
    },
    {
        Lastname:"Babatola",
       Firstname:"Oyindamola" ,
       Middlename:"R",
       Email:"oyin@gmail.com",
       Age:"25",
       Address:"Behind BHS,IWO",
       City:"Iwo" ,
       Country:"Nigeria",
       Sex:"Male"
    }

]
BirthdayWishes=[
    {
        id:1,
        birthdayWishes:"Count your life by smiles, not tears. Count your age by friends, not years. Happy birthday!"
    },
    {
        id:2,
        birthdayWishes:"Happy birthday! I hope all your birthday wishes and dreams come true."
    },
    {
        id:3,
        birthdayWishes:"A wish for you on your birthday, whatever you ask may you receive, whatever you seek may you find, whatever you wish may it be fulfilled on your birthday and always. Happy birthday!"
    },
    {
        id:4,
        birthdayWishes:"Another adventure filled year awaits you. Welcome it by celebrating your birthday with pomp and splendor. Wishing you a very happy and fun-filled birthday!"
    },
    {
        id:5,
        birthdayWishes:"May the joy that you have spread in the past come back to you on this day. Wishing you a very happy birthday!"
    },
    {
        id:6,
        birthdayWishes:"Happy birthday! Your life is just about to pick up speed and blast off into the stratosphere. Wear a seat belt and be sure to enjoy the journey. Happy birthday!"
    },
    {
        id:7,
        birthdayWishes:"This birthday, I wish you abundant happiness and love. May all your dreams turn into reality and may lady luck visit your home today. Happy birthday to one of the sweetest people I’ve ever known."
    },
    {
        id:8,
        birthdayWishes:"May you be gifted with life’s biggest joys and never-ending bliss. After all, you yourself are a gift to earth, so you deserve the best. Happy birthday."
    },
    {
        id:9,
        birthdayWishes:"Count not the candles…see the lights they give. Count not the years, but the life you live. Wishing you a wonderful time ahead. Happy birthday."
    },
    {
        id:10,
        birthdayWishes:"Forget the past; look forward to the future, for the best things are yet to come."
    },
    {
        id:11,
        birthdayWishes:"Your birthday is the first day of another 365-day journey. Be the shining thread in the beautiful tapestry of the world to make this year the best ever. Enjoy the ride."
    },
    {
        id:12,
        birthdayWishes:"Birthdays are a new start, a fresh beginning and a time to pursue new endeavors with new goals. Move forward with confidence and courage. You are a very special person. May today and all of your days be amazing!"
    },
    {
        id:13,
        birthdayWishes:"Be happy! Today is the day you were brought into this world to be a blessing and inspiration to the people around you! You are a wonderful person! May you be given more birthdays to fulfill all of your dreams!"
    },
    {
        id:14,
        birthdayWishes:"Happy birthday! May your Facebook wall be filled with messages from people you never talk to."
    },
    {
        id:15,
        birthdayWishes:"You’re older today than yesterday but younger than tomorrow, happy birthday!"
    },
    {
        id:16,
        birthdayWishes:"Be happy! Today is the day you were brought into this world to be a blessing and inspiration to the people around you! You are a wonderful person! May you be given more birthdays to fulfill all of your dreams!"
    },
    {
        id:17,
        birthdayWishes:"Forget about the past, you can’t change it. Forget about the future, you can’t predict it. And forget about the present, I didn’t get you one. Happy birthday!"
    },
    {
        id:18,
        birthdayWishes:"Happy birthday to one of the few people whose birthday I can remember without a Facebook reminder"
    },
    {
        id:19,
        birthdayWishes:"Happy Birthday! You know, you don’t look that old. But then, you don’t look that young, either"
    },
    {
        id:20,
        birthdayWishes:"Happy birthday to someone who is smart, gorgeous, funny and reminds me a lot of myself… from one fabulous chick to another!"
    },
    {
        id:21,
        birthdayWishes:"Don’t get all weird about getting older! Our age is merely the number of years the world has been enjoying us!"
    },
    {
        id:22,
        birthdayWishes:"As you get older three things happen. The first is your memory goes, and I can’t remember the other two. Happy birthday!"
    },
    {
        id:23,
        birthdayWishes:"To quote Shakespeare: ‘Party thine ass off!"
    },
    {
        id:24,
        birthdayWishes:"You are only young once, but you can be immature for a lifetime. Happy birthday!"
    },
    {
        id:25,
        birthdayWishes:"On your birthday, I thought of giving you the cutest gift in the world. But then I realized that is not possible because you yourself are the cutest gift in the world."
    },
    {
        id:26,
        birthdayWishes:"Happy birthday to someone who is forever young!"
    },
    {
        id:27,
        birthdayWishes:"It’s birthday time again, and wow! You’re a whole year older now! So clown around and have some fun to make this birthday your best one. Happy birthday!"
    },
    {
        id:28,
        birthdayWishes:"Just wanted to be the first one to wish you happy birthday so I can feel superior to your other well-wishers. So, happy birthday!"
    },
    {
        id:29,
        birthdayWishes:"Be happy! Today is the day you were brought into this world to be a blessing and inspiration to the people around you! You are a wonderful person! May you be given more birthdays to fulfill all of your dreams!"
    },
    {
        id:30,
        birthdayWishes:"Congratulations on being even more experienced. I’m not sure what you learned this year, but every experience transforms us into the people we are today. Happy birthday!"
    },
    {
        id:31,
        birthdayWishes:"When the little kids ask how old you are at your party, you should go ahead and tell them. While they’re distracted trying to count that high, you can steal a bite of their cake! Happy birthday!"
    },
    {
        id:32,
        birthdayWishes:"Wishing you a day filled with happiness and a year filled with joy. Happy birthday!"
    },
    {
        id:33,
        birthdayWishes:"Sending you smiles for every moment of your special day…Have a wonderful time and a very happy birthday!"
    },
    {
        id:34,
        birthdayWishes:"Hope your special day brings you all that your heart desires! Here’s wishing you a day full of pleasant surprises! Happy birthday!"
    },
    {
        id:35,
        birthdayWishes:"On your birthday we wish for you that whatever you want most in life it comes to you just the way you imagined it or better. Happy birthday!"
    },
    {
        id:36,
        birthdayWishes:"Sending your way a bouquet of happiness…To wish you a very happy birthday!"
    },
    {
        id:37,
        birthdayWishes:"Wishing you a beautiful day with good health and happiness forever. Happy birthday!"
    },
    {
        id:38,
        birthdayWishes:"It’s a smile from me… To wish you a day that brings the same kind of happiness and joy that you bring to me. Happy birthday!"
    },
    {
        id:39,
        birthdayWishes:"May your birthday be filled with good memories and all the love and happiness you deserve."
    },
    
    {
        id:40,
        birthdayWishes:"On this wonderful day, I wish you the best that life has to offer! Happy birthday!"
    },
    {
        id:41,
        birthdayWishes:"Hope your special day brings you all that your heart desires! Here’s wishing you a day full of pleasant surprises! Happy birthday!"
    },
    {
        id:42,
        birthdayWishes:"I may not be by your side celebrating your special day with you, but I want you to know that I’m thinking of you and wishing you a wonderful birthday."
    },
    {
        id:43,
        birthdayWishes:"I wish for all of your wishes to come true. Happy birthday!"
    },
    {
        id:44,
        birthdayWishes:"Sending you a birthday wish wrapped with all my love. Have a very happy birthday!"
    },
    {
        id:45,
        birthdayWishes:"Happy birthday to you. From good friends and true, from old friends and new, may good luck go with you and happiness too!"
    },
    {
        id:46,
        birthdayWishes:"A simple celebration, a gathering of friends; here wishing you great happiness and a joy that never ends."
    },
    {
        id:47,
        birthdayWishes:"It’s always a treat to wish happy birthday to someone so sweet."
    },
    {
        id:48,
        birthdayWishes:"Happy birthday to one of my best friends. Here’s to another year of laughing at our own jokes and keeping each other sane! Love you and happy birthday!"
    },
    {
        id:49,
        birthdayWishes:"On this special day, I raise a toast to you and your life. Happy birthday."
    },
    {
        id:50,
        birthdayWishes:"You look younger than ever! Happy birthday!"
    },
    {
        id:51,
        birthdayWishes:"Words alone are not enough to express how happy I am you are celebrating another year of your life! My wish for you on your birthday is that you are, and will always be, happy and healthy. Don’t ever change! Happy birthday my dear."
    },
    {
        id:52,
        birthdayWishes:"I can’t believe how lucky I am to have found a friend like you. You make every day of my life so special. It’s my goal to make sure your birthday is one of the most special days ever. I can’t wait to celebrate with you!"
    },
    {
        id:53,
        birthdayWishes:"A friend like you is more priceless than the most beautiful diamond. You are not only strong and wise, but kind and thoughtful as well. Your birthday is the perfect opportunity to show you how much I care and how grateful I am to have you in my life. Happy birthday!!"
    },
    {
        id:54,
        birthdayWishes:"I hope that today, at your party, you dance and others sing as you celebrate with joy your best birthday."
    },
    {
        id:55,
        birthdayWishes:"Hope your birthday is just like you…totally freaking awesome."
    },
    {
        id:56,
        birthdayWishes:"Everybody has birthdays. You just wear yours better than most!"
    },
    {
        id:57,
        birthdayWishes:"You were born, and the world became a better place."
    },
    {
        id:58,
        birthdayWishes:"ou’re not older – you’re just more distinguished."
    },
    {
        id:59,
        birthdayWishes:"I am blessed to have a buddy like you. Happy birthday, dear friend. May your special day be loaded with happiness and love."
    },
    {
        id:60,
        birthdayWishes:"Today is your day, live it like you are the king of the world and don’t mind what others say, this day is just for you! Happy birthday."
    },
    {
        id:61,
        birthdayWishes:"Best wishes on your birthday! May you have maximum fun today, and minimum hangover tomorrow!"
    },
    {
        id:62,
        birthdayWishes:"I am blessed to have a buddy like you. Happy birthday, dear friend. May your special day be loaded with happiness and love."
    },
    {
        id:63,
        birthdayWishes:"Just like a fine wine, you seem to get better with age. Happy birthday, handsome guy!"
    },
    {
        id:64,
        birthdayWishes:"Sending some love to the most charming man in my life. You always bring the best out of me. I do not know how you do it, but I love you for that. Happy Birthday."
    },
    {
        id:65,
        birthdayWishes:"Happy Birthday to a great guy! You do so much for others. I hope you can take some time for yourself on your big day. You deserve it as much as anyone, and more than most."
    },
    {
        id:66,
        birthdayWishes:"Have the best birthday ever!"
    },
    {
        id:67,
        birthdayWishes:"Wherever the year ahead takes you, I hope it’s happy."
    },
    {
        id:68,
        birthdayWishes:"The day is all yours — have fun!"
    },
    {
        id:69,
        birthdayWishes:"Happy birthday to my ride or die. Love you bunches!"
    },
    {
        id:70,
        birthdayWishes:"Thinking of you on your birthday and wishing you everything happy."
    },
    {
        id:71,
        birthdayWishes:"Best wishes on your birthday – may you have many, many more."
    },
    {
        id:72,
        birthdayWishes:"Cheers to you for another trip around the sun!"
    },
    {
        id:73,
        birthdayWishes:"Today is about you. I can’t wait to celebrate you all day long!"
    },
    {
        id:74,
        birthdayWishes:"Happy birthday! Here’s to more life, love, and adventures with you to come!"
    },
    {
        id:75,
        birthdayWishes:"Happy Birthday Friend. May God bless you with health, wealth, and prosperity in your life. Wishing you a day that is as special in every way as you are. Many happy returns of the day!"
    },
    {
        id:76,
        birthdayWishes:"May your heart be filled with joy and your life with happiness. Happy birthday, sweetheart!"
    },
    {
        id:77,
        birthdayWishes:"I wish nothing but good things on your birthday. May the shine bright for you. Happy Birthday 🎂🎁🎉"
    },
    {
        id:78,
        birthdayWishes:"Happy Birthday to the most beautiful, graceful and wonderful woman in the world. I wish you a year full of surprises, presents, joys, and laughter. Love you."
    },
    {
        id:79,
        birthdayWishes:"May the coming year bring positive and meaningful changes to your life! Wishing you a joyful and fun-filled birthday."
    },
    {
        id:80,
        birthdayWishes:"Some people are born with beautiful faces and some are born with brilliant minds. Unfortunately, you don’t belong to either of them! LOL! Happy birthday!"
    },
    {
        id:81,
        birthdayWishes:"You deserve all the smiles in this world. May you have a birthday to remember for the rest of your life!"
    },
    {
        id:82,
        birthdayWishes:"Hope your birthday is as special as you are, dear. May all your wishes and a dream come true. Enjoy your birthday and count your blessings."
    },
    {
        id:83,
        birthdayWishes:"Happy Birthday, dear. Wishing to be there when you blow 100 candles for your birthday cake. May God bless you every day."
    },
    {
        id:84,
        birthdayWishes:"Live your life to the fullest and enjoy every moment of your life. Today is your day and I wish all the happiness may knock at your door. A very happy birthday to you. Many many happy returns of the day!"
    },
    {
        id:85,
        birthdayWishes:"Happy birthday and many many happy returns of the day! I hope this magical day brings you countless joy and laughter. Have a lovely day and a wonderful life ahead."
    },
    {
        id:86,
        birthdayWishes:"A new birthday means a fresh beginning. On this special day, I pray that it becomes a fresh start for you to pursue all your dreams and goals. Happy birthday, dear!"
    },
    {
        id:87,
        birthdayWishes:"On your birthday, may God bless you with everything that you have asked for. I hope that you achieve all the goals and successes that you desire for. Happy birthday, my lovely friend."
    },
    {
        id:88,
        birthdayWishes:"Happy birthday, my dear. As this special day emerges again, I want you to know that you are special to me and I wish you only the best things in life. May each moment pass with bliss and you stay surrounded by your well-wisher"
    },
    {
        id:89,
        birthdayWishes:"You deserve to be happy in every moment of your life. May God usher your life with never-ending peace and harmony with your loved ones! Many good wishes for your birthday!"
    },
    {
        id:90,
        birthdayWishes:"On your big day, I want you to have all the happiness you desire. May your life be full of success like the sky is full of stars. I hope you have an awesome birthday!"
    },
    {
        id:91,
        birthdayWishes:"Happy Birthday! May the upcoming year be filled with lots of opportunities and challenges. I really hope you have an amazing birthday and enjoy it to the fullest."
    },
    {
        id:92,
        birthdayWishes:"Let this wonderful day sweep you away with boundless joy and unlimited happiness. Live every moment of it. Have a beautiful birthday and I wish you many good times ahead."
    },
    {
        id:93,
        birthdayWishes:"As you step into another year of your life, I wish you all the happiness and success. A very happy birthday to you, dear. May your birthday be as awesome as you are."
    },
    {
        id:94,
        birthdayWishes:"We only get a limited number of birthdays, so enjoy each of them to the fullest! May this day make all your dreams come true and keep your heart brimming with joy. Happy birthday!"
    },
    {
        id:95,
        birthdayWishes:"Happy birthday! Hope you get everything that your heart desires."
    },
    {
        id:96,
        birthdayWishes:"Happy birthday! May every love and laughter be yours."
    },
    {
        id:97,
        birthdayWishes:"May your birthday be filled with lovely, sweet, and cherished memories. Happy Birthday!"
    },
    {
        id:98,
        birthdayWishes:"Happy Birthday, sweetness ❤️. May our love be the source of your evergreen smile!"
    },
    {
        id:99,
        birthdayWishes:"Wishing you the loveliest, most joyful birthday ever! Happy Birthday."
    },
    {
        id:100,
        birthdayWishes:"Happy Birthday, dear. May God always keep that beautiful smile on your face!"
    }
]
    app.get('/',(req,res)=>{
       console.log(BirthdayWishes)
       res.send(BirthdayWishes)
    })
    
    
    
    
    
    
    
    



app.listen(port,()=>{
    console.log(`Connected on port ${port}`);
})