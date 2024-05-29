import { signUp } from 'aws-amplify/auth'
import { type EmailAndPassword } from '@/common/types'
async function SignUpWithAmplify(values: EmailAndPassword) {
  const result = await signUp({
    username: values.email,
    password: values.password
  })
  return result
}

export { SignUpWithAmplify }
