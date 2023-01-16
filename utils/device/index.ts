import { iDevice, Screen } from "./@types/screen";
import { useScreen } from "./screen";

export const detectDeviceType = (userAgent: string) => {
	if (/(iPhone)/i.test(userAgent)) {
		return "iPhone";
	}

	if (/(iPod)/i.test(userAgent)) {
		return "iPod";
	}

	if (/(ipad)/i.test(userAgent)) {
		return "iPad";
	}

	if (/(tablet|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
		return "tablet";
	}
	
	if (
		/Mobile|Android|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
			userAgent
		)
	) {
		return "mobile";
	}

	return "desktop";
};

export const detectIDeviceModel = (deviceType: iDevice, dimensions: Screen) => {
	const pixelRatio = window.devicePixelRatio.toFixed(1);

	if (deviceType === "iPhone") {
		if (dimensions.width === 428 && dimensions.height === 926) {
			return "iPhone 12 Pro Max";
		}

		if (dimensions.width === 414 && dimensions.height === 896) {
			return "iPhone XS Max";
		}

		if (dimensions.width === 390 && dimensions.height === 844) {
			return "iPhone 12";
		}

		if (dimensions.width === 414 && dimensions.height === 896) {
			return "iPhone 11";
		}

		if (
			dimensions.width === 375
			&& dimensions.height === 812
			&& pixelRatio === "3.0"
		) {
			return "iPhone X";
		}

		if (
			dimensions.width === 414
			&& dimensions.height === 736
			&& pixelRatio === "3.0"
		) {
			return "iPhone 8 Plus";
		}

		if (
			dimensions.width === 375
			&& dimensions.height === 667
			&& pixelRatio === "2.0"
		) {
			return "iPhone 8";
		}

		if (
			dimensions.width === 414
			&& dimensions.height === 667
			&& pixelRatio === "3.0"
		) {
			return "iPhone 7 Plus";
		}

		if (dimensions.width === 375 && dimensions.height === 667 && pixelRatio === "3.0") {
			return "iPhone 6 Plus";
		}
	}

	if (deviceType === "iPod") {
		// 
	}

	if (deviceType === "iPad") {
		// 
	}
};

const useDevice = () => {
	const dimensions = useScreen();
	const userAgent = window.navigator?.userAgent;
	const deviceType = detectDeviceType(userAgent);
	const device = {
		type: deviceType,
		model: null,
		...dimensions,
	};
	
	if (deviceType === "iPhone") {
		return {
			...device,
			model: detectIDeviceModel(deviceType, dimensions),
		};
	}

	return device;
};

export default useDevice;
