export interface PhotoInfo {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
  likes: number;
}
export interface Post {
  results: PhotoInfo[];
  totalPages: number;
}
