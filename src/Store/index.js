import { createStore } from "redux";
import { rootReducer } from "./Modules/rootReducer";

export const store = createStore(rootReducer);