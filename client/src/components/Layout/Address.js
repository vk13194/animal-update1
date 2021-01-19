import React, {useState} from 'react'
import { Container, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
const Address = () => {
  const history = useHistory();
  const [myaddress, setMyaddress]= useState({
    address:''
  })
const {address} = myaddress;
const onChange=(e)=>{
  setMyaddress({...myaddress,[e.target.name]:e.target.value})
  }
  console.log(myaddress)
const onSubmit =(e)=>{
  e.preventDefault();
try {
  const res= axios.post('http://localhost:5000/api/store', myaddress)
  console.log('success')
  console.log(res)
  history.push('/')
} catch (err) {
  console.log(err)
}
  //history.push('/')

}
    return (
        <Container className="mt-3">
        <Card>
  <Card.Header as="h5">Enter your Address</Card.Header>
  <Card.Body>
    <Card.Text>
    <form onSubmit={onSubmit}>
    <div class="form-group">
    <label htmlFor="state">Enter your state</label>
    <input type="text" class="form-control"
     id="state"  placeholder="enter your state"
    // name='address' value={address} onChange={onChange}
      />
  </div>
  <div class="form-group">
    <label htmlFor="distic">Enter your distic</label>
    <input type="text" class="form-control"
     id="distic"  placeholder="enter your distic" 
    // name='address' value={address} onChange={onChange}
     />
  </div>
  <div class="form-group">
    <label htmlFor="tashil">Enter your tashil</label>
    <input type="text" class="form-control"
     id="tashil"  placeholder="enter your tashil"
     //name='address' value={address} onChange={onChange}
     />
  </div>
  <h3 className="text-center">OR </h3>
  <div class="form-group">
    <label htmlFor="pincode">Enter your pincode</label>
    <input type="text" class="form-control"
     id="pincode"  placeholder="enter your pincode" 
     name='address' value={address} onChange={onChange}
     />
  </div>
  <div class="form-group">  
      <input type="submit" class="form-control"  />
        </div>
    </form>
    </Card.Text>
  </Card.Body>
</Card>
        </Container>
    )
}

export default Address
