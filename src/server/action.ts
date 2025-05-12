"use server"

export const findUserCountry = async () => {
    try {
      const request = await fetch(`${process.env.API_URL}${process.env.IP_FIND}`);
      const jsonResponse = await request.json();
      return {name:jsonResponse.country, code:jsonResponse.country_code};
    } catch (error) {
      console.error("Error fetching IP data:", error);
      throw error; 
    }
  };