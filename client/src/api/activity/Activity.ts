import axios from "axios";
import { API_ } from "../../data/api";
import { Activity } from "@/types/activity";

const getAllActivities = async (): Promise<Activity[]> => {
  const response = await axios.get<Activity[]>(API_.ACTIVITY.GET_ALL_ACTIVITY);
  return response.data;
};

export default { getAllActivities };
