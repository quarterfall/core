export const patterns = {
    email: /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi,
    youtube: /^(https?:\/\/)?(www\.)?youtu(be|\.be)?(\.com)?\/.+/,
    github: /(?:git|ssh|https?|git@[-\w.]+):(\/\/)?(.*?)(\.git)(\/?|\#[-\d\w._]+?)$/,
    time: /^[0-2]?\d:[0-5]\d(:[0-5]\d)?$/,
    variable: /^[a-z][a-z_0-9]*$/i,
};