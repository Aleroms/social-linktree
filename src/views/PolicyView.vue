<template>
  <div class="privacy-container">
    <h1>Privacy Policy</h1>
    <h3>Effective Date: May 5, 2024</h3>
    <ol>
      <!-- Section 1: Introduction  -->
      <li>
        <h4>Introduction</h4>
        <p>
          {{ projectName }} App ("we," "our," or "us") is committed to protecting your privacy. This
          Privacy Policy explains how we collect, use, disclose, and safeguard your personal
          information when you use our website {{ url }} and our services.
        </p>
      </li>
      <!-- Section 2: Information We Collect -->
      <li>
        <h4>Information We Collect</h4>
        <p>
          - Personal Information: We may collect information such as your name, email address, and
          other personally identifiable information when you use our services.
        </p>
        <p>
          - Usage Information: We may collect non-personal information about your interactions with
          our website and services, including but not limited to your IP address, browser type, and
          device information.
        </p>
      </li>

      <!-- Section 3: How We Use Your Information -->
      <li>
        <h4>How We Use Your Information</h4>
        <p>We may use the collected information for the following purposes:</p>
        <ul>
          <li>- To provide and improve our services.</li>
          <li>- To communicate with you and respond to your inquiries.</li>
          <li>- To personalize your experience.</li>
          <li>- To analyze website usage and trends.</li>
          <li>- To comply with legal obligations.</li>
        </ul>
      </li>

      <!-- Section 4: Disclosure of Your Information -->
      <li>
        <h4>Disclosure of Your Information</h4>
        <p>We may share your information in the following circumstances:</p>
        <ul>
          <li>- With service providers who assist us in providing our services.</li>
          <li>- When required by law or to protect our rights and safety.</li>
          <li>
            - In connection with the sale, merger, or transfer of all or a portion of our business.
          </li>
        </ul>
      </li>

      <!-- Section 5: Security -->
      <li>
        <h4>Security</h4>
        <p>
          We implement reasonable security measures to protect your information. However, no method
          of transmission or storage is completely secure, and we cannot guarantee the security of
          your data.
        </p>
      </li>

      <!-- Section 6: Your Choices -->
      <li>
        <h4>Your Choices</h4>
        <p>You have the right to:</p>
        <ul>
          <li>- Review and request changes to your personal information.</li>
          <li>- Opt out of receiving promotional communications from us.</li>
        </ul>
      </li>

      <!-- Section 7: Links to Other Websites -->
      <li>
        <h4>Links to Other Websites</h4>
        <p>
          Our website may contain links to third-party websites. We are not responsible for the
          privacy practices or the content of these websites.
        </p>
      </li>

      <!-- Section 8: Changes to This Privacy Policy -->
      <li>
        <h4>Changes to This Privacy Policy</h4>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any significant
          changes by posting the new Privacy Policy on our website.
        </p>
      </li>

      <!-- Section 9: Contact Us -->
      <li>
        <h4>Contact Us</h4>
        <p>
          If you have any questions or concerns about this Privacy Policy, please contact us at
          ccastu.green@outlook.com.
        </p>
      </li>

      <!-- Section 10: Consent -->
      <li>
        <h4>Consent</h4>
        <p>
          By using our website and services, you consent to the practices described in this Privacy
          Policy.
        </p>
      </li>
    </ol>
  </div>
  <RouterLink to="/">Go Back</RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
const projectName = 'Social Linktree'
const url = 'social-linktree.santiagomorales.dev'
</script>

<style scoped></style>
