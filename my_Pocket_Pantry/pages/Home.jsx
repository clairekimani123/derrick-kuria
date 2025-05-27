import React from 'react'

const Home = () => {
  return (
    <div className="bg-white-600 min-h-screen p-0"> 
    <nav>
        <div className="flex justify-between items-center p-4 bg-blue-800 text-white">
            <div className="text-2xl font-bold">Pocket Pantry</div>
            <ul className="flex space-x-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
        </div>
    </nav>
        <h1 className="text-3xl font-bold mb-20 justify-center">Welcome to Pocket Pantry</h1>
        <p className="text-2xl text-size-7.5erm mx-auto">Welcome to the Pocket Pantry a website which saves your leftovers from wasting then, the website turn your leftover ingredents to something great and delicious</p>


      
    </div>
  )
}

export default Home
