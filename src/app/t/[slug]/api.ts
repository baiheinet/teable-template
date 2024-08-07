import { transformRecord } from "@/app/api";

export const getTemplate = async (id: string) => {
  const tableId = process.env.TABLE_ID;
  const token = process.env.AUTH_TOKEN;
  // get a specific record by id
  const url = `https://t.seg.plus/api/table/${tableId}/record/${id}?fieldKeyType=id`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-cache",
  });

  const result = await response.json();
  return transformRecord(result);
};
