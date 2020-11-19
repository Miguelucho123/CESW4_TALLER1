import {React} from "react";
import { Button, Card, Badge } from "react-bootstrap";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

function Income({transaction, removeTransaction}) {
  
  const handleButton=()=>{
    removeTransaction(transaction.id);
  }
  return (
    
    <div style={{ display: "flex" }}>
      <Card>
        <Card.Body>
        <Button onClick={handleButton}>
        <AiOutlineClose/>
        </Button>
        {` `}
        <Button>
        <AiOutlineCheck/>
        </Button>
        {` `}{transaction.name}{` `}
        <Badge variant={transaction.tipo ? "success": "Ingreso"}>{transaction.money}</Badge>
        </Card.Body>
      </Card>
    </div>
    
  );
}

export default Income;
