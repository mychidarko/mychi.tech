import { useCallback, useEffect, useState } from "react";
import { BreakPoints, GridTest } from "./@types/screen";

export const breakpoints: BreakPoints = {
    phone: 0,
    smallTab: 576,
    tab: 768,
    laptop: 992,
    desktop: 1200,
    largeScreen: 1400,
};

export const fullWidth = (typeof window !== "undefined") ? window.innerWidth : null;
export const fullHeight = (typeof window !== "undefined") ? window.innerHeight : null;

export const useScreen = () => {
    const [windowWidth, setWindowWidth] = useState(fullWidth);
    const [windowHeight, setWindowHeight] = useState(fullHeight);

    const handleResize = useCallback(() => {
        const width = fullWidth;
        const height = fullHeight;

        if (windowWidth !== width) {
            setWindowWidth(width);
        }

        if (windowHeight !== height) {
            setWindowHeight(height);
        }
    }, [windowWidth, windowHeight]);

    useEffect(() => {
        window && window.addEventListener("resize", handleResize);

        const cancel = () => window?.removeEventListener("resize", handleResize);

        return cancel;
    }, [handleResize]);

    return {
		width: windowWidth,
		height: windowHeight,
	};
}

export const useHeight = () => {
    const [size, setSize] = useState(window && window.innerHeight);

    const handleResize = useCallback(() => {
        const height = window && window.innerHeight;

        if (size !== height) {
            setSize(height);
        }
    }, [size]);

    useEffect(() => {
        window && window.addEventListener("resize", handleResize);

        const cancel = () => window && window.removeEventListener("resize", handleResize);

        return cancel;
    }, [handleResize]);

    return size;
}

export const useWidth = () => {
    const [size, setSize] = useState(window && window.innerWidth);

    const handleResize = useCallback(() => {
        const width = window && window.innerWidth;

        if (size !== width) {
            setSize(width);
        }
    }, [size]);

    useEffect(() => {
        window && window.addEventListener("resize", handleResize);

        const cancel = () => window && window.removeEventListener("resize", handleResize);

        return cancel;
    }, [handleResize]);

    return size;
}

export const xs: GridTest = (size = fullWidth) => {
    return (size < breakpoints.smallTab);
}

export const smDown: GridTest = (size = fullWidth) => {
    return (size < breakpoints.tab);
};

export const sm: GridTest = (size = fullWidth) => {
    return (size >= breakpoints.phone && fullWidth < breakpoints.tab);
};

export const smUp: GridTest = (size = fullWidth) => {
    return (size >= breakpoints.phone);
};

export const mdDown: GridTest = (size = fullWidth) => {
    return (size < breakpoints.laptop);
};

export const md: GridTest = (size = fullWidth) => {
    return (size >= breakpoints.tab && fullWidth < breakpoints.laptop);
};

export const mdUp: GridTest = (size = fullWidth) => {
    return (size >= breakpoints.tab);
};

export const lgDown: GridTest = (size = fullWidth) => {
    return (size < breakpoints.desktop);
};

export const lg: GridTest = (size = fullWidth) => {
    return (size >= breakpoints.laptop && fullWidth < breakpoints.desktop);
};

export const lgUp: GridTest = (size = fullWidth) => {
    return (size >= breakpoints.laptop);
};

export const xlDown: GridTest = (size = fullWidth) => {
    return (size < breakpoints.largeScreen);
};

export const xl: GridTest = (size = fullWidth) => {
    return (size >= breakpoints.desktop && fullWidth < breakpoints.largeScreen);
};

export const xlUp: GridTest = (size = fullWidth) => {
    return (size >= breakpoints.desktop);
};

export const xxl: GridTest = (size = fullWidth) => {
    return (size > breakpoints.largeScreen);
};
