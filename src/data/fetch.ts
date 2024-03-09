import { axiosInstance } from "../libs/axios";

/**
 * A type that describes the format of the server's response to a request for information about all users
 */
type UserResponse = Array<{
  id: number,
  username: string,
  email: string,
  registration_date: string
  rating: number
}>

/**
 * Retrieve raw user information from a remote server.
 * @export
 * @return {Promise<UserResponse>}
 */
export async function getUsers(): Promise<UserResponse> {
  const response = await axiosInstance.get(import.meta.env.VITE_USERS_MOCK_URL);

  return response.data;
}