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
  location: string
  quote: string
  linktree: { platform: string; url: string }[]
  user_id: string
}
