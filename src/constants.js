export const NAME = "news";
export const PAGESIZE = 20;

//Redux Action Types
export const HEADLINES_AVAILABLE = `${NAME}/HEADLINES_AVAILABLE`;
export const CATEGORY_HEADLINES_AVAILABLE = `${NAME}/CATEGORY_HEADLINES_AVAILABLE`;

//API URL
export const API_URL = "https://newsapi.org/v2";
export const API_KEY = "?apiKey=7ababcf101394efbba2bf646823e1499";
export const API_PARAMS = `&pageSize=${PAGESIZE}`;

//API End Points
export const HEADLINES = `${API_URL}/top-headlines${API_KEY}${API_PARAMS}`;

//CATEGORIES
export const CATEGORIES = [
  "Business",
  "Entertainment",
  "General",
  "Health",
  "Science",
  "Sports",
  "Technology",
];
