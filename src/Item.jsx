export default function Item(props) {
  const { id, date, distance, workouts, setWorkouts } = props;

  const handleDelBtn = (evt) => {
    const id = evt.target.closest('.item').id;

    let tmp = workouts.slice(0, workouts.length);

    const index = tmp.findIndex((workout) => workout.id === id);

    tmp.splice(index, 1);
    setWorkouts(tmp);
  }

  return (
    <li className="item" id={id}>
      <span>{date}</span>
      <span>{distance}</span>
      <button className="btn_del" onClick={handleDelBtn}>&#10008;</button>
    </li>
  );
}
