import React from "react";
import reuse from './reuse.webp';
import buy from './but.png';
import repair from './repair.png';
import sell from './sell.jpeg';
import refurbish from './refurbish.png';
import promise from './promise.webp';
import reuses from './reusess.webp';
import earth from './what appp.webp'
import waste from './waste.webp'
import garbage from './garbage.webp'
import mandeep from './mandeep.webp'
import amit from './amit.webp'
import nakul from './nakul.webp'
import siddhant from './siddhant.webp'
import join from './join us.webp'
import s from './phone.png';

function About() {
  return (
    <div className="abc">
      {/* Reuse Section */}
      <div style={{
        backgroundColor: 'grey', // Cashify-style background
        width: '100%',
        minHeight: '500px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '50px 10%',
        flexWrap: 'wrap'
      }}>
        {/* Left Side - Text */}
        <div style={{
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start'
        }}>
          <h1 style={{ color: 'white', fontSize: '48px', fontWeight: 'bold', marginBottom: '10px' }}>
            Reuse & Reduce.
          </h1>
          <p style={{
            color: 'white',
            fontSize: '20px',
            maxWidth: '400px',
            marginBottom: '20px'
          }}>
            Our grandparents lived a sustainable life, long before sustainability was even a concept!
          </p>
          {/* Resized Image */}
          <img src={reuses} alt="Reuse" style={{ 
            width: '250px', // Reduced size
            marginTop: '20px' 
          }} />
        </div>

        {/* Right Side - Image */}
        <div style={{
          width: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <img src={reuse} alt="image" style={{ width: '90%', maxWidth: '100%' }} />
        </div>
      </div>

      {/* Marquee Text Section */}
      <div style={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        marginTop: '50px',
        fontSize: '60px', // Reduced font size for balance
        fontWeight: 'bold',
        letterSpacing: '2px',
        color: 'black',
        display: 'flex',
        alignItems: 'center'
      }}>
        <marquee behavior="scroll" direction="left" scrollamount="10">
          BUY. REPAIR. SELL. REFURBISH. BUY. REPAIR. SELL. REFURBISH. BUY. REPAIR. SELL. REFURBISH.
        </marquee>
      </div>

      {/* Image Section */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '30px',
        gap: '20px'
      }}>
        <img src={buy} alt="Buy" style={{ width: '180px', height: '180px', borderRadius: '15px' }} />
        <img src={repair} alt="Repair" style={{ width: '180px', height: '180px', borderRadius: '15px' }} />
        <img src={sell} alt="Sell" style={{ width: '180px', height: '180px', borderRadius: '15px' }} />
        <img src={refurbish} alt="Refurbish" style={{ width: '180px', height: '180px', borderRadius: '15px' }} />
      </div>

      {/* Passion Section */}
      <h4 style={{ textAlign: 'center', marginTop: '30px', fontSize: '18px', color: '#333' }}>Our Passion</h4>
      <h1 style={{
        textAlign: 'center',
        marginBottom: '30px',
        maxWidth: '80%',
        margin: 'auto',
        fontSize: '32px',
        fontWeight: 'bold'
      }}>
        Building a world where tech doesn’t need to cost the pocket or the planet.
      </h1>

      {/* Promise Section */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '20px',
        padding: '20px'
      }}>
        <div style={{ width: '50%' }}>
          <h4 style={{ textAlign: 'left' }}>Our Promise</h4>
          <h1 style={{ textAlign: 'left', color: '#555' }}>
          Adding “right way” to business for the planet and the people who live on it..
          </h1>
        </div>
        <div style={{ width: '50%' }}>
          <img src={promise} alt="Promise" style={{ width: '80%', borderRadius: '10px' }} />
        </div>
      </div>
      <div
  style={{
    display: "flex",
    justifyContent: "left",
    alignItems: "left",
    height: "auto", // Height ko auto kiya taake unnecessary space na ho
    marginTop: "-100px", // Space reduce karne ke liye negative margin
    marginLeft: "35px",
  }}
>
  <img
    src={earth}
    alt="Rotating Earth"
    style={{
      width: "200px",
      height: "200px",
      animation: "rotate 5s linear infinite",
    }}
  />
  <style>
    {`
      @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `}
  </style>
</div>

{/* Last Section - Our Principle */}
<div
  style={{
    width: "100%",
    height: "600px", // Thoda adjust kiya taake content fit ho
    backgroundColor: "#f4f4f4",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "30px", // Padding kam ki hai taake space minimize ho
    marginTop: "-150px", // Aur close lane ke liye negative margin
  }}
>
  {/* Left Side - Text */}
  <div style={{ width: "50%", textAlign: "center" }}>
    <h4 style={{ fontWeight: "bold", color: "#333", marginBottom: "10px" }}>
      OUR PRINCIPLE
    </h4>
    <h1 style={{ fontWeight: "bold", color: "#555", textAlign: "center", maxWidth: "500px" }}>
      Somebody’s waste is someone else’s resource
    </h1>
  </div>

  {/* Right Side - Image */}
  <div style={{ width: "50%", display: "flex", justifyContent: "flex-end" }}>
    <img src={waste} alt="Waste" style={{ width: "500px", borderRadius: "10px" }} />
  </div>
</div>
{/* Garbage Image - Rotating and Positioned to Right */}
<div
  style={{
    display: "flex",
    justifyContent: "flex-end", // Right side position
    alignItems: "center",
    marginTop: "-100px", // Space reduce karne ke liye negative margin
    marginRight: "50px", // Thoda right margin for spacing
  }}
>
  <img
    src={garbage}
    alt="Rotating Garbage"
    style={{
      width: "150px", // Size chota kar diya
      height: "150px",
      animation: "rotate 5s linear infinite",
    }}
  />
  <style>
    {`
      @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `}
  </style>
</div>
{/* Our History Section */}
<div
  style={{
    textAlign: "center", // Center align text
    marginTop: "50px", // Space above
  }}
>
  <h1
    style={{
      fontSize: "48px", // Bigger size
      fontWeight: "bold",
      color: "#333",
    }}
  >
    Our History
  </h1>
  <h4>We have grown from a team of 3 to an organization of 2000, but our vision remains the same -</h4>

  <h3 style={{
    fontWeight:"bold"
  }}>ROBUST SUSTAINABILITY</h3>

</div>
{/* History Timeline Section */}
<div style={{
  display: "grid",
  gridTemplateColumns: "1fr 1fr", // Two equal columns
  gap: "50px", // Equal spacing between items
  width: "80%", // Center alignment
  margin: "auto",
  marginTop: "50px",
  textAlign: "center"
}}>
  {/* Year 2022 - Funding */}
  <div>
    <h1 style={{ fontSize: "48px", fontWeight: "bold", color: "#333" }}>2022</h1>
    <h5>Raised $90 million in its Series E funding from NewQuest Capital Partners and Prosus.</h5>
  </div>

  {/* Year 2022 - Offline Store */}
  <div>
    <h1 style={{ fontSize: "48px", fontWeight: "bold", color: "#333" }}>2022</h1>
    <h5>In March, Cashify inaugurated its 100th offline store.</h5>
  </div>

  {/* Year 2021 - Series D Funding */}
  <div>
    <h1 style={{ fontSize: "48px", fontWeight: "bold", color: "#333" }}>2021</h1>
    <h5>Raised Series D funding of $15 million led by New York-based Olympus Capital Asia’s clean energy and sustainability arm, Asia Environmental Partners.</h5>
  </div>

  {/* Year 2020 - Donate for Education */}
  <div>
    <h1 style={{ fontSize: "48px", fontWeight: "bold", color: "#333" }}>2020</h1>
    <h5>Launched Donate for Education campaign. As schools shifted online, Cashify donated free refurbished mobile phones to support children attending online classes.</h5>
  </div>
</div>
<div style={{ textAlign: "center", marginTop: "50px" }}>
  <h1 style={{ fontSize: "48px", fontWeight: "bold", color: "#333" }}>
    Our People
  </h1>
  
  <div style={{ 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    gap: "40px", // Equal space between images
    marginTop: "20px"
  }}>
    {/* Mandeep */}
    <div style={{ textAlign: "center" }}>
      <img src={mandeep} alt="Mandeep Manocha" style={{ width: "150px", height: "150px", borderRadius: "10px" }} />
      <h2 style={{ fontSize: "18px", marginTop: "10px" }}>Mandeep Manocha</h2>
      <h5 style={{ fontSize: "14px", color: "gray" }}>Co-Founder, CEO</h5>
    </div>

    {/* Amit */}
    <div style={{ textAlign: "center" }}>
      <img src={amit} alt="Amit Sethi" style={{ width: "150px", height: "150px", borderRadius: "10px" }} />
      <h2 style={{ fontSize: "18px", marginTop: "10px" }}>Amit Sethi</h2>
      <h5 style={{ fontSize: "14px", color: "gray" }}>Co-Founder</h5>
    </div>

    {/* Nakul */}
    <div style={{ textAlign: "center" }}>
      <img src={nakul} alt="Nakul Kumar" style={{ width: "150px", height: "150px", borderRadius: "10px" }} />
      <h2 style={{ fontSize: "18px", marginTop: "10px" }}>Nakul Kumar</h2>
      <h5 style={{ fontSize: "14px", color: "gray" }}>Co-Founder, Chief Marketing Officer</h5>
    </div>

    {/* Siddhant */}
    <div style={{ textAlign: "center" }}>
      <img src={siddhant} alt="Siddhant Dhingra" style={{ width: "150px", height: "150px", borderRadius: "10px" }} />
      <h2 style={{ fontSize: "18px", marginTop: "10px" }}>Siddhant Dhingra</h2>
      <h5 style={{ fontSize: "14px", color: "gray" }}>Co-Founder, Chief Business Officer, Global Markets</h5>
    </div>
  </div>
</div>
<img src={join} alt="Join Us" style={{ width: "100%", display: "block" }} />
<footer style={{
  backgroundColor: '#333',
  color: 'white',
  padding: '20px',
  textAlign: 'left',
  marginTop: '40px',
  display: 'flex',
  flexDirection: 'column'
}}>
  <div style={{
    display: 'flex',
    alignItems: 'center'
  }}>
    <img src={s} alt='image' className='imged' style={{width:'100px', height:'50px', marginRight:'10px'}} />
    <h1 style={{ color: 'white' }}>Cashify</h1>
  </div>
  <div style={{
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: '20px'
  }}>
    <div style={{ flexBasis: '20%', margin: '10px' }}>
      <h4>Services</h4>
      <p>Sell Phone | Repair Phone | Recycle Phone | Buy Phone</p>
    </div>
    <div style={{ flexBasis: '20%', margin: '10px' }}>
      <h4>Company</h4>
      <p>About Us | Careers | Press Releases | Partner With Us</p>
    </div>
    <div style={{ flexBasis: '20%', margin: '10px' }}>
      <h4>Sell Device</h4>
      <p>Mobile Phones | Laptops | Tablets | Gaming Consoles</p>
      </div>
    <div style={{ flexBasis: '20%', margin: '10px' }}>
      <h4>Help & Support</h4>
      <p>FAQ | Contact Us | Warranty Policy | Refund Policy</p>
    </div>
    <div style={{ flexBasis: '20%', margin: '10px' }}>
      <h4>More Info</h4>
      <p>Terms & Conditions | Privacy Policy | Device Safety</p>
    </div>
  </div>
  <p style={{ marginTop: '10px', fontSize: '12px' }}>
    {new Date().getFullYear()} Cashify. All Rights Reserved.
  </p>
</footer>





    </div>
  );
}

export default About;
