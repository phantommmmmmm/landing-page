import React from 'react'

function Contact() {
  return (
    <>
    <div className='contact'>
        <main>
            <h1>Contact Us</h1>

            <form >
                <div>
                    <label>Name</label>
                    <input type='text' required placeholder='abc'></input>
                </div>

                <div>
                    <label>Email</label>
                    <input type='email' required placeholder='Yourname@you.com'></input>
                </div>

                <div>
                    <label>Message</label>
                    <input type='text' required placeholder='Hello'></input>
                </div>

                <button type='submit'>Send</button>
            </form>
        </main>

    </div>
    </>
  )
}

export default Contact