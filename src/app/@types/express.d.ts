declare namespace Express {
  export interface Request {
    userId: string;
    newToken: promise<string | undefined>;
  }
}