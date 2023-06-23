import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toppingsRetriever } from "../redux/pizza/actions";

const Home = () => {
  const dispatch = useDispatch();

  const { toppingsRanked } = useSelector(({ pizza }) => pizza);

  useEffect(() => {
    dispatch(toppingsRetriever());
  }, [dispatch]);

  return (
    <div>
        {toppingsRanked.slice(0,20).map((item, key) => {
          return(
            <div key={key}>
              {++key} {item.toppings} {item.count}
            </div>
          )
        })}
    </div>
  );
  }
  
export default Home;