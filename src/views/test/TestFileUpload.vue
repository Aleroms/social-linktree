<template>
  <div>
    <h1>Upload File</h1>
    <FormKit type="form" @submit="handleUploadFile">
      <FormKit type="file" name="profile_img" />
    </FormKit>
  </div>
</template>

<script setup lang="ts">
import { uploadFileToS3 } from '@/plugins/Amplify'
async function handleUploadFile(values: any) {
  console.log(values)
  const file = values.profile_img[0]
  const response = await uploadFileToS3(file)
}
</script>

<style scoped></style>
