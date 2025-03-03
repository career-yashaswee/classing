import axios from "axios";
import { API_ } from "../../data/api";
import { Session } from "@/types/session";

const getAllSessions = async (): Promise<Session[]> => {
  const response = await axios.get<Session[]>(API_.SESSION.GET_ALL_SESSION);
  return response.data;
};

export default { getAllSessions };
