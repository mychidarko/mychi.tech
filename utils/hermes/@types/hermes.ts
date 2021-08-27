import { AxiosResponse } from "axios";

export interface HermesData {
	data?: any;
	url?: string;
	method?: "POST" | "GET" | "PUT";
	token?: string | null;
};

export type HookResponse = [
	response: Partial<AxiosResponse<any>>,
	loading: boolean,
	error: any,
];
