import {getId, getManifest} from "./runtime";

export const isBackground = (): boolean => {
    if (!getId()) {
        return false;
    }

    const manifest = getManifest();

    if (!manifest.background) {
        return false;
    }

    //@ts-ignore
    if (manifest.manifest_version === 3 && !manifest.background.scripts) {
        return typeof window === "undefined";
    }

    const backgroundPaths = ["/_generated_background_page.html"];

    return window !== undefined && backgroundPaths.includes(location.pathname);
};
