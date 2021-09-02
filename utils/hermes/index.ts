import axios, { AxiosPromise, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { HermesData, HookResponse } from "./@types/hermes";

// our network system powered by the Olympian god of transport

export default class HermesConfig {
	static baseUrl: string = "";

	static token: string;

	static parseErr: boolean = true;

	static blockOffline: boolean = true;

	static onAuthError: Function;

	static onServerError: Function;
};

export function hermes({
	data,
	url,
	method = "GET",
	token = null,
	options = {
		parseErr: HermesConfig.parseErr,
		blockOffline: HermesConfig.blockOffline,
	},
}: HermesData): AxiosPromise {
	const headers: any = {};
	const requestURL = `${HermesConfig.baseUrl}${url}`;

	if (token) {
		headers.Authorization = `Bearer ${token}`;
	} else if (HermesConfig.token) {
		headers.Authorization = `Bearer ${HermesConfig.token}`;
	}

	return new Promise(async (resolve, reject) => {
		if (!window.navigator.onLine && options.blockOffline) {
			return reject(
				"No network detected! This feature requires an internet connection!"
			);
		}

		try {
			const response = await axios({
				data,
				url: requestURL,
				method,
				headers,
			});

			return resolve(response);
		} catch (err: any) {
			if (!options.parseErr) {
				return reject(err);
			}

			if (err.response) {
				const onAuthError =
					options.onAuthError || HermesConfig.onAuthError;

				if (err.response.status === 401 && onAuthError) {
					onAuthError(err);
				}

				const onServerError =
					options.onServerError || HermesConfig.onServerError;

				if (err.response.status === 500 && onServerError) {
					onServerError(err);
				}

				return reject(err.response);
			}

			if (err.message) {
				return reject(err.message);
			}

			const errors = err.split(" ");
			let errorString = "";

			for (let index = 0; index < errors.length; index + 1) {
				const error = errors[index];

				if (index > 0) {
					errorString = `${errorString} ${error} `;
				}
			}

			return reject(errorString);
		}
	});
}

export function useHermes(
	url: string,
	options: Partial<HermesData> = {
		method: "GET",
	}
): HookResponse {
	const [loading, setLoading] = useState(true);
	const [response, setResponse] = useState<Partial<AxiosResponse<any>>>({});
	const [error, setError] = useState(null);

	const makeRequest = () => {
		hermes({ url, ...options })
			.then((res) => {
				setResponse(res);
			})
			.catch((err) => {
				setError(err);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	useEffect(() => {
		makeRequest();

		if (options.refresh) {
			const refresh = setInterval(() => {
				makeRequest();
			}, options.refresh);

			return () => {
				clearInterval(refresh);
			};
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return [response, loading, error];
}

export function useGet(url: string, options: Partial<HermesData> = {}) {
	return useHermes(url, {
		method: "GET",
		...options,
	});
}

export function withGet() {
	return useGet;
}

export function usePost(url: string, options: Partial<HermesData> = {}) {
	return useHermes(url, {
		method: "POST",
		...options,
	});
}

export function usePut(url: string, options: Partial<HermesData> = {}) {
	return useHermes(url, {
		method: "PUT",
		...options,
	});
}
