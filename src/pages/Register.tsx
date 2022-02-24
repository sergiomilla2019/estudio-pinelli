import '../styles/styles.css';
import { Card } from 'react-bootstrap';


export const Register = () => {
  return (
    <div>
        
        <Card 
         className="bg-dark mt-2"
         body>
             <h1>Formulario</h1>
             <form className='mb-4' noValidate>
                <label htmlFor='firstName' >First Name</label>
                <input 
                    type="text"
                    name="firstName"
                    
                />
                <span>First Name is required</span>
                <label htmlFor='lastName' >Last Name</label>
                <input 
                    type="text"
                    name="lastName"
                    
                />
                <span>Last Name is required</span>
                <label htmlFor='email' >Email Adress</label>
                <input 
                    type="email"
                    name="email"
                    
                />
                <span>Email is required</span>
                
                <button
                    type="submit"
                >
                    Submit
                </button>

            </form>
         </Card>
    </div>
  )
}
