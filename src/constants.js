export const NAME = "news";
export const PAGESIZE = 20;

export const HEADLINES_AVAILABLE = `${NAME}/HEADLINES_AVAILABLE`;
export const CATEGORY_HEADLINES_AVAILABLE = `${NAME}/CATEGORY_HEADLINES_AVAILABLE`;
export const API_URL = "https://newsapi.org/v2";
export const API_KEY = "?apiKey=dad50750e7c54be5a39a9f90613c9fd0";
export const API_PARAMS = `&pageSize=${PAGESIZE}`;

export const HEADLINES = `${API_URL}/top-headlines${API_KEY}${API_PARAMS}`;

export const CATEGORIES = [
  "Business",
  "Entertainment",
  "General",
  "Health",
  "Science",
  "Sports",
  "Technology",
];
