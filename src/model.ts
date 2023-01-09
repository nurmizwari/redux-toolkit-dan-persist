export interface userType {
  id: number;
  user: string;
}

export interface attemptLogin {
  status: boolean;
  message: string;
  error: any;
}
