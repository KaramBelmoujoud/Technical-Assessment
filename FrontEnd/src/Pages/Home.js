import React from 'react';

function Home() {
    return (
    <div className='flex min-h-screen flex-col items-center justify-evenly p-24'>
            <div class="box-border shadow-black bg-white shadow-lg rounded-md">
            <p class="relative flex text-5xl m-12 text-black ">
                Users Information Display
                </p>
            </div>
      <form action="/users" className=''>
         <button type="submit" className='bg-blue-500 hover:bg-blue-400 text-white text-2xl font-bold py-4 px-8 border-b-4 border-blue-700 hover:border-blue-500 rounded'>Show users</button>
      </form>
            
    </div>
    );
}

export default Home;