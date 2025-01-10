import React, {useEffect, useRef, useState} from 'react';
import ReactPlayer from 'react-player';
import {
    Bell,
    Menu,
    Search,
    X,
    Bookmark,
    Share2,
    MessageCircle,
    LogOut,
    Settings,
    User,
    MessageSquare, Calendar, Video
} from 'lucide-react';

// SVG Background Component
const WavyBackground = () => (
    <svg className="absolute top-0 left-0 w-full h-64 -z-10" viewBox="0 0 375 200">
        <path
            d="M0 0 C 100 20, 200 40, 375 0 L375 200 L0 200 Z"
            fill="rgb(243 244 246)"
        />
    </svg>
);

const SecurityLoginIllustration = () => (
    <svg className="w-64 h-64 mx-auto" viewBox="0 0 400 400">
        {/* Background circle */}
        <circle cx="200" cy="200" r="150" fill="#f3f4f6"/>

        {/* Person */}
        <g transform="translate(150, 100)">
            <circle cx="50" cy="40" r="25" fill="#4F46E5"/>
            <rect x="25" y="70" width="50" height="80" rx="25" fill="#4F46E5"/>
            <rect x="35" y="90" width="30" height="50" rx="5" fill="#fff" stroke="#4F46E5" strokeWidth="2"/>
        </g>

        {/* Floating security elements */}
        <g transform="translate(100, 120)">
            <circle cx="0" cy="0" r="15" fill="#4ADE80"/>
            <path d="M-8 0 L0 8 L8 -8" stroke="white" strokeWidth="2" fill="none"/>
        </g>
        <g transform="translate(280, 150)">
            <rect x="-15" y="-15" width="30" height="30" rx="8" fill="#3B82F6"/>
            <path d="M-5 0 L0 5 L10 -10" stroke="white" strokeWidth="2" fill="none"/>
        </g>
        <g transform="translate(180, 280)">
            <circle cx="0" cy="0" r="15" fill="#F59E0B"/>
            <rect x="-6" y="-6" width="12" height="12" rx="2" fill="white"/>
        </g>
    </svg>
);

