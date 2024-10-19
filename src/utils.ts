export const getPublicURL = (path: string) => {
    return `${process.env.PUBLIC_URL}${path}`;
}