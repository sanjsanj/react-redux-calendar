import { combineReducers } from "redux";

import { calendar } from "./calendar";
import { reminders } from "./reminders";

export default combineReducers({ calendar, reminders });
