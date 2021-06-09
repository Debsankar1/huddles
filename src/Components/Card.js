import React from "react";
import * as ReactBootStrap from "react-bootstrap";

function Card() {
  return (
    <div className="card">
      <ReactBootStrap.Container>
        <ReactBootStrap.Row>
          <ReactBootStrap.Col xs>
            <ReactBootStrap.Card
              style={{
                width: "22rem",
                align: "center",
                margin: "0",
                padding: "0",
                marginLeft: "auto",
                marginRight: "auto",
                // backgroundColor: "black",
                textColor: "white",
              }}
            >
              <ReactBootStrap.Card.Img
                variant="top"
                src="https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
              <ReactBootStrap.Card.Body>
                <ReactBootStrap.Card.Title>
                  Card Title
                </ReactBootStrap.Card.Title>
                <ReactBootStrap.Card.Text>
                  ADD ANY STUFFS..... Hello world its me abcdummy-person, I'm a bot give me
                  some task I'll do that for you....:) 
                </ReactBootStrap.Card.Text>
                <ReactBootStrap.Button variant="primary" id="main" className='button1'>
                  Tap It
                </ReactBootStrap.Button>
              </ReactBootStrap.Card.Body>
            </ReactBootStrap.Card>
          </ReactBootStrap.Col>
          <ReactBootStrap.Col xs>
            <ReactBootStrap.Card
              style={{
                width: "22rem",
                align: "center",
                margin: "0",
                padding: "0",
                marginLeft: "auto",
                marginRight: "auto",
                backgroundColor: "white",
                
              }}
            >
              <ReactBootStrap.Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?cs=srgb&dl=pexels-nitin-khajotia-1516680.jpg&fm=jpg"
              />
              <ReactBootStrap.Card.Body>
                <ReactBootStrap.Card.Title>
                  give the Card Title
                </ReactBootStrap.Card.Title>
                <ReactBootStrap.Card.Text>
                  ADD ANY STUFFS.....
                   Hello world its me abcdummy-person, I'm a bot give me
                   some task I'll do that for you....:)

                </ReactBootStrap.Card.Text>
                <ReactBootStrap.Button variant="primary">
                  Tap-it
                </ReactBootStrap.Button>
              </ReactBootStrap.Card.Body>
            </ReactBootStrap.Card>
          </ReactBootStrap.Col>
          <ReactBootStrap.Col xs>
            <ReactBootStrap.Card
              style={{
                width: "22rem",
                align: "center",
                margin: "0",
                padding: "0",
                marginLeft: "auto",
                marginRight: "auto",
                backgroundColor: "white",
                textColor: "white",
              }}
            >
              <ReactBootStrap.Card.Img
                variant="top"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
              />
              <ReactBootStrap.Card.Body>
                <ReactBootStrap.Card.Title>
                  Give the Card Title
                </ReactBootStrap.Card.Title>
                <ReactBootStrap.Card.Text>
                  ADD ANY STUFFS..... Hello world its me abcdummy-person, I'm a bot give me
                   some task I'll do that for you....:)
                </ReactBootStrap.Card.Text>
                <ReactBootStrap.Button variant="primary">
                  Tap-it
                </ReactBootStrap.Button>
              </ReactBootStrap.Card.Body>
            </ReactBootStrap.Card>
          </ReactBootStrap.Col>
        </ReactBootStrap.Row>
      </ReactBootStrap.Container>
    </div>
  );
}

export default Card;
