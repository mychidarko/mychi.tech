export function success(data: any) {
	return {
		status: "success",
		data
	};
};

export function error(message: string, data: any = null) {
	const res: Record<string, any> = {
		status: "error",
		message
	};

	if (data) {
		res.data = data;
	}

	return res;
};
