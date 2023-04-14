import React, {useState} from 'react'


const dinning = () => {
  const [menu, setMenu] = useState(false)
  const [reserve, setReserve] = useState(false)
  const handleDinner = () => {
    if (menu) {
      setMenu(false)
      setReserve(true)
    } else {
      setReserve(true)
    }
  }
  
  const handleMenu = () => {
    if (reserve) {
      setReserve(false)
      setMenu(true)
    } else {
      setMenu(true)
    }
    
  }
    return (
    
      <div className='flex'>
       <div className="h-screen bg-center bg-cover bg-no-repeat bg-[url('/images/dinning.jpg')] bg-white/40 bg-blend-overlay flex flex-col gap-6 justify-center items-center">
        <h1 className='text-7xl font-bold text-white text-center'>Exquisite Dinner</h1>
          <a href='#form' onClick={handleDinner} className='border px-8 py-2 text-xl font-medium bg-orange-600 text-white'>Make a Reservation</a>
          <a href='#menu' onClick={handleMenu} className='border px-8 py-2 text-xl font-medium bg-orange-600 text-white'>Check out the Menu</a>
        </div>

        <div id='menu' className={menu ? 'block my-4' : 'hidden'}>

        <h2 className='text-center py-4 font-bold text-3xl text-orange-500'>Menu</h2>
        <div className='grid grid-cols-2 py-4 px-8 gap-4'>
          <div className='bg-gray-100/50'>
          <h2 className='bg-gray-200 py-2 font-semibold px-2'>CALIFORNIA TURKEY (OR BEEF)</h2>
          <p className='px-2'>Roast turkey or beef, green chile, melted pepper jack, the works, avocado, toasted sliced sourdough.</p>
          </div>
          <div className='bg-gray-100/50'>
          <h2 className='bg-gray-200 py-2 font-semibold px-2'>DUTCH PUNCH</h2>
          <p className='px-2'>Smoked turkey, extra bacon, jalapeño havarti, red onion, tomato, romaine, avocado, chipotle mayo, Dutch crunch.</p>
          </div>
          <div className='bg-gray-100/50'>
          <h2 className='bg-gray-200 py-2 font-semibold px-2'>HOT PASTRAMI</h2>
          <p className='px-2'>Lean roast pastrami, melted Swiss, the works, pepperoncini, toasted sliced sourdough.</p>
          </div>
          <div className='bg-gray-100/50'>
          <h2 className='bg-gray-200 py-2 font-semibold px-2'>NEW YORK</h2>
          <p className='px-2'>Pastrami, melted Swiss, extra meat, extra cheese, mayo, dijon, yellow mustard, extra pickle, toasted sliced rye.</p>
          </div>
          <div className='bg-gray-100/50'>
          <h2 className='bg-gray-200 py-2 font-semibold px-2'>SPRING CLUB</h2>
          <p className='px-2'>Roast turkey, bacon, melted cheddar, ranch, shrettuce, cucumber, tomato, mayo, French roll.</p>
          </div>
          <div className='bg-gray-100/50'>
          <h2 className='bg-gray-200 py-2 font-semibold px-2'>ITALIAN SUB</h2>
          <p className='px-2'>Genoa salami, capicola, dry salami, sharp provolone, the works, pepperoncini, oregano, French roll.</p>
          </div>
          <div className='bg-gray-100/50'>
          <h2 className='bg-gray-200 py-2 font-semibold px-2'>NASHVILLE CLUB</h2>
          <p className='px-2'>Smoked turkey, black forest ham, bacon, smoked gouda, the works, BBQ sauce, ranch, jalapeño, toasted sliced sourdough.</p>
          </div>
          <div className='bg-gray-100/50'>
          <h2 className='bg-gray-200 py-2 font-semibold px-2'>CHIPOTLE BEEF</h2>
          <p className='px-2'>Roast beef, melted pepper jack, tomato, avocado, red onion, chipotle mayo, toasted sliced sourdough.</p>
          </div>
          <div className='bg-gray-100/50'>
          <h2 className='bg-gray-200 py-2 font-semibold px-2'>TURKEY PESTO</h2>
          <p className='px-2'>Roast turkey, melted sharp provolone, homemade basil pesto, mayo, tomato, romaine, French roll.</p>
          </div>
          <div className='bg-gray-100/50'>
            <h2 className='bg-gray-200 py-2 font-semibold px-2'>HIGHZENBURGER</h2>
            <p className='px-2'>Homemade meatloaf, bacon, melted cheddar, chipotle mayo, BBQ sauce, the works, romaine, brioche bun.</p>
          </div> 
        </div>
        </div>
        
        <div id='form' className={!reserve? 'hidden': 'block w-full md:w-1/2 border-2 border-gray-400 my-4 m-auto'}>
        <div className='bg-orange-600 py-3 text-white font-semibold text-2xl text-center'>Make a Reservation</div>
        <form className='py-8 px-4  flex flex-col gap-6'>
          <div className='w-full'>
            <label htmlFor='table' className='text-lg'>Table type</label>
            <select id='table' className='w-1/2 border py-2'>
              <option defaultChecked></option>
              <option>table for 2</option>
              <option>table for 4</option>
              <option>group of 6</option>
              <option>More than 6</option>
            </select>
          </div>
          <input type='text' placeholder='Name on Reservation' className='w-full p-3 border'/>
          <div className='border p-3'>
          <label htmlFor='date'>Date</label>
          <input id='data' type='date' />
          </div>
          <div className='max-w-full'>
            <fieldset className='border-2 flex gap-4 p-4 max-w-full flex-wrap'>
            <legend>Available time on </legend>
            <div className='flex items-center gap-2 px-2 bg-gray-100'>
              <input type='radio' name='time' id='ist'/>
              <label htmlFor='ist'>6:00pm</label>
            </div>
            <div className='flex items-center gap-2 px-2 bg-gray-100'>
              <input type='radio' name='time' id='snd' />
              <label htmlFor='snd'>7:30pm</label>
            </div>
            <div className='flex items-center gap-2 px-2 bg-gray-100'>
              <input type='radio' name='time' id='thrd'/>
              <label htmlFor='thrd'>8:00pm</label>
            </div>
            <div className='flex items-center gap-2 px-2 bg-gray-100'>
              <input type='radio' name='time' id='frt'/>
              <label htmlFor='frt'>9:00pm</label>
            </div>
            <div className='flex items-center gap-2 px-2 bg-gray-100'>
              <input type='radio' name='time' id='fift' />
              <label htmlFor='fift'>9:30pm</label>
            </div>
            </fieldset>
          </div>
          <button className='bg-gradient-to-l from-orange-500 from-50% to-black to-50% hover:bg-left bg-orange-500 px-6 py-2 text-white'>Submit</button>

        </form>

        </div>
       
      </div>   
  
    
  )
}

export default dinning