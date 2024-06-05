import React from 'react'

function Contact() {
  return (
    <div className='grid place-items-center grid-cols-1 sm:grid-cols-2 mt-4 sm:my-36'>
      <div className='bg-blue-100 rounded-2xl'>
        <div className='p-4'>
        <h1 className='text-[22px] font-bold mb-1'> Get in touch:</h1>
        <p>Fill in the form to start a conversation</p>

        <div className='mt-6'>Acme Inc, Street, State, Postal Code</div>
        <div className='flex mt-2'>
          <img className='h-6 mr-4' src='/img/call.jpeg' />
          <p>+44 1234567890</p>
        </div>
        {/* home */}
        <div className='flex mt-2'>
          <img className='h-6 mr-4' src='/img/home.jpeg' />
          <p>info@acme.org</p>
        </div>
        </div>
      </div>

      <div>
        <form onSubmit={e=>{e.preventDefault()}}>
<input type='text' placeholder='Enter Yours Name'  className='border rounded-lg border-black p-2 text-[22px] border-opacity-20 w-96'></input><br></br>
<input type='number' placeholder='Enter Yours Phone Number' className='border border-black p-2 text-[22px] mt-2 border-opacity-20 rounded-lg w-96'></input><br></br>
<input className='px-2 py-1 bg-blue-500 mt-2 rounded-2xl' type='submit'/>
        </form>
      </div>
    </div>
  )
}

export default Contact
