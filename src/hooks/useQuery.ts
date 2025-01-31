import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Click,
  URLInfo,
  URLRequest,
  URLResponse,
  UsePostRequestOptions,
} from "../types/data";

const apiUrl = import.meta.env.VITE_API_URL;

const fetchTotalClicks = async (token: string) => {
  const response = await fetch(`${apiUrl}/api/urls/totalClicks`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
  });

  const data = await response.json();
  return data;
};

const fetchClicksPerUrl = async (token: string, slug: string) => {
  const response = await fetch(`${apiUrl}/api/urls/analytics/${slug}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
  });

  const data = await response.json();

  return data;
};

const fetchAllUrls = async (token: string) => {
  const response = await fetch(`${apiUrl}/api/urls/myurls`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
  });

  const data: URLInfo[] = await response.json();
  return data;
};

export const postUrl = async ({
  data,
  token,
}: {
  data: URLRequest;
  token: string;
}): Promise<URLResponse> => {
  const response = await fetch(`${apiUrl}/api/urls/shorten`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create URL");
  }

  return response.json();
};

export const useFetchTotalClicks = (token: string) => {
  return useQuery({
    queryKey: ["fetchTotalClicks"],
    queryFn: () => fetchTotalClicks(token),
    select: (data) => {
      const convertToArray: Click[] = Object.keys(data).map((key) => ({
        clickDate: key,
        count: data[key],
      }));
      return convertToArray;
    },
  });
};

export const useFetchClicksPerUrl = (token: string, slug?: string) => {
  return useQuery<Click[]>({
    queryKey: ["fetchClicksPerUrl", slug],
    queryFn: () => fetchClicksPerUrl(token, slug!),
    enabled: !!slug,
  });
};

export const useFetchAllUrls = (token: string) => {
  return useQuery<URLInfo[]>({
    queryKey: ["fetchAllUrls"],
    queryFn: () => fetchAllUrls(token),
  });
};

export const usePostRequest = <Data, Variables>({
  mutationFn,
  onSuccess,
  onError,
  invalidateKeys = [],
}: UsePostRequestOptions<Data, Variables>) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn,
    onSuccess: (data) => {
      if (invalidateKeys.length > 0) {
        invalidateKeys.forEach((key) =>
          queryClient.invalidateQueries({ queryKey: [key] }),
        );
      }
      if (onSuccess) onSuccess(data);
    },
    onError: (error) => {
      if (onError) onError(error as Error);
    },
  });

  return { ...mutation };
};
