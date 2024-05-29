export interface LoginValues {
  password: String
  username: String
}

export interface EmailAndPassword {
  email: string
  password: string
}
export interface ConfirmationCode {
  confirmationNumber: Number
}

export interface Profile {
  name: string
  location: string
  quote: string
  linktree: Array<{ platform: string; url: string }>
  imageUrl: string
}
