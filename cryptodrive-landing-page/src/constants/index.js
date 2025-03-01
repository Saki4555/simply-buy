import { bitcoinIcon, ethereumIcon, solanaIcon, dogeCoinIcon, bitcoinChart, ethereumChart, solanaChart, dogeCoinChart } from "../assets";
export const NAV_ITEMS = ["Home", "Trade", "Market", "Learn", "Support"];
export const FEATURED_CARDS_DATA = [
    {"id": 1, "text": "Learn Crypto"},
    {"id": 2, "text": "Learn Earn"},
    {"id": 3, "text": "How To Tred"},
    {"id": 4, "text": "Build Portfolio"}
  ]


  export const INFO_CARDS_DATA = [
    {
      id: 1,
      title: "Let's learn How crypto Currency Work?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit - Time data",
      buttonText: "Learn More",
    },
    {
      id: 2,
      title: "Let’s learn How crypto Currency Work?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit - Time data",
      buttonText: "Learn More",
    },
    {
      id: 3,
      title: "Let’s learn How crypto Currency Work?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit - Time data",
      buttonText: "Learn More",
    },
    {
      id: 4,
      title: "Let’s learn How crypto Currency Work?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit - Time data",
      buttonText: "Learn More",
    },
    {
      id: 5,
      title: "Let’s learn How crypto Currency Work?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit - Time data",
      buttonText: "Learn More",
    },
    {
      id: 6,
      title: "Let’s learn How crypto Currency Work?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit - Time data",
      buttonText: "Learn More",
    },
  ];
  

  export const FAQS_DATA = [
    {
      id: 1,
      question: "What is cryptocurrency?",
      answer: "Cryptocurrency is a digital currency secured by cryptography and operating on decentralized networks."
    },
    {
      id: 2,
      question: "What is a blockchain?",
      answer: "A blockchain is a distributed ledger that records transactions across a network of computers."
    },
    {
      id: 3,
      question: "What is a cryptocurrency wallet?",
      answer: "A cryptocurrency wallet is a digital tool for storing, sending, and receiving cryptocurrencies."
    },
    {
      id: 4,
      question: "How do I start investing in cryptocurrency?",
      answer: "Choose a reliable exchange, create an account, complete verification, deposit funds, and buy cryptocurrencies."
    },
    {
      id: 5,
      question: "How do I keep my cryptocurrency secure?",
      answer: "Use strong passwords, enable two-factor authentication, and store your crypto in reputable wallets."
    },
    {
      id: 6,
      question: "What are the most popular cryptocurrencies?",
      answer: "Popular cryptocurrencies include Bitcoin, Ethereum, Binance Coin, Cardano, and Solana."
    }
  ];

  export const CRYPTO_MARKET_DATA = [
    {
      id: 1,
      name: "Bitcoin",
      icon: bitcoinIcon,
      currency: "USD",
      change: "+14.04%",
      price: "49,645 Inr",
      chart: bitcoinChart,
      bgColor: 'bg-yellow-400/10',
      position: 'absolute left-1/6 top-16',
    },
    {
      id: 2,
      name: "Ethereum",
      icon: ethereumIcon,
      currency: "USD",
      change: "+43.04%",
      price: "36,675 Inr",
      chart: ethereumChart,
      bgColor: 'bg-purple-400/10',
      position: 'absolute left-1/5 top-52', 
    },
    {
      id: 3,
      name: "Solana",
      icon: solanaIcon,
      currency: "USD",
      change: "-14.23%",
      price: "1,456 Inr",
      chart: solanaChart,
      bgColor: 'bg-green-400/10', 
      position: 'absolute right-1/4 top-60',
    },
    {
      id: 4,
      name: "Doge",
      icon: dogeCoinIcon,
      currency: "USD",
      change: "+17.06%",
      price: "41,645 Inr",
      chart: dogeCoinChart,
      bgColor: 'bg-red-400/10', 
      position: 'absolute right-1/6 top-16',
    },
  ];


  export const PAGE_CONTENT = {
    heroSection: {
      heading: "Secure & Intuitive Crypto Trading",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    marketSection: {
      heading: "Crypto Market Trade And Metrics",
      text: ""
    },
    learnCryptoSection: {
      heading: "Let's Know How Crypto Works",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    faqSection: {
      heading: "Frequently Asked Questions",
      text: "Follow design trends and continually update your skills by learning new tools and techniques."
    },
    contactSection: {
      heading: "Get It On The Crypto Action",
      text: "Provide easy access to customer support through chatbots or live chat features."
    }
  };