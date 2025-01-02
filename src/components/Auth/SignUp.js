import { useState } from 'react';
import { emailRegisterAction } from '@/services/authService';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      await emailRegisterAction(email, password);
      alert('User signed up successfully!');
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };

  return (
    <div>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}

export default SignUp;
