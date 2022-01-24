import axios from "axios";
const API_URL = "https://my-json-server.typicode.com/tri-ad-fed/task-api/";

export async function getMembers() {
    try {
      const url = `${API_URL}devs`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return null;
    }
}
export async function submitTask(params:any) {
  try {
    const url = `${API_URL}tasks`;
    const response = await axios.post(url, params);
    return response.data;
  } catch (error) {
    return null;
  }
}
