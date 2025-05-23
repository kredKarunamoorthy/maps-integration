import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const eventDataUrl = "https://api.jikan.moe/v4/anime";

const getAllEventData = async () => {
  const response = await axios.get(eventDataUrl);
  console.log("Fetched Data:", response.data);
  return response.data;
};

export const UseGetAllData = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['allData'],
    queryFn: getAllEventData
  });

  return { data, isLoading, error };
};