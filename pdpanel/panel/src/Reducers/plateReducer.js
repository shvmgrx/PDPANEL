
import { toast } from "react-toastify";

const plateReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_PLATE": {
      toast.success("Added a plate");
      return state;
    }
    case "ADD_PLATE_ERR": {
      toast.error("An error occurred");
      return state;
    }
    case "REMOVE_PLATE": {
      toast.warn("A plate was removed...");
      return state;
    }
    case "REMOVE_PLATE_ERR": {
      toast.error("A plate remove error occured....");
      return state;
    }
    case "TOGGLE_CHECKED": {
      toast.info("A plate status changed...");
      return state;
    }
    case "TOGGLE_CHECKED_ERR": {
      toast.error("A plate status change error occured...");
      return state;
    }
    default:
      return state;
  }
};

export default plateReducer;