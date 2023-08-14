import block from '../assets/blochaintwo.png'
import backend from '../assets/db2.jpg'
import front from '../assets/front.webp'
import ux from '../assets/ux.avif'
import shopfinity from '../assets/shopfinity.png'
import todos from '../assets/todos.png'
import math from '../assets/math.png'
import event from '../assets/event.png'
import gampling from '../assets/gampling.png'
import raffle from '../assets/raffle.png'
import campaigns from '../assets/campaigns.png'
import uniswap from '../assets/uniswap.png'
import expense from '../assets/expense.png'
import booky from '../assets/booky.png'
import ricky from '../assets/ricky.png'

import css from '../assets/tech/css.png'
import ethCurrency from '../assets/tech/ethCurrency.png'
import ethers from '../assets/tech/ethers2.com.png'
import git from '../assets/tech/git.png'
import hardhat from '../assets/tech/hardhat2.png'
import html from '../assets/tech/html.png'
import javascript from '../assets/tech/javascript.png'
import jest from '../assets/tech/jest.png'
import metamask from '../assets/tech/metamask-icon.png'
import moralis from '../assets/tech/moralisLogoBrand2.png'
import nextjs from '../assets/tech/nextjs-icon.png'
import postgresql from '../assets/tech/postgresql.png'
import react from '../assets/tech/reactjs.png'
import redux from '../assets/tech/redux.png'
import rails from '../assets/tech/ruby-on-rails-icon.png'
import ruby from '../assets/tech/ruby.png'
import scss from '../assets/tech/sass.png'
import solidity from '../assets/tech/solidity-icon.png'
import tailwind from '../assets/tech/tailwind.png'
import thirdweb from '../assets/tech/thirdweb.png'
import typescript from '../assets/tech/typescript.png'

export const abouts = [
    {title: 'Front-End Development', description: 'm a skilled software developer with experience in JavaScript', imgUrl: front},
    {title: 'Back-End Development', description: 'good web dev', imgUrl: backend},
    {title: 'Blockchain Development', description: 'good web dev', imgUrl: block},
    {title: 'UI/UX', description: 'good web dev', imgUrl: ux},
  ]

export const technologies = [
    {
      name: "HTML5",
      icon: html,
    },
    {
      name: "CSS3",
      icon: css,
    },
    {
      name: "Scss",
      icon: scss
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: react,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Next js",
      icon: nextjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "jest",
      icon: jest,
    },
    {
      name: "Postgres",
      icon: postgresql,
    },
    {
      name: "Ruby",
      icon: ruby,
    },
    {
      name: "Rails",
      icon: rails,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "solidity",
      icon: solidity,
    },
    {
      name: "Ethers js",
      icon: ethers,
    },
    {
      name: "Ethereum",
      icon: ethCurrency,
    },
    {
      name: "Thirdweb",
      icon: thirdweb,
    },
    {
      name: "Moralis",
      icon: moralis,
    },
    {
      name: "Hardhat",
      icon: hardhat,
    },
    {
      name: "Metamask",
      icon: metamask,
    },
  ];

