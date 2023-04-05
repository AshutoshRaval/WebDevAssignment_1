import React from 'react'
import Layout from "./../components/Layout/Layout";
const userNames = [
  {
    name: "Mohit Barhate",
    position: "CEO",
    phoneno: "+91 92345789"
  },
  {
    name: "Kruthi Hegde",
    position: "Deputy Manager",
    phoneno: "+91 5645789"
  },
  {
    name: "Anna",
    position: "Employee",
    phoneno: "+91 564578923"
  }
]

// const userNames = ['Jesse', 'Tom', 'Anna']

const Contact = () => {

  const renderListOfUserNames = (names) => {
    return names.map((namex) => <li>{namex.name} - {namex.position} - {namex.phoneno}</li>)
  }

  return (
    <Layout>
      
      <div className="container d-flex align-items-center justify-content-center">
      <div className='contactPage'>
        <h1>Our Team</h1>
        <div>
          <ul>
            {renderListOfUserNames(userNames)}
          </ul>
        </div>
      </div>
    </div>
    </Layout >
  );
}

export default Contact;