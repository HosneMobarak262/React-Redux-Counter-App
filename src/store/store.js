import { createStore } from "redux";
import { counterReducer } from "../services/reducers/counterRecuder";

const store = createStore(counterReducer)
export default store