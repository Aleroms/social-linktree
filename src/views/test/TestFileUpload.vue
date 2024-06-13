<template>
  <div>
    <h1>upload file</h1>
    <FormKit type="form" @submit="handleUploadFile">
      <FormKit type="file" name="profile_img" />
    </FormKit>
  </div>
</template>

<script setup lang="ts">
import { uploadFileToS3 } from '@/plugins/Amplify'
async function handleUploadFile(values: {}) {
  const response = await uploadFileToS3(values)
}
</script>

<style scoped></style>
