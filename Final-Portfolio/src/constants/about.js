import block from '../assets/blochaintwo.png'
import backend from '../assets/db2.jpg'
import front from '../assets/front.webp'
import ux from '../assets/ux.avif'
import shopfinity from '../assets/shopfinity.png'
import todos from '../assets/todos.png'
import math from '../assets/math.png'
import event from '../assets/event.png'


export const abouts = [
    {title: 'Front-End Development', description: 'm a skilled software developer with experience in JavaScript', imgUrl: front},
    {title: 'Back-End Development', description: 'good web dev', imgUrl: backend},
    {title: 'Blockchain Development', description: 'good web dev', imgUrl: block},
    {title: 'UI/UX', description: 'good web dev', imgUrl: ux},
  ]

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
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
    // {
    //   name: "Book Store",
    //   description:
    //     "A book store website displays a list of books, add new book and remove selected book.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "redux",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: bookstore,
    //   live_demo: "https://booky-store.netlify.app/",
    //   source_code_link: "https://github.com/johnie261/Book-store/",
    // },
    {
      name: "Book Store",
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
  /*  {
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
      image: bookstore,
      live_demo: "https://booky-store.netlify.app/",
      source_code_link: "https://github.com/johnie261/Book-store/",
    }, */
    {
      name: "Concert Web",
      description:
        "An online website which displays information and details about a musical concert.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "SCSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: event,
      live_demo: "https://johnie261.github.io/Concert-Web/",
      source_code_link: "https://github.com/johnie261/Book-store/",
    },
  ];