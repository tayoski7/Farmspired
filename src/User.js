import React from 'react';
import avatar from './avatar.png'


import './user.css'


const User =()=>{
    return <div className="Card">


                <div>
                    <img src={avatar} alt="" width="200"/>

                    {/* this should work when merged with David's code
                     since he implemented font awesome icons.
                     Just remove the text when merged and let the icons take up the space */}

                    <a href="" className="fa fa-twitter">Twitter</a>
                    <a href="" className="fa fa-facebook">Facebook</a>
                    <a href="" className="fa fa-linkedin">Linkedin</a>
                    
                </div>

                <div>
                    <h2>JOHN DOE</h2> <button>Edit profile</button>
                    <h4>Farmer and Structural Engineer</h4>
                    <p>A little description about me.I am a ceo of 3 companies.One in russia,one in Lagos and another 
                    in Markovia.<br></br>I speak 3 languages fluently and i am interested in yadi yidi yada</p>
                </div>



        
        </div>
}


export default User;