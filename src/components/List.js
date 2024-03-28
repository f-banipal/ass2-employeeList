
import { data } from "../helper/data";


const List = ({ startIndex }) => {
  return (
    <>
      {data.slice(startIndex, startIndex + 5).map((item) => (
        <article className="person" key={item.id}>
          <img src={item.image} alt={item.name} />
          <div>
            <h4>{item.name}</h4>
            <p>{item.email}</p>
            <p>{item.age} years</p>
          </div>
        </article>
      ))}
    </>
  );
};

export default List;

