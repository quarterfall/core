export const patterns = {
    email: /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/i,
    youtube: /^(https?:\/\/)?(www\.)?youtu(be|\.be)?(\.com)?\/.+/i,
    github: /(?:git|ssh|https?|git@[-\w.]+):(\/\/)?(.*?)(\.git)(\/?|\#[-\d\w._]+?)$/i,
    time: /^[0-2]?\d:[0-5]\d(:[0-5]\d)?$/i,
    variable: /^[a-z][a-z_0-9]*$/i,
};