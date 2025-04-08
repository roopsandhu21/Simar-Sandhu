import Carousel from 'react-bootstrap/Carousel';
import iphone from './iphone16back.png';
import samsung from './galaxy S25.webp';
import oneplus from './one plus 13R.jpg';
import Card from 'react-bootstrap/Card';
import phone from './16iphone.jpg';
import galaxy from './galaxy  A06.avif';
import plus from './plus 13R.webp';
import apple from './iphone15.webp';
import commu from './communication.png';
import study from './study.png';
import map from './map.png';
import safety from './safety.jpeg';



function Home() {
  return (
    <div>
    <Carousel>
      <Carousel.Item>
        <img className='app' style={{ width: '1200px', height: '700px', margin:'auto', display: 'block' }} src={iphone} alt="Iphone 16" />
        <Carousel.Caption>
          <h3>Iphone 16</h3>
          <p>Latest generation</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='app' style={{ width: '1200px', height: '700px', margin:'auto', display: 'block'}}  src={samsung} alt="Galaxy A33" />
        <Carousel.Caption>
          <h3>Samsung Galaxy A33</h3>
          <p>Latest generation</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        < img className='app' style={{ width: '1200px', height: '700px', margin: 'auto', display: 'block' }} src={oneplus} alt="One Plus 13R"/>
        <Carousel.Caption>
          <h3>One Plus 13R</h3>
          <p>
            Latest generation
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>Recently Viewed phone's</h1>

    <Carousel>
  <Carousel.Item>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={phone} />
        <Card.Body>
          <Card.Title>IPhone 16 128 GB:</Card.Title>
          <Card.Text>
            5G Mobile Phone with Camera Control
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={galaxy} />
        <Card.Body>
          <Card.Title>Galaxy A06</Card.Title>
          <Card.Text>
            Galaxy A06 5G (6 GB Memory)
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={plus} />
        <Card.Body>
          <Card.Title>OnePlus 13R</Card.Title>
          <Card.Text>
            5G (12GB RAM, 256GB, Nebula Noir)
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  </Carousel.Item>
<Carousel.Item>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={apple} />
        <Card.Body>
          <Card.Title>iPhone 15</Card.Title>
          <Card.Text>
          (128 GB) - Black
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={galaxy} />
        <Card.Body>
          <Card.Title>Samsung Galaxy S24</Card.Title>
          <Card.Text>
          FE 5G AI Smartphone
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={plus} />
        <Card.Body>
          <Card.Title>OnePlus 13T</Card.Title>
          <Card.Text>
            5G (12GB RAM, 256GB, Nebula Noir)
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  </Carousel.Item>
</Carousel>

<h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>Why phone's are beneficial</h1>
<div style={{ display: 'flex', justifyContent: 'space-around' }}>
  <Card style={{ width: '18rem', border: 'none' }}>
    <Card.Img variant="top" src={commu} />
    <Card.Body>
      <Card.Title>Communication</Card.Title>
      <Card.Text>
        Phones enable us to communicate with others easily, no matter where we are in the world.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem', border: 'none' }}>
    <Card.Img variant="top" src={study} />
    <Card.Body>
      <Card.Title>Education</Card.Title>
      <Card.Text>
      Phones can be a valuable learning tool, providing access to online courses, educational apps, and digital textbooks.

      </Card.Text>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem', border: 'none' }}>
    <Card.Img variant="top" src={map} />
    <Card.Body>
      <Card.Title>Navigation and Travel</Card.Title>
      <Card.Text>
      Phones have made navigation and travel much easier. We can use GPS to find our way.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem', border: 'none' }}>
    <Card.Img variant="top" src={safety}/>
    <Card.Body>
      <Card.Title>Safety and Security</Card.Title>
    
      <Card.Text>
      Phones can be a lifeline in emergency situations. We can use phones to call for help.


      </Card.Text>
    </Card.Body>
  </Card>
</div>









    </div>


  );
}

export default Home;