import React, { Component } from 'react'
import gamebanner1 from '../media/game-banner1.jpg'
import hayday1 from '../media/hayday1.jpg'
import coc from '../media/coc.jpg'
import boombeach from '../media/boombeach.jpg'
import clashroyale from '../media/clashroyale.jpg'
import brawlstars from '../media/brawlstars.jpg'
const games = () => {
    return (
      <div>
      <img src={gamebanner1} alt="banner1" style={{width:'100%'}}>
      <div style={{fontSize:'50px', color:'black', fontWeight:'bolder'}}>GAMES</div>
      <div style={{fontSize:'20px', color:'black', marginTop:'20px', marginBottom:'80px'}}>GAMES</div>
      <button style={{fontSize:'20px', background:'#0000FF', borderRadius:'9px'}} >All Games</button>
      </img>
      <div className="row">
      <div className="column">
      <img src={hayday1}> </img>
      <div>FARM WITH FRIENDS AND FAMILY</div>
      <div>HAY DAY</div>
      </div>
      <div className="column">
      <img src={brawlstars}> </img>
      <div>3V3 AND BATTLE ROYALE</div>
      <div>BRAWL STARS</div>
      </div>
      
      </div>
      <div className="row">
      <div className="column">
      <img src={coc}> </img>
      <div>LEAD YOUR CLAN TO VICTORY!</div>
      <div>CLASH OF CLANS</div>
      </div>
      <div className="column">
      <img src={boombeach}> </img>
      <div>BUILD. PLAN. BOOM!</div>
      <div>BOOM BEACH </div>
      </div>
      
      </div>
      <div className="row">
      <div className="column">
      <img src={clashroyale}> </img>
      <div>EPIC REAL-TIME CARD BATTLES</div>
      <div>CLASH ROYALE</div>
      </div>
      </div>

      </div>
    );
  };
  
  export default games;