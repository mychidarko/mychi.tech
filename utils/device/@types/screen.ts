export type GridTest = (size?: number) => boolean;

export interface BreakPoints {
    phone: number;
    smallTab: number;
    tab: number;
    laptop: number;
    desktop: number;
    largeScreen: number;
};

export interface Screen {
	width: number;
	height: number;
};

export type iDevice = "iPad" | "iPhone" | "iPod";