export const projects = [
    {
      name: "ShopFinity",
      description:
        "An e-commerce website incorporating features such as product listings, shopping cart functionality, secure payment processing, and order management",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "context-API",
          color: "green-text-gradient",
        },
        {
          name: "styled-components",
          color: "pink-text-gradient",
        },
      ],
      image: shopfinity,
      live_demo: "https://shopfinity.netlify.app/",
      source_code_link: "https://github.com/johnie261/shopFinity",
    },
    {
      name: "Math Magician",
      description:
        "Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations, read a random quote.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: math,
      live_demo: "https://mathmagicianrct.netlify.app/",
      source_code_link: "https://github.com/johnie261/Math-magician",
    },
    {
      name: "Book Store",
      description:
        "A book store website displays a list of books, add new book and remove selected book.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        
      ],
      image: booky,
      live_demo: "https://booky-store.netlify.app/",
      source_code_link: "https://github.com/johnie261/Book-store/",
    },
    {
      name: "To-do List",
      description:
        "This application lets us add to-dos, edit, and delete items. It also persists to-dos in the browser's local storage for a subsequent visit.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: todos,
      live_demo: "https://reactjs-todo-pp.netlify.app/",
      source_code_link: "https://github.com/johnie261/Todo-React",
    },
    {
      name: "Book a reservation",
      description:
        "This is a full-stack web app that let users see list of glampings, see the details of each glamping, make a reservation, add and delete a glamping you login as 'john'",
      tags: [
        {
          name: "ruby on rails",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "redux",
          color: "pink-text-gradient",
        },
        {
          name: "Postgres",
          color: "blue-text-gradient",
        },
      ],
      image: gampling,
      live_demo: "https://g-reservations.netlify.app/",
      source_code_link: "https://github.com/johnie261/book-a-reservation-frontend",
    }, 
    {
      name: "Expenses Tracker",
      description:
        "EXpense tracker is a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.",
      tags: [
        {
          name: "ruby on rails",
          color: "blue-text-gradient",
        },
        {
          name: "Postgres",
          color: "green-text-gradient",
        },
        {
          name: "Css",
          color: "pink-text-gradient",
        },
      ],
      image: expense,
      live_demo: "https://johnie261.github.io/Concert-Web/",
      source_code_link: "https://github.com/johnie261/expenses_tracker",
    },
    {
      name: "Rick and Morty Characters",
      description:
        " project provides a complete database of characters from the show, accessed through the Rick and morty API. Users can interact with the characters by liking or commenting, creating an engaging and interactive experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: ricky,
      live_demo: "http://nicolasolaya.me/Rick-and-Morty-Characters/",
      source_code_link: "https://github.com/NicolasAndrehh/Rick-and-Morty-Characters",
    },
    {
      name: "uniswap clone",
      description:
        "A simple uniswap clone where a person can transfer cryptocurrencies between wallets, also a person is able to see the latest transactions done.",
      tags: [
        {
          name: "web3",
          color: "blue-text-gradient",
        },
        {
          name: "solidity",
          color: "green-text-gradient",
        },
        {
          name: "next js",
          color: "pink-text-gradient",
        },
        {
          name: "context api",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "hardhat",
          color: "pink-text-gradient",
        },
        {
          name: "ethers js",
          color: "blue-text-gradient",
        },
      ],
      image: uniswap,
      live_demo: "https://uniswap-blockchain-one.vercel.app/",
      source_code_link: "https://github.com/johnie261/uniswap",
    },
    {
      name: "Fundraiser web3 app",
      description:
        "A crowdfunding web3 app where a person can create their own campaign, view available campaigns and donate crowdfunding campaigns directly through the blockchain.",
      tags: [
        {
          name: "web3",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "context api",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind",
          color: "blue-text-gradient",
        },
        {
          name: "solidity",
          color: "green-text-gradient",
        },
        {
          name: "thirdweb",
          color: "pink-text-gradient",
        },
        {
          name: "metamask",
          color: "blue-text-gradient",
        },
      ],
      image: campaigns,
      live_demo: "https://crypt-fundraisers.netlify.app/",
      source_code_link: "https://github.com/johnie261/fundraiser",
    },
    {
      name: "Lottery web3 app",
      description:
        "a web3 lottery application where the owner of the contract can put an NFT up to be raffled. Users can then purchase raffle entries and the owner can then select a random winner.",
      tags: [
        {
          name: "web3",
          color: "blue-text-gradient",
        },
        {
          name: "solidity",
          color: "green-text-gradient",
        },
        {
          name: "next js",
          color: "pink-text-gradient",
        },
        {
          name: "thirdweb",
          color: "blue-text-gradient",
        },
        {
          name: "chakra ui",
          color: "green-text-gradient",
        },

        {
          name: "typescript",
          color: "pink-text-gradient",
        },
        {
          name: "metamask",
          color: "blue-text-gradient",
        },
      ],
      image: raffle,
      live_demo: "https://raffleapp.vercel.app/",
      source_code_link: "https://github.com/johnie261/Raffles",
    },
  ];