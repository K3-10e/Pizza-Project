import { 
    startLoading,
    hasError,
    fetchToppings,
} from "./slice";
import axios from "../../utils/axios";
import { toppingsSorter } from "../../utils/helpers";

export const toppingsRetriever = () => async (dispatch) => {
    dispatch(startLoading());

    try {
      const { data } = await axios.get();
      var toppingArray = [];
      var toppingsRanked = [];

      // converts the json data to an array of arrays
      for(var value of data){
        toppingArray.push(value.toppings);
      }

      toppingsRanked = toppingsSorter(toppingArray);
      dispatch(fetchToppings(toppingsRanked));
    } catch (error) {
      dispatch(hasError());
      console.log(error.message);
    }
};