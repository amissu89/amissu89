import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setName, addAge} from '../store/userSlice.js';
import { addCount } from '../store/boughtItem.js';

function Cart() {
    const user = useSelector(state => { return state.user })
    let dispatch = useDispatch()

    return (
        <div>
            <p>
                {user.name} {user.age} 의 장바구니
            </p>
            <button onClick={() => {
                dispatch(addAge(3))
            }}>age+1</button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <CartItem />
            </Table>
        </div>
    )
}

function CartItem() {
    const items = useSelector(state => { return state.boughtItem })
    let dispatch = useDispatch()
    console.log(items)

    return (
        <tbody>
            {
                items.map(function (item, idx) {
                    return (
                        <tr key={idx}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.count}</td>
                            <td>
                                <button onClick={()=>{
                                    dispatch(addCount(item.id));
                                }}>+</button>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
    )
}

export default Cart;