import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Header from './Header';

function Home() {
  return (
    <div className="landing-page">
      <img src="https://evansmith93.github.io/mood-memo-site/assets/background.png" alt="Background image" className="bg-image" />
      {/* Add padding and margin to raise the content up */}
      <Header color="white" />
      <Container className="content">
        <h1 className="title mb-3">Mood Memo</h1>
        <p className="description">A free app for tracking your mood and journaling daily</p>

        <Row>
          <Col>
            <Button className="white-button mb-2" href='/coming-soon'>Download for iOS</Button>
          </Col>
          <Col>
            <Button className="white-button mb-2" href='https://play.google.com/store/apps/details?id=com.evansmith.mood_memo&hl=en_US&gl=US'>Download for Android</Button>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default Home;
