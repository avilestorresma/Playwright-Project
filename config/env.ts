const baseUrl = process.env.BASE_URL;

if (!baseUrl) {
  throw new Error('BASE_URL is not defined');
}

export const env = {
  baseUrl,
};