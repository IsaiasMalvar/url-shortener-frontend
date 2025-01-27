export interface ClickInfoList {
  clickList: Click[];
}

export type Click = {
  clickDate: string;
  count: number;
};

export interface URLInfo {
  originalUrl: string;
  shortUrl: string;
}

export interface URLRequest {
  originalUrl: string;
}

export interface URLResponse {
  shortUrl: string;
}

export type UsePostRequestOptions<Data, Variables> = {
  mutationFn: (variables: Variables) => Promise<Data>;
  onSuccess?: (data: Data) => void;
  onError?: (error: Error) => void;
  invalidateKeys?: string[];
};
