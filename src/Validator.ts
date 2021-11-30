import validator from "validator";
import { Url } from "./Url";

export const patterns = {
    email: /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/i,
    youtube: /^(https?:\/\/)?(www\.)?youtu(be|\.be)?(\.com)?\/.+/i,
    github: /(?:git|ssh|https?|git@[-\w.]+):(\/\/)?(.*?)(\.git)(\/?|\#[-\d\w._]+?)$/i,
    time: /^[0-2]?\d:[0-5]\d(:[0-5]\d)?$/i,
    variable: /^[a-z][a-z_0-9]*$/i,
};

export const isFloat = (value: string): boolean => {
    // remove trailing comma/point
    if (value[value.length - 1] === "," || value[value.length - 1] === ".") {
        value = value.substring(0, value.length - 1);
    }
    return validator.isFloat(value);
};

export const isJSON = (value: string): boolean => {
    return validator.isJSON(value);
};

export const isURL = (value: string): boolean => {
    return validator.isURL(value);
};

export const isEmail = (value: string): boolean => {
    return validator.isEmail(value);
};

export const isEmpty = (value: string): boolean => {
    return validator.isEmpty(value);
};

export const required = (value: string): boolean => {
    return !validator.isEmpty(value);
};

export const isVariable = (value: string): boolean => {
    return validator.matches(value, patterns.variable);
};

export const isYouTubeLink = (value: string): boolean => {
    return validator.matches(value, patterns.youtube);
};

export const isYouTubeEmbedLink = (value: string): boolean => {
    const m = validator.matches(value, patterns.youtube);
    const url = new Url(value);
    return (
        m &&
        (url.host === "youtu.be" ||
            ((url.path === "watch" || url.path === "playlist") &&
                (url.queryHasKey("v") || url.queryHasKey("list"))))
    );
};

export const isGitUrl = (value: string): boolean => {
    return validator.matches(value, patterns.github);
};

export const matches =
    (pattern: RegExp) =>
    (value: string): boolean => {
        return validator.matches(value, pattern);
    };

export const isLength =
    (options: { min?: number; max?: number }) =>
    (value: string): boolean => {
        return validator.isLength(value, options);
    };

export const hasCapitals = (value: string): boolean => {
    return validator.matches(value, /[A-Z]/);
};

export const hasNumbers = (value: string): boolean => {
    return validator.matches(value, /[0-9]/);
};

export const equals =
    (options: { comparison: number }) =>
    (value: string): boolean => {
        return validator.equals(value, options.comparison.toString());
    };

export const notEquals =
    (options: { comparison: number }) =>
    (value: string): boolean => {
        return !validator.equals(value, options.comparison.toString());
    };

export const isInteger =
    (options: any) =>
    (value: string): boolean => {
        return validator.isInt(value, options);
    };
