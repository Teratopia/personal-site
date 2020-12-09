import React, { useState, useEffect } from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';

import profileImage from './assets/images/kyleEnnis1.JPG';

function App() {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  const setHeightAndWidthOnWindowChange = () => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      window.addEventListener('resize', setHeightAndWidthOnWindowChange);
    } else {
      window.removeEventListener('resize', setHeightAndWidthOnWindowChange);
    }
    return () => mounted = false;
  });

    return (
      <Container fluid style={{
        height: height,
        width: width,
        ...styles.flexAndCenter
      }}>
        <Container fluid style={{
          height: height - 20,
          width: width - 20,
          borderColor: '#FDC8CA',
          ...styles.subtleBorder,
          ...styles.flexAndCenter
        }}>
          <Container fluid style={{
            height: height - 26,
            width: width - 26,
            borderColor: '#A4B9E0',
            ...styles.subtleBorder,
          }}>
            <Container fluid style={{
              height: height - 26,
              width: width - 26,
              ...styles.flexAndCenter
            }}>
              <Col style={{
                paddingBottom: '70px',
              }}>
                <Row style={styles.flexAndCenter}>
                  <Container style={{
                    width: '146px',
                    height: '146px',
                    borderRadius: '73px',
                    borderColor: '#A4B9E0',
                    ...styles.flexAndCenter,
                    ...styles.subtleBorder,
                  }}>
                    <Image
                      style={{
                        width: '140px',
                        height: '140px',
                        borderRadius: '70px',
                        borderColor: '#FDC8CA',
                        ...styles.subtleBorder,
                      }}
                      src={profileImage}
                      aria-label="Profile Picture of Kyle Ennis"
                      roundedCircle
                    />
                  </Container>
                </Row>
                <Row
                  style={{
                    ...styles.lightNexaCenteredText,
                    fontSize: 42,
                    marginTop: '12px',
                  }}
                >
                  Kyle Wood Ennis
        </Row>
                <Row
                  style={{
                    ...styles.lightNexaCenteredText,
                    fontSize: 16,
                    marginTop: '8px',
                  }}
                >
                  Freelance Web and Mobile Software Developer
          </Row>
                <Row
                  style={{
                    ...styles.lightNexaCenteredText,
                    fontSize: 12,
                    marginTop: '12px',
                  }}
                >
                  <a href="https://www.linkedin.com/in/kylewoodennis/" target="_blank" rel="noreferrer" aria-label="Open Kyle Ennis' LinkedIn.com page in a new browser tab." alt="Open Kyle Ennis' LinkedIn.com page in a new browser tab.">LinkedIn</a> | <a href="mailto:KyleWoodEnnis@gmail.com">KyleWoodEnnis@gmail.com</a> |  <a href="https://www.upwork.com/o/profiles/users/~01ec59b3fe8cd1f625/?viewMode=1" target="_blank" rel="noreferrer" aria-label="Open Kyle Ennis' UpWork.com page in a new browser tab." alt="Open Kyle Ennis' UpWork.com page in a new browser tab.">
                    UpWork
            </a>
                </Row>
              </Col>
            </Container>
          </Container>
        </Container>
      </Container>
    );
}

const styles = {
  flexAndCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  subtleBorder: {
    borderWidth: '1px',
    borderStyle: 'solid',
  },
  lightNexaCenteredText: {
    fontFamily: 'Nexa Light',
    textAlign: 'center',
  },
}

export default App;
