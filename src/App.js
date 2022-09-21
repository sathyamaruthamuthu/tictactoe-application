import React, { useState } from "react";
import Icon from "./components/Icon";
//import toastify code
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//import bootstrap and reactstrap files
import 'bootstrap/dist/css/bootstrap.css';
import {Card, CardBody, Container, Button, Row, Col} from "reactstrap";
import './App.css';
const itemArray = new Array(9).fill("empty");

const App = () => {
  //Defining states here
  const [isCross , setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  //Needed functions
  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty", 0, 9);
  }

  const checkIsWinner = () => {
    //
    if(itemArray[0] === itemArray[1] && itemArray[0] === itemArray[2] && itemArray[0] !== "empty"){
      setWinMessage(`${itemArray[0]} won the game`);
    }else if(itemArray[3] === itemArray[4] && itemArray[3] === itemArray[5] && itemArray[3] !== "empty"){
      setWinMessage(`${itemArray[3]} won the game`);
    }else if(itemArray[6] === itemArray[7] && itemArray[6] === itemArray[8] && itemArray[6] !== "empty"){
      setWinMessage(`${itemArray[6]} won the game`);
    }else if(itemArray[0] === itemArray[3] && itemArray[0] === itemArray[6] && itemArray[0] !== "empty"){
      setWinMessage(`${itemArray[0]} won the game`);
    }else if(itemArray[1] === itemArray[4] && itemArray[1] === itemArray[7] && itemArray[1] !== "empty"){
      setWinMessage(`${itemArray[1]} won the game`);
    }else if(itemArray[2] === itemArray[5] && itemArray[2] === itemArray[8] && itemArray[2] !== "empty"){
      setWinMessage(`${itemArray[2]} won the game`);
    }else if(itemArray[0] === itemArray[4] && itemArray[0] === itemArray[8] && itemArray[0] !== "empty"){
      setWinMessage(`${itemArray[0]} won the game`);
    }else if(itemArray[2] === itemArray[4] && itemArray[2] === itemArray[6] && itemArray[2] !== "empty"){
      setWinMessage(`${itemArray[2]} won the game`);
    }
  }

  const changeItem = (itemNumber) => { // to check whether the icon should change or not. or whether the icon is already filled or not - when user clicks the button
    // itemNumber - used as props to verify which button or card the user clicks, means the index  
    if(winMessage){
      return toast(winMessage, {type: "success"});
    }

    if(itemArray[itemNumber] === "empty"){
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    }else{
      return toast("Already filled", {type: "error"});
    }

    checkIsWinner();
  }

  return (
    <Container className="p-5">
        <ToastContainer position="bottom-center" />
        <Row>
          <Col md={6} className="offset-md-3">
            {winMessage ? (
              <div className="mb-2 mt-2">
                <h1 className="text-success text-uppercase text-center">
                  {winMessage}
                </h1>
                <Button className="cls_AnimationBtn" color="success" block onClick={reloadGame}>Reload the Game</Button>
              </div>
              //Calling
            ) : (
              <h1 className="text-warning text-center">
                {isCross ? "Cross" : "Circle"} turns
              </h1>
            )

            }
            <div className="grid">
              {itemArray.map((item, index) => (
                <Card color="warning" onClick = { () => changeItem(index)}>
                  <CardBody className="box">
                    <Icon name={item} />
                  </CardBody>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
    </Container>
  );
}

export default App;
