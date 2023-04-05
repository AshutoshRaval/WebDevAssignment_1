import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../components/Card';
import Layout from "./../components/Layout/Layout";
// import image1 from "./../Image/Java.jpg"

const Jobs = () => {
  return (
    <Layout>
      <div className='CardsJobs'>
        <Container>
          <Row>
            <Col> <Card
              // Image = 
              // import image1 from "./../Image/Java.png"
              title="Java Developer"
              description="Good Hands on swing boot. Understanding of java concepts"
            />
            </Col>
            <Col> <Card
              title=".Net Developer"
              description="Good Hands on c#. Understanding of c# concepts"
            />
            </Col>
            <Col> <Card
              title="Python Developer"
              description="Good Hands on python concepts. Understanding of python libraries"
            />
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>


  )
}

export default Jobs