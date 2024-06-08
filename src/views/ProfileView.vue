<template>
  <section class="profile-container">
    <h1>My Profile</h1>
    <p>This is where you can add, remove and update information from your linktree.</p>
    <nav>
      <RouterLink to="/"> go back</RouterLink>
      <LinkButton :details="{ link: '/', platform: 'Preview' }" />
      <button @click="logout">Logout</button>
    </nav>

    <FormKit type="form" @submit="updateUserInfo">
      <h2>Update Form</h2>
      <p v-if="profile_display">{{ profile_display_message }}</p>
      <!-- <FormKit type="file" label="Profile Image" accept=".png,.jpeg,.jpg" multiple="false" /> -->
      <FormKit
        type="text"
        label="Full Name"
        name="fullname"
        placeholder="Evan You"
        validation="length:1,100"
      />
      <FormKit
        type="text"
        label="Location"
        name="location"
        placeholder="Los Angeles, CA"
        validation="length:1,100"
      />
      <FormKit
        type="text"
        label="Quote"
        name="quote"
        placeholder="Front-end developer and..."
        validation="length:1,100"
      />
      <FormKit
        type="text"
        label="Title"
        name="title"
        placeholder="Software Developer"
        validation="length:1,100"
      />
      <FormKit
        type="text"
        label="Username"
        name="user_id"
        placeholder="EvanYou_VueDev"
        help="Pick a username people will search you by!"
        validation="required:trim|contains_alphanumeric"
      />
      <h2>Social Linktree</h2>
      <FormKit type="list" name="linktree" :value="[{}]" dynamic #default="{ items, node, value }">
        <FormKit
          type="group"
          name="linktree"
          v-for="(item, index) in items"
          :key="item"
          :index="index"
        >
          <div class="group">
            <FormKit type="text" name="platform" label="Platform" placeholder="GitHub" />
            <FormKit type="url" name="link" label="URL" placeholder="https://github.com/" />
            <button type="button" @click="() => node.input(value!.filter((_, i) => i !== index))">
              - Remove
            </button>
          </div>
        </FormKit>
        <button type="button" @click="() => node.input(value!.concat({}))">+ Add another</button>
      </FormKit>
    </FormKit>
    <AuthButton name="Delete Account" link="deleteAccount" />
  </section>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import LinkButton from '@/components/LinkButton.vue'
import { type Profile } from '@/common/types'
import AuthButton from '@/components/AuthButton.vue'
import { InsertUserToTable } from '@/plugins/Amplify'
const user = useUserStore()
const router = useRouter()

const profile_display = ref(false)
const profile_display_message = ref('submitting data')

function updateUserInfo(values: Profile) {
  console.log(values)
  try {
    InsertUserToTable(values)
    user.profileUpdate(values.user_id)
  } catch (error) {
    console.log(error)
  }
  // push next route which displays the user's profile card
  router.push('/user/' + values.user_id)
}

function logout() {
  user.logout()
  router.push('/')
}
</script>

<style scoped>
.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

nav {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
