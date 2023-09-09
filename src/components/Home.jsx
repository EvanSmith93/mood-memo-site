import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Header from './Header';

function Home() {
  return (
    <div>
      <Row>
        <Col>
          <div className='landing-page-left'>
            <Header color="white" />
            <Container className="content">
              <h1 className="title mb-3">Mood Memo</h1>
              <p className="description">A free app for tracking your mood and journaling daily</p>
              <Row>
                <Col>
                  <Button className="white-button mb-2" href='https://apps.apple.com/us/app/mood-memo/id6451342285'>Download for iOS</Button>
                </Col>
                <Col>
                  <Button className="white-button mb-2" href='https://play.google.com/store/apps/details?id=com.evansmith.mood_memo&hl=en_US&gl=US'>Download for Android</Button>
                </Col>
              </Row>
            </Container>
          </div>
        </Col>
        <Col>
          <img className='phone-image' src="https://evansmith93.github.io/mood-memo-site/assets/no_background_screenshot.png"></img>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
