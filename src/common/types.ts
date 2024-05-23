export interface LoginValues {
  password: String
  username: String
}

export interface Profile {
  name: string
  location: string
  quote: string
  linktree: Array<{ platform: string; url: string }>
  imageUrl: string
}
