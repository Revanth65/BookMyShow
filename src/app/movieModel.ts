export interface Movie {
  id: number;
  name: string;
  cast: string;
  language: string;
  genre: string;
  locations: Array<Location>;
  location?: any;
};

export interface Location {
  name: string,
  available: boolean
}