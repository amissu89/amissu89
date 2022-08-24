import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

function DetailItem(props) {

    let {id} = useParams();
    let obj = getItemById(props.shoes, parseInt(id));
    console.log({obj});
    return (
        <Container>
            <Row>
                <Col>
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </Col>
                <Col>
                    <h4 className="pt-5">{obj.title}</h4>
                    <p>{obj.content}</p>
                    <p>{obj.price}</p>
                    <button className="btn btn-danger">주문하기</button>
                </Col>
            </Row>
        </Container>
    )
}

function getItemById(items, id){
    for(const element of items){        
        if(element.id === id){
            return element;   
        }
    }
}

export default DetailItem;


