export interface LoginValues {
  password: String
  username: String
}

export interface EmailAndPassword {
  email: string
  password: string
}

export interface Profile {
  name: string
  email?: string
  location: string
  quote: string
  linktree: { platform: string; link: string }[]
  user_id: string
}
