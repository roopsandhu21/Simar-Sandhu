import React from 'react';
import Card from 'react-bootstrap/Card';
import customer from './customer.webp';
import address from './address.webp';
import bulk from './bulk.webp';
import cashify from './cashify.webp'
import business from './business.webp'
import s from './phone.png';
import Carousel from 'react-bootstrap/Carousel';



function Contact() {
  return (
    <div className='abc'>
      <div style={{
        backgroundColor: 'grey',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '1600px',
        height: '600px',
        margin: '40px auto',
        borderRadius: '20px',
        position: 'relative'
      }}>
        <div style={{
          textAlign: 'center',
          color: 'white',
          zIndex: '1'
        }}>
          <h2 style={{ fontSize: '50px' }}>We'd had love</h2>
          <h2 style={{ fontSize: '50px' }}>to hear you</h2>
        </div>
        <img src={require('./contact.webp')} alt="Contact Image" style={{ width: '750px', height: '500px' }} />
        </div>
      <h1 style={{ textAlign: 'center' }}>Need help?</h1>
      <h6 style={{ textAlign: 'center', color: 'grey' }}>To get instant response to your query</h6>
      <div style={{ textAlign: 'center' }}>
        <button style={{
          backgroundColor: '#25D366',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
          marginRight: '10px'
        }}>WhatsApp</button>
        <button style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer'
        }}>Live Chat</button>
      </div>
      <br></br>
      <h1 style={{ textAlign: 'center' }}>Reach us</h1>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}>
        <Card style={{ width: '18rem', border: 'none', marginBottom: '20px' }}>
          <Card.Body>
          <Card.Title>Connect with us:</Card.Title>
            <Card.Text> For support or any questions: call us on Cashify customer support number - 7290068900 or Email us at support@cashify.in for Sell Queries </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', border: 'none', marginBottom: '20px' }}>
          <Card.Body>
            <Card.Title>Corporate Office:</Card.Title>
            <Card.Text> Cashify 1st Floor, Plot No.35, Sector 44, Gurugram, Haryana 122003 </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', border: 'none', marginBottom: '20px' }}>
          <Card.Body>
            <Card.Title>Registered Office for Manak</Card.Title>
            <Card.Text> 55, 2nd Floor, Lane-2, Westend Marg, Saidullajab, Near Saket Metro Station, New Delhi – 110030, India </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: '20px'
      }}>
        <Card style={{ width: '18rem', border: 'none' }}>
          <Card.Body>
            <Card.Title>Connect with us:</Card.Title>
            <Card.Text> For Buy Phone related queries: Call us on +91-9319697452 or Email us at store@cashify.in. 
              For Warranty/Returns related queries: Call us on +91-8448797261 or Email us at return@cashify.in </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', border: 'none' }}>
          <Card.Body>
            <Card.Title>Corporate Office:</Card.Title>
            <Card.Text> Cashify 1st Floor, Plot No.35, Sector 44, Gurugram, Haryana 122003 </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', border: 'none' }}>
          <Card.Body>
            <Card.Title>Registered Office for RFPL:</Card.Title>
            <Card.Text> Retail Fiesta Private Limited | 498/17, Sector - 17, Gurugram - 122001, India </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <br></br>
      <h1 style={{ textAlign: 'center'}}>Our team</h1>

      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
  <Card style={{ width: '18rem', display: 'flex' ,flexDirection:'row-reverse' }}>
    <Card.Body style={{ width: '60%' }}>
      <Card.Title>Customer Inquiry</Card.Title>
      <Card.Text> For any customer inquiry or assistance regarding model, price or service issues. support@cashify.in. </Card.Text>
    </Card.Body>
    <Card.Img variant="top" src={customer} style={{ width: '50%', height: '150px' }} />
  </Card>
  <Card style={{ width: '18rem', display: 'flex', flexDirection: 'row-reverse' }}>
    <Card.Body style={{ width: '50%' }}>
      <Card.Title>Address to CEO</Card.Title>
      <Card.Text> For any feedback, complaints, escalations or suggestions, drop an email directly to the CEO at CEO@cashify.in</Card.Text>
    </Card.Body>
    <Card.Img variant="top" src={address} style={{ width: '50%', height: '150px' }} />
  </Card>
  <Card style={{ width: '18rem', display: 'flex', flexDirection:'row-reverse' }}>
    <Card.Body style={{ width: '50%' }}>
      <Card.Title>Bulk Selling</Card.Title>
      <Card.Text> In case you want to sell anything in bulk (more than 4 items) and want a customized quote. manoj.k@cashify.in </Card.Text>
    </Card.Body>
    <Card.Img variant="top" src={bulk} style={{ width: '50%', height: '150px' }} />
  </Card>
  </div>

<div style={{ height: '20px' }}></div>

<div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
  <Card style={{ width: '18rem', display: 'flex' ,flexDirection:'row-reverse' }}>
    <Card.Body style={{ width: '50%' }}>
      <Card.Title>Cashify Partner Program</Card.Title>
      <Card.Text> If you're a professional buyer and want to get affiliated to Cashify Partner Program, please drop an email at
      partner@cashify.in </Card.Text>
    </Card.Body>
    <Card.Img variant="top" src={cashify} style={{ width: '50%', height: '150px' }} />
  </Card>
  <Card style={{ width: '18rem', display: 'flex', flexDirection: 'row-reverse' }}>
    <Card.Body style={{ width: '50%' }}>
      <Card.Title>Business Inquiry</Card.Title>
      <Card.Text> For any Press & Media Inquiries or Partnership Opportunities including the Exchange Programs & Buyback/Trade-in programs.
      info@cashify.in</Card.Text>
    </Card.Body>
    <Card.Img variant="top" src={business} style={{ width: '50%', height: '150px' }} />
  </Card>
  <Card style={{ width: '18rem', display: 'flex', flexDirection:'row-reverse' }}>
    <Card.Body style={{ width: '50%' }}>
      <Card.Title>Job Inquiry</Card.Title>
      <Card.Text> To explore a career opportunity with Cashify, please feel free to send your resume.
      jobs@cashify.in </Card.Text>
    </Card.Body>
    <Card.Img variant="top" src={customer} style={{ width: '50%', height: '150px' }} />
  </Card>
  </div>
  
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

export default Contact
