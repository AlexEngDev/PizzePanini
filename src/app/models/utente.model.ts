export interface Utente{
  id: number,
  username: string,
  password: string,
  role: "Admin" | "Base" | "Guest"
}
