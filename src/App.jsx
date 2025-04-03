import './App.css';
import { useState } from 'react';
import Form from './Form';
import List from './List';

export default function App() {
  // тестовые данные оставлены для демонстрации
  const [workouts, setWorkouts] = useState([
    {
      id: 'WJ0HT1M9kA-IeAcSq6Quu',
      date: '18.07.19',
      distance: ' 3.4 ',
    },
    {
      id: '76OOH7xQPaqkVY6WJhpJ5',
      date: '20.07.19',
      distance: ' 5.7 ',
    },
    {
      id: 'Vmii-9M7fj9C6LpjSx1Eh',
      date: '19.07.19',
      distance: ' 14.2 ',
    },
  ]);

  return (
    <div className="container">
      <Form workouts={workouts} setWorkouts={setWorkouts} />
      <List workouts={workouts} setWorkouts={setWorkouts} />
    </div>
  );
}
