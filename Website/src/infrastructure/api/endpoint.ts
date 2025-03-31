import axios from "axios";

export async function EntityPostRequest(data: any, url: string) {
  try {
    const response = await axios.post(url, data);
    return response;
  } catch (error) {
    console.error("Error posting entity:", error);
    throw error;
  }
}

export async function EntityGetRequest(url: string) {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.error("Error getting entity:", error);
    throw error;
  }
}

export async function EntityPatchRequest(data: any, url: string) {
  try {
    const response = await axios.patch(url, data);
    return response;
  } catch (error) {
    console.error("Error patching entity:", error);
    throw error;
  }
}

export async function EntityDeleteRequest(url: string) {
  try {
    const response = await axios.delete(url);
    return response;
  } catch (error) {
    console.error("Error deleting entity:", error);
    throw error;
  }
}
