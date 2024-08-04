import React from 'react'
import vg from '../assets/2.webp'
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai";


function Home() {
  return (
    <> 
        <div className='home' id='home'>
            <main>
                <h1>Portronics </h1>
                <p>Pure Bass Wireless</p>
            </main>
         </div>

        <div className='home2'>
            <img src={vg} alt="Graphics"></img>

            <div>
                <p>
                    We are your one and only solution to the tech problem you face every day. We are leading a tech company whose aim is to increase the problem solving ability in childern.
                </p>
            </div>
        </div>

        <div className='home3' id='about'>
            <div>
                <h1>Who we are?</h1>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti maxime, quaerat deserunt doloremque blanditiis ducimus, minus numquam ut cupiditate sit dolorum doloribus assumenda, quo reiciendis!
                </p>
            </div>

        </div>

        <div className='home4' id='brands'>
            <div>
                <h1>Brands</h1>
                <article>
                    <div style={{animationDelay:'0.3s'}}>
                        <AiFillGoogleCircle />
                        <p>Google</p>
                    </div>

                    <div style={{animationDelay:'0.5s'}}>
                        <AiFillAmazonCircle />
                        <p>Amazon</p>
                    </div>

                    <div style={{animationDelay:'0.7s'}}>
                        <AiFillYoutube />
                        <p>Youtube</p>
                    </div>

                    <div style={{animationDelay:'0.9s'}}>
                        <AiFillInstagram />
                        <p>Instagram</p>
                    </div>
                </article>
            </div>

        </div>
         
    </>   
  )
}

export default Home