import { useEffect, useState } from 'react';
import axios from '../api/axios';
import AttemptTable from '../components/AttemptTable';

interface Attempt {
  email: string;
  uuid: string;
  status: string;
}

export default function Dashboard() {
  const [email, setEmail] = useState('');
  const [attempts, setAttempts] = useState<Attempt[]>([]);

  const fetchAttempts = async () => {
    const res = await axios.get('/attempts');
    setAttempts(res.data);
  };

  const sendAttempt = async () => {
    await axios.post('/attempts', { email });
    fetchAttempts();
  };

  useEffect(() => {
    fetchAttempts();
  }, []);

  return (
    <div>
      <h2>Phishing Dashboard</h2>
      <input placeholder="Target Email" value={email} onChange={e => setEmail(e.target.value)} />
      <button onClick={sendAttempt}>Send Phishing Email</button>
      <AttemptTable attempts={attempts} />
      
    </div>
  );
}