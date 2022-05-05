import React from 'react'
import { Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faLocationDot,faPhone,faLink,faUser} from '@fortawesome/free-solid-svg-icons'


const UserCard = ({ user }) => {
 

  return (
    <Card style={{ width: '24rem',marginBottom:'2rem' ,marginLeft:'1.5rem',marginRight:'1.5rem'}}>
    <Card.Title style={{display:'flex',justifyContent:'space-around',alignItems:'center',background:'#94a3e9',color:'black',height:'4rem'}}>{user.name}<FontAwesomeIcon icon={faUser} size='2x'/></Card.Title>
          
  <Card.Body style={{textAlign:'left'}}>
   
    <Card.Text>
    <FontAwesomeIcon icon={faEnvelope} /> {user.email}
    </Card.Text>
    <Card.Text>
    <FontAwesomeIcon icon={faLocationDot} /> {user.address.street}
    </Card.Text>
    <Card.Text>
    <FontAwesomeIcon icon={faPhone} />  {user.phone}
    </Card.Text>
    <Card.Text>
    <FontAwesomeIcon icon={faLink} />  {user.website}
    </Card.Text>
 
  </Card.Body>
</Card>
  )
}

export default UserCard