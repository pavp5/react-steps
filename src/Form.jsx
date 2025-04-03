import { useState } from 'react';
import { nanoid } from 'nanoid';

export default function Form(props) {
  const { workouts, setWorkouts } = props;

  const initData = { date: '', distance: '' };
  const [form, setForm] = useState(initData);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const regex = /\d{2}\.\d{2}\.\d{2}/;

    if (!regex.test(form.date)) {
      const inputDateEl = evt.target.querySelector('.form_date');
      inputDateEl.classList.add('error');

      setTimeout(() => inputDateEl.classList.remove('error'), 1000);
      return;
    };

    const addWorkout = {
      id: nanoid(),
      date: form.date,
      distance: +form.distance,
    };

    let tmp = workouts.slice(0, workouts.length);

    let isUpdeted = false;

    tmp.forEach(item => {
      if (item.date === form.date) {
        item.distance += +form.distance;
        isUpdeted = true;
      }
    });

    if (!isUpdeted) {
      tmp.push(addWorkout);
    }

    setWorkouts(tmp);
    setForm(initData);
  }

  const handleInput = (evt) => {
    const { name, value } = evt.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="date">Дата (ДД.ММ.ГГ)
        <input className="form_date" type="text" id="date" name="date" maxLength="9"
          value={form.date} onChange={handleInput} required />
      </label>
      <label htmlFor="distance">Пройдено км
        <input className="form_distance" type="number" id="distance" name="distance"
          value={form.distance} onChange={handleInput} required />
      </label>
      <button className="form_btn-ok" type="submit">ok</button>
    </form>
  );
}
