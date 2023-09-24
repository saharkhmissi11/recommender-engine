import client from "../utils";

 const addUser = async (userData) => {
  try {
    const response = await client.post(`createUser`, userData,{
        headers: {
          'Content-Type': 'application/json',
        },
      });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default{addUser}