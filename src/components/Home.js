import React from 'react';
import '../components/Home.css';


const Home = () => {
  return (
    <div>
      <div className='header'>
        <nav>
            <a href='/ '>Home</a>
            <a href='/'>login</a>
            <a href='/'>singup</a>
            <a href='/'>contact</a>
            
        </nav>
        
      </div>
      <div className='home'>
          <div className='login'>
            <div className=''>
               <label>email</label>
               <input type='email' placeholder='email'/>
            </div>
            <div className=''>
               <label>password</label>
               <input type='password' placeholder='password'/>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Home;