const MobileApp = () => {
    const [currentScreen, setCurrentScreen] = useState('login');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showQuotePopup, setShowQuotePopup] = useState(false);
    const [currentQuote, setCurrentQuote] = useState('');

    useEffect(() => {
        console.log('MyComponent rendered');
    }, []);

    //
    const useFilteredContent = (items, selectedCategory, searchQuery, searchKeys) => {
        return items.filter(item => {
            const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
            const matchesSearch = !searchQuery ? true :
                searchKeys.some(key => {
                    if (key === 'category') {
                        return categories.find(cat => cat.id === item.category)?.name.toLowerCase().includes(searchQuery.toLowerCase());
                    }
                    return item[key]?.toLowerCase().includes(searchQuery.toLowerCase());
                });
            return matchesCategory && matchesSearch;
        });
    };

    // Data
    const categories = [
        {id: 'inspiration', name: 'Inspiration', icon: '✨'},
        {id: 'faith', name: 'Faith', icon: '🕊️'},
        {id: 'business', name: 'Business', icon: '💼'},
        {id: 'motivation', name: 'Motivation', icon: '🎯'},
        {id: 'leadership', name: 'Leadership', icon: '👥'},
        {id: 'personal', name: 'Personal Growth', icon: '🌱'},
    ];

    const inspirationalQuotes = [
            {
                "text": "Have faith in yourself, in your courage, and strength. You're a fighter, and you've got this. To acquire money requires valour, to keep money requires prudence, and to spend money well is an art. You don't need to forget what hurt you. Just remember it taught you a valuable lesson. If you have time to whine, then you have time to find a solution. Don't compare yourself with someone else. You only live once. Be faithful. The Lord will review your plans and make you happy. Blessed Sunday",
                "date": "27/10/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "personal",
                "subcategories": ["motivation", "inspiration"]
            },
            {
                "text": "Don't feel bad that your kid doesn't like you today because you said no. Your job isn't to be liked. Your job is to raise a decent, kind, responsible human.",
                "date": "27/10/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "personal",
                "subcategories": ["leadership", "parenting"]
            },
            {
                "text": "Life becomes fulfilling when you find joy in giving more than receiving.",
                "date": "27/10/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "personal",
                "subcategories": ["inspiration", "motivation"]
            },
            {
                "text": "Dear God, please set me free from bitterness and anger.",
                "date": "27/10/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "faith",
                "subcategories": ["prayer", "personal growth"]
            },
            {
                "text": "Permanence, perseverance, and persistence in spite of all obstacles, discouragement, and impossibilities: It is this that in all things distinguished the strong soul from the weak. It's up to you today to start making healthy choices. Not choices that are just healthy for your body, but healthy for your mind and soul. Don't forget to take notice of how far you have come. Get a new perspective. People change. Life goes on. The Lord will guide you. Nice day",
                "date": "28/10/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "motivation",
                "subcategories": ["personal development", "inspiration"]
            },
            {
                "text": "In every situation, by prayer and petition, with thanksgiving, present your requests to God. Philippians 4:6",
                "date": "28/10/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "Philippians 4:6",
                "category": "faith",
                "subcategories": ["bible verse", "prayer"]
            },


            {
                "text": "Heavenly Father, thank You that I can pray to You at any time.",
                "date": "28/10/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "faith"
            },
            {
                "text": "Our days can seem dark, and the fulfilment of God's promises hidden. But as we cling to Him by faith, one day all His `great and precious promises` will be fulfilled (2 Peter 1:4). A beautiful new day awaits.",
                "date": "29/10/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "2 Peter 1:4",
                "category": "faith"
            },
            {
                "text": "Stay positive. Forgive others. Invest in yourself. Trust your instincts. Lead with an open heart. Don't let others ruin your day. Do things that bring you joy. Be of service to humanity. Find your soul tribe and love yourself. Be grateful for all you have while you pursue all you want. Failure defeats losers but inspires winners. Look back at how far you've come and be brave enough to go after what you want. The Lord will instill you with his grace and glory. Nice day",
                "date": "30/10/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "motivation"
            },
            {
                "text": "To exist is to change, to change is to mature, to mature is to go on creating oneself endlessly. Experience is the name so many give to their mistakes. Do all things with kindness, especially to those who hurt you. Don't get mad, Don't get even, Do better, much better, rise above and become so engulfed in your own success that you forget it ever happened.Life is short, the world is wide, the sooner you start fulfilling your purpose the better. The Lord will support you. Nice day",
                "date": "31/10/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "personal"
            },
            {
                "text": "Being thankful for the ordinary things will help you realize that they are, in fact, extraordinary. There are no shortcuts to living your greatest life and becoming your best self. If they walk away, let them go. If they don't value you enough to work through the hard times, they don't deserve all the good times. The best thing you can do is to just breathe and be always. Your shining moment is already on its way. The Lord will support you. Happy new month.",
                "date": "01/11/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "inspiration"
            },
            {
                "text": "Whoever wants to become great among you must be your servant. Matthew 20:26",
                "date": "02/11/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "Matthew 20:26",
                "category": "leadership"
            },


            {
                "text": "You've come to believe that all your past failure and frustration were actually laying the foundation for the understanding that has created the new level of living you now enjoy. A sense of blessedness comes from a change of heart, not from more blessings. When you're good, you tell them. When you're great, they tell you. And you can't be great until you're better than good. Radiate the energy you want to receive. The Lord will honour you. Nice day.",
                "date": "02/11/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "motivation"
            },
            {
                "text": "You will keep in perfect peace those whose minds are steadfast, because they trust in you. Isaiah 26:3",
                "date": "02/11/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "Isaiah 26:3",
                "category": "faith"
            },
            {
                "text": "As the Lord brings your desires towards you, sometimes you must take the path it lays out for you so that you can be in the right place to receive it. Find other people who are going up the mountain and help each other to climb. Failures happen, and the setbacks happen, keep going because eventually victories happen, and accomplishments happen. Overthinking makes you feel like you are stuck. Work harder, work smarter. The Lord will reward you. Nice day",
                "date": "27/11/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "motivation"
            },
            {
                "text": "Your beliefs become your thoughts, your thoughts become your words, your words become your actions, your actions become your habits, your habits become your values, and your values become your destiny. You will never have this day again, so make it count! Know who you are and know it's enough. Hope is not found in the mind. It comes from the heart and is fueled by the soul. Some steps need to be taken alone. The Lord will support you. Nice day",
                "date": "28/11/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "personal"
            },
            {
                "text": "Collaboration and cooperation will beat competition every time. Think abundantly, Speak authentically, Serve willingly, You have enough and you are enough. We all have dreams, but in order to make dreams come into reality, it takes an awful lot of determination, dedication, self-discipline, and effort. Like the morning sun, you too shall rise and continue to shine. Trust your vibes; energy doesn't lie. The Lord will help you. Nice day",
                "date": "21/11/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "leadership"
            },
            {
                "text": "Your purpose in life is to find your purpose and give your whole heart and soul to it. Happiness doesn't just happen, it's a choice you make at every moment. Stop believing in your excuses and start believing in your ability to get it done. A right is not what someone gives you; it's what no one can take from you. Sometimes people come into your life just to teach you how to let go. Everything is hard before it is easy. The Lord's Mercies will endure in your life. Nice weekend.",
                "date": "22/11/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "inspiration"
            },
            {
                "text": "Faithful God, thank You for Your promise to remain with me no matter what I face, and for the joyful hope of living with You forever.",
                "date": "23/11/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "faith"
            },
            {
                "text": "Your weaknesses don't deserve your attention; your strengths do. Things always work out, even when you don't have them figured out, as you start to walk out on the way, the way appears. Never put off being happy, enjoy your life right now, just as it is. Never love something so much that you can't let go of it. Pain doesn't just show up in your lives for no reason. It's a sign that something in your life needs to change. The Lord will establish you. Nice day",
                "date": "23/11/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "personal"
            },
            {
                "text": "He has sent me to . . . proclaim freedom for the captives, and release from darkness for the prisoners. Isaiah 61:1",
                "date": "24/11/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "Isaiah 61:1",
                "category": "faith"
            },
            {
                "text": "All your strengths must come from within because no external source can provide it. Give yourself permission to step away from anything or anyone that makes you feel stressed. Glory in your small dreams, because inside them, something bigger may emerge. Sometimes, you have to lose yourself to really find yourself. No one can take away how far you've come. Earn with your mind, not your time. The Lord will inspire you. Blessed Sunday",
                "date": "24/11/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "motivation"
            },
            {
                "text": "Because God is mighty and because He loves us, we too can still ourselves before Him, trusting that He will be our ever-present help in times of trouble.",
                "date": "17/11/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "faith"
            },
            {
                "text": "Enter his gates with thanksgiving and his courts with praise; give thanks to God and praise his name. Psalm 100:4",
                "date": "25/11/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "Psalm 100:4",
                "category": "faith"
            },
            {
                "text": "The greater the level of calmness of your mind, the greater your peace of mind, the greater your ability to enjoy a happy and joyful life. Life has a way of making you repeat the same patterns until you choose to break the cycle. If you can have faith in yourself, you can achieve anything. Make it a rule of life never to regret and never to look back. Simplicity is the ultimate reasoning. Be patient with yourself! The Lord will restore unto you the years that the locust hath eaten. Nice week.",
                "date": "25/11/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "motivation"
            },
            {
                "text": "Embrace uncertainty. Some of the most beautiful chapters in our lives won't have a title until much later. In the absence of clearly defined goals, you become strangely loyal to performing daily acts of trivia. You will never always be motivated, you have to learn to be disciplined. Discipline is the decision. You are allowed to define success for yourself. Stay strong, even the darkest nights give way to beautiful sunrises. The Lord will guide you. Good morning",
                "date": "26/11/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "inspiration"
            },
            {
                "text": "As the Lord brings your desires towards you, sometimes you must take the path it lays out for you so that you can be in the right place to receive it. Find other people who are going up the mountain and help each other to climb. Failures happen, and the setbacks happen, keep going because eventually victories happen, and accomplishments happen. Overthinking makes you feel like you are stuck. Work harder, work smarter. The Lord will reward you. Nice day",
                "date": "27/11/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "motivation"
            },
            {
                "text": "Your beliefs become your thoughts, your thoughts become your words, your words become your actions, your actions become your habits, your habits become your values, and your values become your destiny. You will never have this day again, so make it count! Know who you are and know it's enough. Hope is not found in the mind. It comes from the heart and is fueled by the soul. Some steps need to be taken alone. The Lord will support you. Nice day",
                "date": "28/11/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "personal"
            },
            {
                "text": "Dear God, please help me give thanks even when life is hard",
                "date": "30/11/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "faith"
            },
            {
                "text": "As the apostle Paul wrote, may God help us `give thanks in all circumstances` (1 Thessalonians 5:18). Whether we're facing a crisis or have just come through one, a grateful response honours Him and helps keep our faith afloat. Daniel prayed, giving thanks to his God, just as he had done before. Daniel 6:10",
                "date": "30/11/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "1 Thessalonians 5:18, Daniel 6:10",
                "category": "faith"
            },
            {
                "text": "Remember how far you've come, not just how far you have to go. You are not where you want to be, but neither are you where you used to be. Adversity will try to knock you off your square. Be a circle; spin and move. Love your partner harder than their insecurities. Love them deeper than their deepest fears, and prove to them that love conquers all. You rarely win, but sometimes you do. Mountains are moveable! The Lord will manifest his glory in your life. Nice day",
                "date": "30/11/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "inspiration"
            },
            {
                "text": "Lord God, I confess I don't always understand what is going on, but I trust that the way You are building my character will enable me to know, love and serve You in a far deeper way.",
                "date": "01/12/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "faith"
            },
            {
                "text": "Inaction breeds doubt and fear. Action breeds confidence and courage. If you want to conquer fear, do not sit home and think about it. Go out and get busy. Remind yourself that even the little steps will carry you to the finish line. No task is too small when it comes to reaching for your dreams. If it's in your mind, it's worth taking the risk. Respect your haters. They're the ones who think you're better than them. The Lord will guide you. Happy new month.",
                "date": "01/12/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "motivation"
            },

            {
                "text": "Barnabas encouraged them all to remain true to the Lord with all their hearts. Acts 11:23",
                "date": "02/12/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "Acts 11:23",
                "category": "faith"
            },
            {
                "text": "Dear God, please help me to be an encouragement to someone today.",
                "date": "02/12/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "faith"
            },
            {
                "text": "Fill your life with lots of experiences not lots of things. Have incredible stories to tell not incredible clutter in your closets. You are allowed to cut off anyone who is unhealthy for your inner peace. Remember, your words can burn forests down or plant beautiful gardens. When you concern yourself with others, you naturally develop a sense of confidence.Only thing certain is uncertainty! Hope is passion for what is possible. The Lord will speak to reassure you. Nice week",
                "date": "02/12/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "personal"
            },
            {
                "text": "Dear God, You know me best and love me most. I'm so grateful for Your hand on my life.",
                "date": "03/12/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "faith"
            },
            {
                "text": "You don't develop courage by being happy every day. You develop it by surviving difficult times and challenging adversity. If the plan doesn't work, change the plan, but never the goal. Today's struggles lead to tomorrow's success. Do the best you can do today, then do better tomorrow. You become what you think about all day long. Be kind, even though you've had a rough day. There is no gift like the present. Be firm! The Lord will support you. Nice day",
                "date": "03/12/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "motivation"
            },
            {
                "text": "Loving God, thank You for sending Your Son into this world to clean up our mess.",
                "date": "04/12/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "faith"
            },
            {
                "text": "The secret to doing anything is believing that you can do it. Anything that you believe you can do strong enough, you can do. Anything, as long as you believe. Having a positive mental attitude is asking how something can be done rather than saying it can't be done. To help others takes courage and inner strength. Giving yourself the time you need to heal, that's a form of self-love. You have always been enough! The Lord will protect you. Nice week",
                "date": "04/12/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "inspiration"
            },
            {
                "text": "Heavenly Father, please guide me to do Your will.",
                "date": "05/12/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "faith"
            },
            {
                "text": "Don't be so hard on yourself. Dealing with life, everyday stuff, and emotions can be tough. You're a brave soul on a mission. You must make your own living and own opportunity. Don't sit down and wait for the opportunities to come. Get up and make them. Breaking free from the imprisonment of old habits is one of the most beautiful ways to grow. It is more difficult to stay on top than to get there. Stop doubting yourself. The Lord will speak to reassure you. Nice day",
                "date": "05/12/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "motivation"
            },
            {
                "text": "Set peace of mind as your highest goal, and organize your life and around it. When you close your mind to temptations and distractions, you can achieve anything. Anger makes you smaller, while forgiveness forces you to grow beyond what you were. Look inward to dig out old ways of thinking that you are holding back. Nothing external to you has any power over you. Believe in yourself, even when no one else does. The Lord will guide you. Beautiful weekend ahead.",
                "date": "06/12/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "personal"
            },

            {
                "text": "God is faithful; he will not let you be tempted beyond what you can bear. 1 Corinthians 10:13",
                "date": "07/12/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "1 Corinthians 10:13",
                "category": "faith"
            },
            {
                "text": "Father, You know my weaknesses. Please give me the strength to resist temptation and to walk with You, in Your holy and life-giving ways",
                "date": "07/12/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "faith"
            },
            {
                "text": "Good things come to those who believe, better things come to those who are patient and the best things come to those who don't give up. The clearer your thoughts, the clearer your reality. Look inside of yourself, and you will find everything you have been searching for. When it is dark, you can see the stars. Never neglect an opportunity for self improvement. There are far, far, better things ahead than anything you leave behind. The Lord will take very good care of you. Nice weekend",
                "date": "07/12/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "motivation"
            },
            {
                "text": "Saving Jesus, thank You for dying on the cross and rising to new life. I place my trust in You.",
                "date": "08/12/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "faith"
            },
            {
                "text": "Everyone wants to live on top of the mountain, but all the happiness and growth occurs while you're climbing it. Look inside of yourself, and you will find everything you have been searching for. Never underestimate the power of an unlimited being - YOU. The harder you work today brings you that much closer to your goal tomorrow. Your grateful heart can attract miracles. Be determined and find your motivation! The Lord will inspire you. Blessed Sunday",
                "date": "08/12/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "inspiration"
            },
            {
                "text": "When you pass through the waters, I will be with you. Isaiah 43:2",
                "date": "09/12/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "Isaiah 43:2",
                "category": "faith"
            },
            {
                "text": "Dear God, I thank You today that the Scriptures are full of promises, and that I can be encouraged even by one verse at just the right time.",
                "date": "09/12/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "faith"
            },
            {
                "text": "You have the power to create the life of your dreams. Once you give up searching for approval, you often find it easier to earn respect. Dream bigger, work harder, It's all in your power. Don't stop dreaming just because you had a nightmare. It's better to do one thing at a time and give your full concentration. People won't have time for you if you are always angry or complaining. Start before you are ready. The Lord will instill grace and strength in you. Nice week",
                "date": "09/12/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "motivation"
            },
            {
                "text": "Dear God, You know me best and love me most. I'm so grateful for Your hand on my life.",
                "date": "03/12/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "faith"
            },
            {
                "text": "Loving God, please remind me of who You are and help me to keep praying, no matter what.",
                "date": "14/11/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "faith"
            },

            {
                "text": "One of the greatest sources of insecurity and frustration is our tendency to try and change things you don't have control of. Share your gifts and talents unapologetically, the world needs them. One foot forward, one day at a time. The Lord will guide you. Good morning",
                "date": "09/11/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "motivation"
            },
            {
                "text": "Romans 6 vs 18 Being then made free from sin, ye became the servants of righteousness.",
                "date": "09/11/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "Romans 6:18",
                "category": "faith"
            },
            {
                "text": "Dear God, thank You for seeing me. I know You're with me even during my toughest times.",
                "date": "10/11/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "faith"
            },
            {
                "text": "You already have all the power you need within you to achieve everything you could ever dream of. Tap into it and watch your life change. Obstacles are challenges for winners and excuses for losers. Life is about making an impact, not making an income. Follow your soul! The Lord will speak to reassure you. Blessed Sunday",
                "date": "10/11/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "motivation"
            },
            {
                "text": "Don't let fear hold you back from your dreams. Take a chance, take a risk,and believe in yourself. The greatest achievements come from taking bold action. Never let someone who contributes so little to a relationship control so much of it. When you start to wonder whether you can trust someone or not, that is when you already know you don't. If you focus on your suffering, you will suffer. Focus on the good, find remedy. The Lord will guide you. Have a great week.",
                "date": "11/11/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "personal"
            },
            {
                "text": "Whatever is worrying you right now, forget about it. Take a deep breath, stay positive, know that things will get better. Peace can become a lens through which you see the world. Be it. Live it. Radiate it out. Peace is an inside job. Hard work beats talent every time. Take care of yourself first, You can't take care of others unless you're well too.The hardest walk is walking alone, but it's also the walk that makes you stronger. The Lord will lift you up. Nice day",
                "date": "12/11/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "inspiration"
            },
            {
                "text": "Those who are kind benefit themselves. Proverbs 11:17",
                "date": "13/11/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "Proverbs 11:17",
                "category": "faith"
            },
            {
                "text": "Kindness and generosity are part of God's character, and He loves to see them expressed in our own hearts and lives. Solomon summed up the matter well: `Whoever refreshes others will be refreshed` (Proverbs 11 v. 25).",
                "date": "13/11/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "Proverbs 11:25",
                "category": "faith"
            },
            {
                "text": "Dear God, I love Your kindness. Please help me to become more like You so that I may share Your love in practical ways.",
                "date": "13/11/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "faith"
            },
            {
                "text": "On the days you feel most discouraged, listen to your heartbeat. It'II remind you of who you are and what your purpose.You were given the gift of life; now it's up to you to figure out your gift in life. It's not the years in your life that count, It's the life in your years. Cherish the people who stick by your side, even when you push them away.Some of the best moments in your life will be the ones you never expected. The Lord will explain better to you. Nice day",
                "date": "13/11/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "personal"
            },
            {
                "text": "Loving God, please remind me of who You are and help me to keep praying, no matter what.",
                "date": "14/11/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "faith"
            },
            {
                "text": "Don't give the church to young people; give it rather to converted young people.",
                "date": "14/11/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "leadership"
            },
            {
                "text": "Don't lower standards for young people; challenge them to rise to the standards",
                "date": "14/11/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "leadership"
            },
            {
                "text": "A foretaste of what to come on the 7th of December",
                "date": "14/11/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "inspiration"
            },
            {
                "text": "A goal without a deadline is a dream.",
                "date": "14/11/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "motivation"
            },
            {
                "text": "To change the world, you must first be changed.",
                "date": "14/11/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "personal"
            },
            {
                "text": "when we don't cringe at sin, and are even unsure if there are absolute moral standards. Then there is a problem",
                "date": "14/11/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "faith"
            },
            {
                "text": "when our consciences don't catch fire for principle and just causes. \n\nwhen the Word of God is replaced by human opinion, tradition, culture, or feelings. \n\nwhen entertainment is substituted for true worship",
                "date": "14/11/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "faith"
            },
            {
                "text": "There are too many Obadiahs in the church. We need more Elijahs.",
                "date": "14/11/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "leadership"
            },
            {
                "text": "Don't take yourself too seriously; take the Lord seriously.",
                "date": "14/11/2024",
                "author": "Dr. Ayo OGUNSAN",
                "source": "",
                "category": "faith"
            }
        ]
    ;

    const videoContent = [
        {
            id: 1,
            title: "Are you a kingdom ambassador or a comfortable negotiator?",
            thumbnail: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=320&h=180",
            src: "https://www.youtube.com/watch?v=jxnWX7kqYGE",
            duration: "10:25",
            author: "Dr. Ayo Ogunsan",
            date: "27/10/2024",
            category: "motivation",
            views: "1.2K"
        },
        {
            id: 2,
            title: "Building Faith Through Action",
            thumbnail: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=320&h=180",
            src: "https://www.youtube.com/watch?v=WZvg8hjaaMk",
            duration: "15:30",
            author: "Dr. Ayo Ogunsan",
            date: "25/10/2024",
            category: "faith",
            views: "890"
        }
    ];

    const eventsData = [
        {
            id: 1,
            title: "Leadership Summit 2024",
            image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=320&h=180",
            date: "Dec 15, 2024",
            time: "9:00 AM - 5:00 PM",
            location: "Virtual Event",
            category: "leadership",
            price: "Free",
            attending: 234
        },
        {
            id: 2,
            title: "Business Growth Workshop",
            image: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&w=320&h=180",
            date: "Dec 20, 2024",
            time: "2:00 PM - 4:00 PM",
            location: "Lagos Business School",
            category: "business",
            price: "Free",
            attending: 89
        },
        {
            id: 3,
            title: "Faith & Leadership Conference",
            image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=320&h=180",
            date: "Jan 5, 2025",
            time: "10:00 AM - 3:00 PM",
            location: "Christian Center",
            category: "faith",
            price: "Free",
            attending: 156
        }
    ];

    // Components
    const CustomVideoControls = ({video, onClose}) => {
        const autoPlay = video.autoPlay || false;
        const videoRef = useRef(null);
        const [isPlaying, setIsPlaying] = useState(autoPlay);
        const [currentTime, setCurrentTime] = useState(0);
        const [duration, setDuration] = useState(0);
        const [volume, setVolume] = useState(1);
        const [lastTap, setLastTap] = useState(0);
        const [showVolumeSlider, setShowVolumeSlider] = useState(false);
        const [error, setError] = useState(null);
        const [isLoading, setIsLoading] = useState(true);
        const [showControls, setShowControls] = useState(true);

        useEffect(() => {
            let timeout;
            if (showControls) {
                timeout = setTimeout(() => setShowControls(false), 3000);
            }
            return () => clearTimeout(timeout);
        }, [showControls]);

        useEffect(() => {
            const timer = setTimeout(() => setIsLoading(false), 1000);
            return () => clearTimeout(timer);
        }, []);

        const handleError = (e) => {
            console.error('Video Error:', e);
            setError('Error loading video. Please try again.');
        };

        const handleTap = (e) => {
            const now = Date.now();
            if (now - lastTap < 300) {
                handleDoubleTap(e);
            }
            setLastTap(now);
            setShowControls(true);
        };

        const handleDoubleTap = (e) => {
            const x = e.clientX;
            const width = window.innerWidth;
            const seekTime = 10;

            if (videoRef.current) {
                if (x < width / 2) {
                    videoRef.current.seekTo(Math.max(0, currentTime - seekTime));
                } else {
                    videoRef.current.seekTo(Math.min(duration, currentTime + seekTime));
                }
            }
        };

        const togglePlay = () => {
            setIsPlaying(!isPlaying);
        };

        return (
            <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
                <div className="relative w-full h-screen bg-black flex items-center justify-center">
                    {/* Video Container */}
                    <div className="relative h-[100vh] w-full flex items-center justify-center">
                        <button
                            onClick={onClose}
                            className="absolute top-8 right-2 z-50 text-white hover:text-gray-300 bg-black/50 px-4 py-2 rounded-lg flex items-center gap-2"
                        >
                            Close
                            <X className="w-4 h-4"/>
                        </button>

                        <div
                            className="w-full h-full"
                            onClick={handleTap}
                            onTouchStart={handleTap}
                        >
                            <ReactPlayer
                                ref={videoRef}
                                url={video.src}
                                width="100%"
                                height="100%"
                                playing={isPlaying}
                                volume={volume}
                                onProgress={({ played, playedSeconds }) => {
                                    setCurrentTime(playedSeconds);
                                }}
                                onDuration={setDuration}
                                onError={handleError}
                                controls={false}
                                playsinline
                                style={{ backgroundColor: 'black' }}
                                className="h-full w-full object-contain"
                                onClick={togglePlay}
                                config={{
                                    youtube: {
                                        playerVars: {
                                            autoplay: 1,
                                            modestbranding: 1,
                                            rel: 0,
                                            showinfo: 0
                                        }
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const QuotePopup = ({quote, onClose}) => (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl p-6 max-w-md w-full relative">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
                >
                    ✕
                </button>

                <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r bg-blue-600 bg-clip-text text-transparent">
                    Daily Wisdom
                </h2>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <p className="text-lg text-gray-800 italic">"{quote.text}"</p>
                </div>

                <div className="text-sm text-gray-600 space-y-1">
                    {quote.source && <p className="font-medium">{quote.source}</p>}
                    <p className="font-medium">- {quote.author}</p>
                    {/*<p className="text-gray-400">{quote.date}</p>*/}
                </div>
            </div>
        </div>
    );

    const DashboardScreen = () => {
        const [activeTab, setActiveTab] = useState('messages');
        const [searchQuery, setSearchQuery] = useState('');
        const [selectedCategory, setSelectedCategory] = useState('all');
        const [showRegistration, setShowRegistration] = useState(false);
        const [selectedEvent, setSelectedEvent] = useState(null);
        const [shareItem, setShareItem] = useState(null);
        const [bookmarkedQuotes, setBookmarkedQuotes] = useState([]);

        // Functions
        const toggleBookmark = (e, quote) => {
            e.preventDefault();
            e.stopPropagation();
            setBookmarkedQuotes(prev => {
                const isBookmarked = prev.some(q => q.text === quote.text);
                if (isBookmarked) {
                    return prev.filter(q => q.text !== quote.text);
                } else {
                    return [...prev, quote];
                }
            });
        };

        // Components
        const RegistrationForm = ({event, onClose}) => {
            const [formData, setFormData] = useState({
                name: '',
                email: '',
                phone: '',
                attendees: 1
            });
            const [isSubmitting, setIsSubmitting] = useState(false);

            const handleSubmit = async (e) => {
                e.preventDefault();
                setIsSubmitting(true);

                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1500));

                setIsSubmitting(false);
                onClose();
                // You would typically handle the form submission here
            };

            return (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-xl p-6 max-w-md w-full">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-semibold">Register for {event.title}</h3>
                            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Number of
                                    Attendees</label>
                                <input
                                    type="number"
                                    min="1"
                                    value={formData.attendees}
                                    onChange={(e) => setFormData({...formData, attendees: parseInt(e.target.value)})}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 disabled:opacity-50"
                            >
                                {isSubmitting ? 'Registering...' : 'Complete Registration'}
                            </button>
                        </form>
                    </div>
                </div>
            );
        };

        const MessageCard = ({message}) => {
            const category = categories.find(cat => cat.id === message.category) || categories[0];

            return (
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-blue-600 font-medium flex items-center gap-2">
                    <span>{category.icon}</span>
                    {category.name}
                </span>
                        <span className="text-xs text-gray-400">{message.date}</span>
                    </div>
                    <p className="text-gray-700 mb-3">{message.text}</p>
                    <div className="flex justify-end gap-2">
                        <button className="p-2 hover:bg-gray-50 rounded-full"
                                onClick={(e) => toggleBookmark(e, message)}>
                            <Bookmark className={`w-4 h-4 ${
                                bookmarkedQuotes.some(q => q.text === message.text)
                                    ? 'text-blue-600 fill-current'
                                    : 'text-gray-600'
                            }`}/>
                        </button>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setShareItem(message);
                            }}
                            className="p-2 hover:bg-gray-50 rounded-full"
                        >
                            <Share2 className="w-4 h-4 text-gray-600"/>
                        </button>
                    </div>
                </div>
            );
        };

        const CategoryPills = ({
                                   categories,
                                   selectedCategory,
                                   setSelectedCategory,
                                   searchQuery = '',
                                   onSearchChange,
                                   containerClassName = ""
                               }) => {
            const [showSearch, setShowSearch] = useState(false);

            return (
                <div className={`${containerClassName}`}>
                    {!showSearch ? (
                        <div className="flex items-center justify-between mb-2">
                            <div className="overflow-x-auto flex-1 flex gap-2 no-scrollbar">
                                <button
                                    onClick={() => setSelectedCategory('all')}
                                    className={`px-4 py-2 rounded-full whitespace-nowrap ${
                                        selectedCategory === 'all'
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-100 text-gray-600'
                                    }`}
                                >
                                    All
                                </button>
                                {categories.map(cat => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setSelectedCategory(cat.id)}
                                        className={`px-4 py-2 rounded-full flex items-center gap-2 whitespace-nowrap ${
                                            selectedCategory === cat.id
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-100 text-gray-600'
                                        }`}
                                    >
                                        <span>{cat.icon}</span>
                                        {cat.name}
                                    </button>
                                ))}
                            </div>
                            <button
                                onClick={() => setShowSearch(true)}
                                className="ml-2 p-2 hover:bg-gray-100 rounded-full flex-shrink-0"
                            >
                                <Search className="w-5 h-5 text-gray-600"/>
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            <div className="relative flex-1">
                                <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    value={searchQuery}
                                    onChange={(e) => {
                                        e.preventDefault();
                                        if (onSearchChange) {
                                            onSearchChange(e.target.value);
                                        }
                                    }}
                                    autoFocus
                                    className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                />
                            </div>
                            <button
                                onClick={() => {
                                    setShowSearch(false);
                                    onSearchChange('');
                                }}
                                className="p-2 hover:bg-gray-100 rounded-full"
                            >
                                <X className="w-5 h-5 text-gray-600"/>
                            </button>
                        </div>
                    )}
                </div>
            );
        };

        const EmptyState = ({onClearFilters}) => (
            <div className="text-center py-8">
                <p className="text-gray-500">No items found</p>
                <button
                    onClick={onClearFilters}
                    className="mt-2 text-blue-600 hover:text-blue-700"
                >
                    Clear filters
                </button>
            </div>
        );

        const MessagesTab = () => {
            const [searchQuery, setSearchQuery] = useState('');
            const [selectedCategory, setSelectedCategory] = useState('all');

            // Add this CSS for hiding scrollbars while maintaining scroll functionality
            const style = document.createElement('style');
            style.textContent = `
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
    `;
            document.head.appendChild(style);

            const filteredQuotes = useFilteredContent(
                inspirationalQuotes,
                selectedCategory,
                searchQuery,
                ['text', 'author', 'category']
            )

            return (
                <div className="relative h-screen flex flex-col">
                    {/* Fixed Header with Categories */}
                    <div className="flex-none bg-gray-50 z-10 p-4">
                        <CategoryPills
                            categories={categories}
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                            searchQuery={searchQuery}
                            onSearchChange={setSearchQuery}
                            containerClassName="pb-2"
                        />
                    </div>

                    {/* Scrollable Content */}
                    <div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-24">
                        {/* Messages List */}
                        <div className="space-y-4">
                            {filteredQuotes.map((quote, index) => (
                                    <MessageCard
                                        key={index}
                                        message={quote}
                                    />
                                ))}
                        </div>

                        {filteredQuotes.length === 0 && (
                            <EmptyState
                                onClearFilters={() => {
                                    setSelectedCategory('all');
                                    setSearchQuery('');
                                }}
                            />
                        )}
                    </div>
                </div>
            );
        };

        const SavedTab = () => {
            return (
                <div className="relative h-[calc(100vh-8rem)]">
                    <div className="p-6">
                        <div className="space-y-4">
                            {bookmarkedQuotes.length === 0 ? (
                                <EmptyState
                                    onClearFilters={() => {
                                    }}
                                />
                            ) : (
                                bookmarkedQuotes.map((quote, index) => (
                                    <MessageCard key={index} message={quote}/>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            );
        };

        const ChatTab = () => {
            const [newMessage, setNewMessage] = useState('');
            const [isTyping, setIsTyping] = useState('');
            const chatContainerRef = React.useRef(null);
            const [chatMessages, setChatMessages] = useState([
                {
                    id: 1,
                    text: "Hello! I'm your AI assistant. I can help you with questions about personal growth, leadership, business strategies, and faith-based guidance. How can I assist you today?",
                    sender: "bot",
                    timestamp: new Date().toISOString()
                }
            ]);

            useEffect(() => {
                if (chatContainerRef.current) {
                    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
                }
            }, [chatMessages]);

            const handleSendMessage = async () => {
                if (!newMessage.trim()) return;

                const userMessage = {
                    id: Date.now(),
                    text: newMessage,
                    sender: "user",
                    timestamp: new Date().toISOString()
                };

                setChatMessages(prev => [...prev, userMessage]);
                setNewMessage('');
                setIsTyping(true);

                try {
                    // Simulate bot response
                    await new Promise(resolve => setTimeout(resolve, 2000));

                    const botMessage = {
                        id: Date.now() + 1,
                        text: "You've come to believe that all your past failure and frustration were actually laying the foundation for the understanding that has created the new level of living you now enjoy. A sense of blessedness comes from a change of heart, not from more blessings. When you're good, you tell them. When you're great, they tell you. And you can't be great until you're better than good. Radiate the energy you want to receive. The Lord will honour you. Nice day.",
                        sender: "bot",
                        timestamp: new Date().toISOString()
                    };

                    setChatMessages(prev => [...prev, botMessage]);
                } finally {
                    setIsTyping(false);
                }
            };

            const handleKeyPress = (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                }
            };

            return (
                <div className="flex flex-col h-[calc(100vh-4.5rem)]">
                    {/* Scrollable messages area */}
                    <div className="flex-1 overflow-y-auto" ref={chatContainerRef}>
                        <div className="p-6 pb-24 space-y-4">
                            {chatMessages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`p-4 max-w-[80%] rounded-2xl ${
                                            message.sender === 'user'
                                                ? 'bg-blue-600 text-white rounded-tr-none'
                                                : 'bg-gray-100 text-gray-700 rounded-tl-none'
                                        }`}
                                    >
                                        <p>{message.text}</p>
                                        <span className={`text-xs mt-1 block ${
                                            message.sender === 'user'
                                                ? 'text-blue-100'
                                                : 'text-gray-500'
                                        }`}>
                                    {new Date(message.timestamp).toLocaleTimeString([], {
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })}
                                </span>
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-gray-100 p-4 rounded-2xl rounded-tl-none">
                                        <div className="flex space-x-2">
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                                 style={{animationDelay: '0ms'}}></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                                 style={{animationDelay: '150ms'}}></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                                 style={{animationDelay: '300ms'}}></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Fixed chat input area */}
                    <div className="bg-white border-t">
                        <div className="p-4 flex gap-2">
                            <input
                                type="text"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Type your message..."
                                className="flex-1 px-4 py-3 rounded-full border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            />
                            <button
                                onClick={handleSendMessage}
                                disabled={!newMessage.trim() || isTyping}
                                className="h-[50px] w-[50px] flex justify-end items-center p-3 bg-blue-600 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    className="rotate-0"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            );
        };

        const VideosTab = () => {
            const [selectedCategory, setSelectedCategory] = useState('all');
            const [searchQuery, setSearchQuery] = useState('');
            const [selectedVideo, setSelectedVideo] = useState(null);

            const filteredVideos = useFilteredContent(
                videoContent,
                selectedCategory,
                searchQuery,
                ['title', 'author', 'category']
            )

            const VideoCard = ({video}) => {
                const category = categories.find(cat => cat.id === video.category) || categories[0];

                return (
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
                         onClick={(e) => {
                             e.preventDefault();
                             e.stopPropagation();
                             setSelectedVideo({...video, autoPlay: true});
                         }}>
                        <div
                            className="relative cursor-pointer group"
                        >
                            <img
                                src={video.thumbnail}
                                alt={video.title}
                                className="w-full h-64 object-cover"
                            />
                            <div
                                className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all flex items-center justify-center">
                                <div
                                    className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"
                                         className="text-white">
                                        <polygon points="5 3 19 12 5 21"></polygon>
                                    </svg>
                                </div>
                            </div>
                            <span
                                className="absolute bottom-2 right-2 bg-black/75 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                    </span>
                        </div>

                        <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                        <span className="text-sm text-blue-600 font-medium flex items-center gap-2">
                            <span>{category.icon}</span>
                            {category.name}
                        </span>
                                <span className="text-xs text-gray-400">{video.views} views</span>
                            </div>
                            <h3 className="font-semibold text-gray-800 mb-2">{video.title}</h3>
                            <p className="text-sm text-gray-600">{video.author}</p>
                            <div className="flex justify-end gap-2 mt-2">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setShareItem(video);
                                    }}
                                    className="p-2 hover:bg-gray-50 rounded-full"
                                >
                                    <Share2 className="w-4 h-4 text-gray-600"/>
                                </button>
                            </div>
                        </div>
                    </div>
                );
            };

            return (
                <div className="relative h-[calc(100vh-8rem)]">
                    <div className="flex-none bg-gray-50 z-10 p-4">
                        <CategoryPills
                            categories={categories}
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                            searchQuery={searchQuery}
                            onSearchChange={setSearchQuery}
                            containerClassName="pb-2"
                        />
                    </div>

                    {/* Video Grid */}
                    <div className="overflow-y-auto h-full no-scrollbar px-6 pb-24">
                        <div className="grid grid-cols-1 gap-4">
                            {filteredVideos.length === 0 ? (
                                <EmptyState
                                    onClearFilters={() => {
                                        setSelectedCategory('all');
                                        setSearchQuery('');
                                    }}
                                />
                            ) : (
                                filteredVideos.map(video => (
                                    <VideoCard key={video.id} video={video}/>
                                ))
                            )}
                        </div>
                    </div>

                    {/* Video Player Modal */}
                    {selectedVideo && (
                        <CustomVideoControls
                            video={selectedVideo}
                            onClose={() => setSelectedVideo(null)}
                        />
                    )}
                </div>
            );
        };

        const EventsTab = () => {
            const [selectedCategory, setSelectedCategory] = useState('all');
            const [searchQuery, setSearchQuery] = useState('');

            const EventCard = ({event}) => {
                const category = categories.find(cat => cat.id === event.category) || categories[0];

                return (
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                    <div className="relative">
                            <img src={event.image} alt={event.title} className="w-full h-48 object-cover"/>
                            <div
                                className="absolute top-2 right-2 bg-white px-3 py-1 rounded-full text-sm font-medium text-blue-600">
                                {event.price}
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                        <span className="text-sm text-blue-600 font-medium flex items-center gap-2">
                            <span>{category.icon}</span>
                            {category.name}
                        </span>
                                <span className="text-xs text-gray-400">{event.attending} attending</span>
                            </div>
                            <h3 className="font-semibold text-gray-800 mb-2">{event.title}</h3>
                            <div className="space-y-2 text-sm text-gray-600">
                                <p className="flex items-center gap-2">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                         strokeWidth="2">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                    </svg>
                                    {event.date}
                                </p>
                                <p className="flex items-center gap-2">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                         strokeWidth="2">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                    {event.time}
                                </p>
                                <p className="flex items-center gap-2">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                         strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                    {event.location}
                                </p>
                            </div>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setSelectedEvent(event);
                                    setShowRegistration(true);
                                }}
                                className="mt-4 w-full bg-blue-600 text-white rounded-full py-2 px-4 hover:bg-blue-700 transition-colors"
                            >
                                Register Now
                            </button>
                        </div>
                    </div>
                );
            };

            return (
                <>
                    <div className="relative h-[calc(100vh-8rem)]">
                        <div className="sticky top-0 bg-gray-50 z-10 p-6 pb-0">
                            <div className="overflow-x-auto flex gap-2 pb-2 no-scrollbar">
                                <button
                                    onClick={() => setSelectedCategory('all')}
                                    className={`px-4 py-2 rounded-full whitespace-nowrap ${
                                        selectedCategory === 'all'
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-100 text-gray-600'
                                    }`}
                                >
                                    All
                                </button>
                                {categories.map(cat => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setSelectedCategory(cat.id)}
                                        className={`px-4 py-2 rounded-full flex items-center gap-2 whitespace-nowrap ${
                                            selectedCategory === cat.id
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-100 text-gray-600'
                                        }`}
                                    >
                                        <span>{cat.icon}</span>
                                        {cat.name}
                                    </button>
                                ))}
                            </div>

                            <div className="relative mb-6 mt-4">
                                <Search className="w-5 h-5 absolute left-4 top-3 text-gray-400"/>
                                <input
                                    type="text"
                                    placeholder="Search events..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        <div className="overflow-y-auto h-full no-scrollbar px-6 pb-24">
                            <div className="grid grid-cols-1 gap-4">
                                {eventsData
                                    .filter(event => {
                                        const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
                                        const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                            event.location.toLowerCase().includes(searchQuery.toLowerCase());
                                        return matchesCategory && matchesSearch;
                                    })
                                    .map(event => (
                                        <EventCard key={event.id} event={event}/>
                                    ))}
                            </div>
                        </div>
                    </div>
                    {showRegistration && selectedEvent && (
                        <RegistrationForm
                            event={selectedEvent}
                            onClose={() => {
                                setShowRegistration(false);
                                setSelectedEvent(null);
                            }}
                        />
                    )}
                </>
            );
        };

        const SharePopup = ({item, onClose}) => {
            const shareUrls = {
                twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(item.text || item.title)}`,
                facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
                linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
                whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(item.text || item.title)}`
            };

            const copyToClipboard = async () => {
                try {
                    await navigator.clipboard.writeText(item.text || item.title);
                    alert('Copied to clipboard!');
                } catch (err) {
                    console.error('Failed to copy text: ', err);
                }
            };

            return (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-xl p-6 max-w-sm w-full">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-semibold">Share</h3>
                            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
                        </div>

                        <div className="grid grid-cols-4 gap-4 mb-6">
                            <button
                                onClick={() => window.open(shareUrls.twitter, '_blank')}
                                className="flex flex-col items-center gap-2"
                            >
                                <div className="w-12 h-12 rounded-full bg-[#1DA1F2] flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                                    </svg>
                                </div>
                                <span className="text-sm text-gray-600">Twitter</span>
                            </button>

                            <button
                                onClick={() => window.open(shareUrls.facebook, '_blank')}
                                className="flex flex-col items-center gap-2"
                            >
                                <div className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                                    </svg>
                                </div>
                                <span className="text-sm text-gray-600">Facebook</span>
                            </button>

                            <button
                                onClick={() => window.open(shareUrls.whatsapp, '_blank')}
                                className="flex flex-col items-center gap-2"
                            >
                                <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                    </svg>
                                </div>
                                <span className="text-sm text-gray-600">WhatsApp</span>
                            </button>

                            <button
                                onClick={() => window.open(shareUrls.linkedin, '_blank')}
                                className="flex flex-col items-center gap-2"
                            >
                                <div className="w-12 h-12 rounded-full bg-[#0A66C2] flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                                        <rect x="2" y="9" width="4" height="12"/>
                                        <circle cx="4" cy="4" r="2"/>
                                    </svg>
                                </div>
                                <span className="text-sm text-gray-600">LinkedIn</span>
                            </button>
                        </div>

                        <div className="border-t pt-4">
                            <button
                                onClick={copyToClipboard}
                                className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg px-4 py-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                                </svg>
                                Copy to clipboard
                            </button>
                        </div>
                    </div>
                </div>
            );
        };

        const AppHeader = ({activeTab, onMenuToggle, setCurrentScreen}) => {
            const [showSearch, setShowSearch] = useState(false);
            const [notificationCount, setNotificationCount] = useState(3);
            const [showNotifications, setShowNotifications] = useState(false);
            const [showProfileMenu, setShowProfileMenu] = useState(false);

            // Mock notifications
            const notifications = [
                {id: 1, text: "New daily wisdom available", time: "5m ago", unread: true},
                {id: 2, text: "Upcoming event: Leadership Summit", time: "1h ago", unread: true},
                {id: 3, text: "New video message from mentor", time: "2h ago", unread: true},
            ];

            return (
                <div className="bg-white border-b fixed top-0 left-0 right-0 z-40">
                    {/* Main Header */}
                    <div className="px-4 py-3">
                        <div className="flex items-center justify-between">
                            {/* Left Section */}
                            <div className="flex items-center gap-3">
                                <button onClick={onMenuToggle} className="p-2 hover:bg-gray-100 rounded-full">
                                    <Menu className="w-6 h-6 text-gray-700"/>
                                </button>
                            </div>

                            {/* Center Section - Title */}
                            <div
                                className={`absolute left-1/2 transform -translate-x-1/2 transition-opacity ${showSearch ? 'opacity-0' : 'opacity-100'}`}>
                                <h1 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    {activeTab === 'messages' ? 'Messages' :
                                        activeTab === 'videos' ? 'Videos' :
                                            activeTab === 'events' ? 'Events' :
                                                activeTab === 'chat' ? 'Chat' : 'Saved'}
                                </h1>
                            </div>

                            {/* Right Section */}
                            <div className="flex items-center gap-2">
                                <div className="relative">
                                    <button
                                        onClick={() => setShowNotifications(!showNotifications)}
                                        className="p-2 hover:bg-gray-100 rounded-full relative"
                                    >
                                        <Bell className="w-6 h-6 text-gray-700"/>
                                        {notificationCount > 0 && (
                                            <span
                                                className="absolute top-1 right-1 w-5 h-5 bg-blue-600 rounded-full text-white text-xs flex items-center justify-center">
                    {notificationCount}
                  </span>
                                        )}
                                    </button>

                                    {/* Notifications Dropdown */}
                                    {showNotifications && (
                                        <div
                                            className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                                            <div className="px-4 py-2 border-b border-gray-100">
                                                <div className="flex justify-between items-center">
                                                    <h3 className="font-semibold text-gray-900">Notifications</h3>
                                                    <button className="text-xs text-blue-600 hover:text-blue-700">Mark
                                                        all as read
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="max-h-96 overflow-y-auto">
                                                {notifications.map(notification => (
                                                    <div
                                                        key={notification.id}
                                                        className={`px-4 py-3 hover:bg-gray-50 cursor-pointer ${notification.unread ? 'bg-blue-50' : ''}`}
                                                    >
                                                        <div className="flex justify-between items-start">
                                                            <p className="text-sm text-gray-800">{notification.text}</p>
                                                            <span
                                                                className="text-xs text-gray-500 ml-2">{notification.time}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        };

        const Sidebar = ({isOpen, setIsOpen, activeTab, setActiveTab, setCurrentScreen}) => {
            const menuItems = [
                {id: 'messages', icon: MessageCircle, label: 'Messages'},
                {id: 'videos', icon: Video, label: 'Videos'},
                {id: 'events', icon: Calendar, label: 'Events'},
                {id: 'chat', icon: MessageSquare, label: 'Chat'},
                {id: 'saved', icon: Bookmark, label: 'Saved'},
            ];

            return (
                <>
                    {/* Backdrop */}
                    {isOpen && (
                        <div
                            className="fixed inset-0 bg-black/20 z-50 lg:hidden"
                            onClick={() => setIsOpen(false)}
                        />
                    )}

                    {/* Sidebar */}
                    <div className={`
        fixed top-0 left-0 z-50 h-full w-64 bg-white border-r transform transition-transform duration-300 ease-in-out flex flex-col
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:z-auto
      `}>
                        {/* Profile Section */}
                        <div className="p-4 border-b">
                            <div className="flex items-center gap-3 mb-4">
                                <div
                                    className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-medium">
                                    AO
                                </div>
                                <div>
                                    <h3 className="font-medium">Dr. Ayo</h3>
                                    <p className="text-sm text-gray-500">Mentor</p>
                                </div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <nav className="p-4 space-y-1 flex-1">
                            {menuItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => {
                                            setActiveTab(item.id);
                                            setIsOpen(false);
                                        }}
                                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm
                  ${activeTab === item.id
                                            ? 'bg-blue-50 text-blue-600'
                                            : 'text-gray-700 hover:bg-gray-50'
                                        }`}
                                    >
                                        <Icon className="w-5 h-5"/>
                                        {item.label}
                                    </button>
                                );
                            })}
                        </nav>

                        {/* Profile Menu Items */}
                        <div className="p-4 border-t bg-white mt-auto">
                            <div className="space-y-1">
                                <button
                                    className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                                    <User className="w-5 h-5"/>
                                    Profile
                                </button>
                                <button
                                    className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                                    <Settings className="w-5 h-5"/>
                                    Settings
                                </button>
                                <button
                                    onClick={() => setCurrentScreen('login')}
                                    className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg"
                                >
                                    <LogOut className="w-5 h-5"/>
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            );
        };

        const [isSidebarOpen, setIsSidebarOpen] = useState(false);

        return (
            <>
                <div className="min-h-screen bg-gray-50 lg:flex">
                    <Sidebar
                        isOpen={isSidebarOpen}
                        setIsOpen={setIsSidebarOpen}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        setCurrentScreen={setCurrentScreen}
                    />
                    <div className="flex-1 pt-[73px]">
                        {/* Header */}
                        <AppHeader
                            activeTab={activeTab}
                            onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
                            setCurrentScreen={setCurrentScreen}
                        />

                        {/* Main Content */}
                        {activeTab === 'messages' ? <MessagesTab/> :
                            activeTab === 'chat' ? <ChatTab/> :
                                activeTab === 'videos' ? <VideosTab/> :
                                    activeTab === 'events' ? <EventsTab/> :
                                        <SavedTab/>}

                    </div>
                    {shareItem && (
                        <SharePopup
                            item={shareItem}
                            onClose={() => setShareItem(null)}
                        />
                    )}
                </div>
            </>
        );
    };

    const LoginScreen = () => {
        const [username, setUsername] = useState('admin123');
        const [password, setPassword] = useState('admin123');
        const [isLoading, setIsLoading] = useState(false);
        const [errors, setErrors] = useState({});
        const [showPassword, setShowPassword] = useState(false);

        const handleLogin = async (e) => {
            e.preventDefault();
            const newErrors = {};
            if (!username) newErrors.username = 'Username is required';
            if (!password) newErrors.password = 'Password is required';
            else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';

            if (Object.keys(newErrors).length > 0) {
                setErrors(newErrors);
                return;
            }

            setIsLoading(true);
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1000));

                setIsAuthenticated(true);

                const quotesWithoutSource = inspirationalQuotes.filter(quote => !quote.source);
                if (quotesWithoutSource.length > 0) {
                    const randomQuote = quotesWithoutSource[Math.floor(Math.random() * quotesWithoutSource.length)];
                    setCurrentQuote(randomQuote);
                } else {
                    console.error("No quotes without a source available.");
                }

                setCurrentScreen('dashboard');
                setShowQuotePopup(true);
            } catch (error) {
                setErrors({submit: 'Login failed. Please try again.'});
            } finally {
                setIsLoading(false);
            }
        };

        return (
            <div className="min-h-screen bg-white p-6 relative overflow-hidden">
                <WavyBackground/>

                <div className="relative pt-8 max-w-md mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            YEF
                        </h1>
                        <p className="text-gray-600 mt-2">
                            Young Executive Forum
                        </p>
                    </div>

                    <SecurityLoginIllustration/>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                                Username
                            </label>
                            <input
                                id="username"
                                type="text"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                    setErrors(prev => ({...prev, username: ''}));
                                }}
                                className={`w-full px-4 py-3 rounded-xl border ${errors.username ? 'border-red-500' : 'border-gray-200'} bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                                aria-invalid={errors.username ? 'true' : 'false'}
                            />
                            {errors.username && <p className="mt-1 text-sm text-red-600">{errors.username}</p>}
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        setErrors(prev => ({...prev, password: ''}));
                                    }}
                                    className={`w-full px-4 py-3 rounded-xl border ${errors.password ? 'border-red-500' : 'border-gray-200'} bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                                    aria-invalid={errors.password ? 'true' : 'false'}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                >
                                    {showPassword ? '👁️' : '👁️‍🗨️'}
                                </button>
                            </div>
                            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center text-gray-600">
                                <input type="checkbox" className="mr-2 rounded"/>
                                Remember me
                            </label>
                            <a href="#" className="text-blue-600 hover:text-blue-700">
                                Forgot password?
                            </a>
                        </div>

                        {errors.submit && (
                            <div className="text-center text-red-600 text-sm">
                                {errors.submit}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl px-8 py-3 hover:opacity-90 transform transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                                strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor"
                                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Signing in...
                                </>
                            ) : (
                                'Sign In'
                            )}
                        </button>

                        <p className="text-center text-gray-600 text-sm">
                            Don't have an account?{' '}
                            <a href="#" className="text-blue-600 hover:text-blue-700">
                                Sign up
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        );
    };

    return (
        <div className="bg-white min-h-screen">
            {currentScreen === 'login' && <LoginScreen/>}
            {currentScreen === 'dashboard' && <DashboardScreen/>}
            {showQuotePopup && currentQuote && (
                <QuotePopup quote={currentQuote} onClose={() => setShowQuotePopup(false)}/>
            )}
        </div>
    );
};

export default MobileApp;