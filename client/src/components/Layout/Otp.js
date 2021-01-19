import React,{useState} from 'react'
import { Container,Card } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
const Otp = () => {
  const history = useHistory();

  const [myotp, setMyotp] =useState({
    phonenumber:'',
    code:''
  })
  const {phonenumber,code} =myotp
  console.log(myotp)
  const onChange=(e)=>{
    setMyotp({...myotp,[e.target.name]:e.target.value})
    }
const onSubmit =e =>{
  e.preventDefault();
  try {
   const res= axios.post('http://localhost:5000/api/verify',myotp)
   console.log(res)
    history.push('/address')
  } catch (err) {
    console.log(err)
  }
  //history.push('/address')

}

    return (
           <Container className="mt-5">
        <Card>
  <Card.Header as="h5">Enter your detail</Card.Header>
  <Card.Body>
    <Card.Text>
    <form onSubmit={onSubmit}>
  <div class="form-group">
    <label htmlFor="phonenumber">Enter your phonenumber</label>
    <input type="text" class="form-control"
     id="phonenumber"  placeholder="enter your phonenumber" 
     name='phonenumber' value={phonenumber} onChange={onChange}
     />
  </div>
  <div class="form-group">
    <label htmlFor="code">Enter your code</label>
    <input type="text" class="form-control"
     id="code"  placeholder="enter your code" 
     name='code' value={code} onChange={onChange}
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

export default Otp
