import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
function Pdt()
{
  return (
    <div>
      <div id="sec1">
        <h1>boAt Bassheads 242 in Ear Wired Earphones with Mic</h1>
        <img id="im" src="boatblue.jpg" alt=" "/>
      </div>
      <div id="sec2">
        <a href=" ">Visit the boAt Store</a><br></br>
        <section>
        <img class="im1" src="4.5star.png" alt=" "/><p class="p1">168,288 ratings</p>
        </section>
        <span class="s1">-62%</span><span class="s2">₹529</span><br></br>
        <span class="s3">M.R.P: </span><span class="s4">₹1,490</span><br></br>
        <p class="p2">Choose Color:</p>
        <div id="btn1">
          <input type="button" style={{color:"blue"}} value="blue" onClick={Blue}/>
          <input type="button" style={{color:"black"}} value="black" onClick={Black}/>
          <input type="button" style={{color:"yellow"}} value="lime" onClick={Lime}/><br></br>
          <input type="button" style={{color:"orange"}} value="orange" onClick={Orange}/>
          <input type="button" style={{color:"red"}} value="red" onClick={Red}/>
          <input type="button" style={{color:"lime"}} value="neon green" onClick={NeonGreen}/>
        </div>
        <table id="t1">
          <tr><strong><td>Brand:</td></strong><td>boAt</td></tr>
          <tr><strong><td>Model Name:</td></strong><td>Bassheads 242</td></tr>
          <tr><strong><td>Headphone Type:</td></strong><td>In ear</td></tr>
          <tr><strong><td>Connector Type:</td></strong><td>3.5 mm jack</td></tr>
        </table>
        <input type="button" id="btn2" value="Add to Cart"/><br></br>
        <input type="button" id="btn3" value="Buy Now"/>
      </div>
    </div>
  );
  function Blue()
  {
    document.getElementById('im').src="boatblue.jpg";
  }
  function Black()
  {
    document.getElementById('im').src="boatblack.jpg";
  }
  function Lime()
  {
    document.getElementById('im').src="boatlime.jpg";
  }
  function Orange()
  {
    document.getElementById('im').src="boatorange.jpg";
  }
  function Red()
  {
    document.getElementById('im').src="boatred.jpg";
  }
  function NeonGreen()
  {
    document.getElementById('im').src="boatneon.jpg";
  }
}
ReactDOM.render(<Pdt/>,document.getElementById('root'));
