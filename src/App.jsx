import { useState } from 'react'
import Card from './component/Card'

import './App.css'

function App() {
  const cardData = [
    {
      id:1,
      title: "Card 1",
      discription:"This is card one",
      image:"/img1.avif"
    },
    {
      id:2,
      title: "Card 2",
      discription:"This is card one",
      image:"/img2.avif"
    },
    {
      id:3,
      title: "Card 3",
      discription:"This is card one",
      image:"/img3.avif"
    },
    {
      id:4,
      title: "Card 4",
      discription:"This is card one",
      image:"/img4.avif"
    },
    {
      id:5,
      title: "Card 5",
      discription:"This is card one",
      image:"/img10.avif"
    },
    {
      id:6,
      title: "Card 6",
      discription:"This is card one",
      image:"/img6.avif"
    },
    {
      id:7,
      title: "Card 7",
      discription:"This is card one",
      image:"/img7.avif"
    },
    {
      id:8,
      title: "Card 8",
      discription:"This is card one",
      image:"/img8.avif"
    },
    {
      id:9,
      title: "Card 9",
      discription:"This is card one",
      image:"/img9.avif"
    },
    {
      id:10,
      title: "Card 10",
      discription:"This is card one",
      image:"/img5.avif"
    },
  ]

  return (
    <>
      <div className='bg-black min-h-screen py-14 px-12'>
        <h2 className='text-center text-indigo-400 text-3xl mb-10'>All the cards are here</h2>


          <div className="mx-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            {cardData.map((item) =>(
              <Card 
              key={item.id}
              title={item.title}
              discription={item.discription}
              image={item.image}
              />
            ))}
          
          </div>
      </div>

      
    </>
  )
}

export default App
