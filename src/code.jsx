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
            "text":"Time is the coin of your life. It is the only coin you have, and only you can determine how it will be spent. Be careful lest you let other people spend it for you.",
            "date":"27/10/2024",
            "author":"Dr. Ayo OGUNSAN",
            "source":"",
            "category":"personal"
        },
        {
            "text":"Love yourself enough to set boundaries. Your time and energy are precious, you get to choose how you use it. You teach people how to treat you by deciding what you will and won't accept. Most people are far too much occupied with themselves to be malicious. You are only one choice away from changing your world, choose consciously and wisely. Trust yourself above else. Calm heart and lit soul. Positive thoughts always. The Lord will guide you. Best of the week",
            "date":"14/10/2024",
            "author":"Dr. Ayo OGUNSAN",
            "source":"",
            "category":"personal"
        },
        {
            "text":"I discipline my body and keep it under control.",
            "date":"15/10/2024",
            "author":"Dr. Ayo OGUNSAN",
            "source":"1 Corinthians 9:27",
            "category":"spiritual"
        },
        {
            "text":"While God's grace (not our efforts) undergirds all we do, our spiritual life deserves rigorous discipline. As God helps us discipline our mind, heart, and body, we learn to keep our attention fixed on Him, even amid trials or distractions.",
            "date":"15/10/2024",
            "author":"Dr. Ayo OGUNSAN",
            "source":"",
            "category":"spiritual"
        },
        {
            "text":"Being thankful for the ordinary things will help you realize that they are, in fact, extraordinary. In order to move on, you must understand why you felt what you did and why you no longer need to feel it. Sometimes, there is no next time, no time-outs, and no second chances; sometimes, it's now or never. When your only tool is a hammer, all problems start looking like nails. Old ways won't open new doors. The Lord will restate the truth and make you happy. Nice day.",
            "date":"16/10/2024",
            "author":"Dr. Ayo OGUNSAN",
            "source":"",
            "category":"personal"
        },
        {
            "text":"You reap fruit from the same kind of seed you've been sowing, you can't talk negative and expect to live positive. Confidence is key to make one believe in self conviction and serves to grow and make one strong. You don't see things the way they are, you see them the way they are. Only those who dare to fail greatly can ever achieve greatly. Live a little more. Your unique talents are just what you need for tomorrow. The Lord will direct you. Good morning",
            "date":"17/10/2024",
            "author":"Dr. Ayo OGUNSAN",
            "source":"",
            "category":"personal"
        },
        {
            "text":"New beginnings require a new mindset, get your mind right so you don't fall back into the old patterns. The need for less often results in a life of more. The most important thing to do if you find yourself in a hole is to stop digging. In your life, you've lived, you've loved, you've lost, you've missed, you've hurt, you've trusted and you've made mistakes. But most of all, you have learned. Your passion is your pay check. The Lord will speak to reassure you. Nice day",
            "date":"22/10/2024",
            "author":"Dr. Ayo OGUNSAN",
            "source":"",
            "category":"personal"
        },
        {
            "text":"I will ask the Father, and he will give you another advocate to help you and be with you forever.",
            "date":"23/10/2024",
            "author":"Dr. Ayo OGUNSAN",
            "source":"John 14:16",
            "category":"spiritual"
        },
        {
            "text":"In this life, everyone—including believers in Christ—will experience the turbulence of anxiety, fear, and grief. But He's promised that, in His absence, the Holy Spirit is present to comfort us.",
            "date":"23/10/2024",
            "author":"Dr. Ayo OGUNSAN",
            "source":"",
            "category":"spiritual"
        },
        {
            "text":"Dear Jesus, thank You for the Spirit's comfort and counsel.",
            "date":"23/10/2024",
            "author":"Dr. Ayo OGUNSAN",
            "source":"",
            "category":"spiritual"
        },
        {
            "text":"It is very important that you do not try to run away from your painful feelings. You can recognize, accept, embrace, and look deeply. To uncover your true potential, you must first find your own limits, and then you have the courage to blow past them. Dream to manifest yourselves into leaders with great vision. Every day is a new day, and you'II never be able to find happiness if you don't move on. Don't settle for easy. The Lord will reveal more to you. Enjoy the rest of your day.",
            "date":"23/10/2024",
            "author":"Dr. Ayo OGUNSAN",
            "source":"",
            "category":"personal"
        },
        {
            "text":"Happiness and contentment can come from accepting that not everyone has the same exact moral compass. What separates winners from those who are struggling is that winners are willing to do the work that others avoid. Successful people seek knowledge, not gossip, as you're on the verge of something amazing. The winds of change are unavoidable, but if you bend, you won't break. Grind hard and make it happen. The Lord will guide you. Good night",
            "date":"24/10/2024",
            "author":"Dr. Ayo OGUNSAN",
            "source":"",
            "category":"personal"
        },
        {
            "text":"Father, I look forward to being with You in Your heavenly home. Thank You for the promise and strength this hope gives me each day.",
            "date":"26/10/2024",
            "author":"Dr. Ayo OGUNSAN",
            "source":"",
            "category":"spiritual"
        },
        {
            "text":"A person tied to the world of sorrows can return to nature for inspiration. Nature provides solace to troubled hearts. Anyone can give you attention and compliments, but someone who loves you will give you that plus respect, honesty, trust, and loyalty. A hero is no braver than an ordinary man, but he is brave five minutes longer. Just because you are struggling doesn't mean you're failing. Never give up on your dreams. The Lord will support you. Good morning",
            "date":"26/10/2024",
            "author":"Dr. Ayo OGUNSAN",
            "source":"",
            "category":"personal"
        }
    ];

    const videoContent = [
        {
            id: 1,
            title: "Are you a kingdom ambassador or a comfortable negotiator?",
            thumbnail: "https://media.licdn.com/dms/image/v2/D4D05AQGVK0bGVr2reg/feedshare-thumbnail_720_1280/feedshare-thumbnail_720_1280/0/1702536301527?e=1736582400&v=beta&t=QO3PLrSowPGGYmvDJpWvvZKM68sQegySC3nzayMdwoQ",
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
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                        <div
                            className="relative cursor-pointer group"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setSelectedVideo({...video, autoPlay: true});
                            }}
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