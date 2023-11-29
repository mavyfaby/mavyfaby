<template>
  <section class="not-full h-1/2 lg:h-screen flex flex-col lg:flex-row justify-between items-start lg:items-center mb-24 lg:mb-0" id="contact">
    <div>
      <div id="contact-container">
        <div data-depth="0.9">
          <h2 class="text-2xl lg:text-4xl font-extrabold text-slate-800 dark:text-slate-200 mb-2 text-center lg:text-left contact-title">Contact Me</h2>
        </div>
        <div data-depth="0.6">
          <p class="text-slate-700 dark:text-slate-300 text-md lg:text-lg font-medium leading-7 mb-8 text-center lg:text-left contact-subtitle">
            You may reach me by email or phone number. Feel free to write me a note using the form.
          </p>
        </div>
      </div>
      <div class="flex flex-col gap-4 mt-5 text-slate-600 dark:text-slate-400 text-sm lg:text-lg" id="contact-info-container">
        <div data-depth="0.5" class="flex col">
          <div class="flex gap-6 icons">
            <LocationMarkerIcon class="w-6 h-6" /> Mandaue City, Cebu
          </div>
        </div>
        <div data-depth="0.4" class="flex flex-col">
          <div class="flex gap-6 icons">
            <PhoneIcon class="w-6 h-6" /> 0922 9629 963
          </div>
          <div class="flex gap-6 mt-1 icons">
            <div class="w-6 h-6"></div> 0999 1671 605 
          </div>
        </div>
        <div data-depth="0.3">
          <div class="flex gap-6 icons">
            <MailIcon class="w-6 h-6" /> me@mavyfaby.me
          </div>
        </div>
      </div>
    </div>
    <div class="w-full lg:w-auto lg:mx-4 mt-12 lg:mt-0 pointer-events-auto" id="form-container">
      <div>
        <form class="bg-slate-50 dark:bg-slate-900 p-8 rounded-xl shadow-xl flex flex-col gap-y-5 contact-form" id="contact-form">
          <!-- 1st row -->
          <div class="grid grid-rows-2 lg:grid-rows-1 grid-cols-1 lg:grid-cols-2 gap-5">
            <div>
              <label for="firstname" class="font-medium leading-5 text-slate-700 dark:text-slate-300">First name <span class="text-red-500">*</span></label>
              <div class="mt-1 rounded-md shadow-sm">
                <input name="a" id="firstname" type="text" class="contact-input" :disabled="isSending || isSuccessfulSend" required />
              </div>
            </div>
            <div>
              <label for="lastname" class="font-medium leading-5 text-slate-700 dark:text-slate-300">Last name <span class="text-red-500">*</span></label>
              <div class="mt-1 rounded-md shadow-sm">
                <input name="b" id="lastname" type="text" class="contact-input" :disabled="isSending || isSuccessfulSend" required />
              </div>
            </div>
          </div>
          <!-- 2nd row -->
          <div class="grid gap-y-5">
            <div>
              <label for="email" class="font-medium leading-5 text-slate-700 dark:text-slate-300">Email <span class="text-red-500">*</span></label>
              <div class="mt-1 rounded-md shadow-sm">
                <input name="c" id="email" type="text" class="contact-input" :disabled="isSending || isSuccessfulSend" required />
              </div>
            </div>
          </div>
          <!-- 3rd row -->
          <div class="grid gap-y-5">
            <div>
              <label for="subject" class="font-medium leading-5 text-slate-700 dark:text-slate-300">Subject <span class="text-red-500">*</span></label>
              <div class="mt-1 rounded-md shadow-sm">
                <input name="d" id="subject" type="text" class="contact-input" :disabled="isSending || isSuccessfulSend" required />
              </div>
            </div>
            <div>
              <label for="message" class="font-medium leading-5 text-slate-700 dark:text-slate-300">Message <span class="text-red-500">*</span></label>
              <div class="mt-1 rounded-md shadow-sm">
                <textarea name="e" id="message" placeholder="Maximum 1000 characters" class="contact-input" rows="5" :disabled="isSending || isSuccessfulSend" required></textarea>
              </div>
            </div>
          </div>
          <div class="flex justify-center">
            <!-- Add checkbox for user to accept that their data will be sent securely and privately -->
            <div class="text-center">
              <input type="checkbox" v-model="agree" class="disabled:dark:text-slate-700 disabled:text-slate-400 rounded" :disabled="isSending || isSuccessfulSend" required />
              <span class="ml-2 text-slate-700 dark:text-slate-300 text-sm">I agree to all the statements included in our <a href="./privacy-policy" target="_blank" class="text-blue-700 dark:text-blue-300">privacy policy</a>.</span>
            </div>
          </div>
          <div class="flex justify-center items-center">
            <button @click.prevent="onSubmit" :disabled="!agree || isSending || isSuccessfulSend" class="submit-btn text-sm">
              <svg role="status" v-if="isSending" class="inline mr-2 w-5 h-5 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
              </svg>
              {{ isSending ? 'Sending...' : (isSuccessfulSend ? "Message sent!" : 'Send') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "@vue/runtime-core";
import { useToast } from "vue-toastification";
import { parseContactResponse, base64encode, isTouchscreen } from "../utils";
import { useReCaptcha } from 'vue-recaptcha-v3'

import MailIcon from "@heroicons/vue/24/outline/esm/EnvelopeIcon"
import PhoneIcon from "@heroicons/vue/24/outline/esm/PhoneIcon";
import LocationMarkerIcon from "@heroicons/vue/24/outline/esm/MapIcon";

import Parallax from "../lib/parallax";
import gsap from "gsap";

// Toast controller
const toast = useToast();

// reCAPTCHA
const { executeRecaptcha, recaptchaLoaded } = useReCaptcha();
// Agree checkbox
const agree = ref(false);
// Is sending
const isSending = ref(false);
// Is successful send
const isSuccessfulSend = ref(false);

/**
 * Handle submit error
 */
function onSubmitError(error) {
  console.log("Submit Error: ", error);

  // Set is sending to false
  isSending.value = false;
}

/**
 * Handle on submit message
 */
async function onSubmit() {
  // Check if the user agreed to the privacy policy
  if (!agree.value) {
    toast.warning("You must agree to the privacy policy to submit the form.");
    return;
  }

  // Check if already sent
  if (isSuccessfulSend.value) {
    toast.warning("You have already sent a message.");
    return;
  }

  // Parse form data
  const data = new FormData(document.getElementById("contact-form"));
  // Length of form data
  let formEntriesLength = 0;

  // Convert every data to base64
  for (const [key, val] of data.entries()) {
    // Normalize input
    const normalized = val.toString().trim();

    // Check if the normalized data is empty
    if (normalized.length === 0) {
      toast.warning("Please fill out all the fields.");
      return;
    }

    // Encode data to base64
    data.set(key, base64encode(normalized));

    // Increment form entries length
    formEntriesLength++;
  }

  // If form entries length is less than 5
  if (formEntriesLength < 5) {
    toast.warning("Please fill out all the fields.");
    return;
  }

  // Set sending to true
  isSending.value = true;

  // Wait until recaptcha loaded
  await recaptchaLoaded();
  // Execute reCAPTCHA with action
  const token = await executeRecaptcha("contact");

  // If empty token
  if (!token || token.length === 0) {
    toast.error("Something went wrong. Please try again.");
    return;
  }

  // Add reCAPTCHA token
  data.set("f", token);

  // Create a request
  const request = new XMLHttpRequest();

  request.onload = function() {
    // The response
    const response = request.responseText.trim();
    // Get appropriate message
    const [type, message] = parseContactResponse(response);

    // Set isSuccessfulSend to true if type is 1 or success
    isSuccessfulSend.value = type === 1;

    // Show toast message
    toast(message, { type: type === 1 ? "success" : "error", duration: 5000 });

    // Set sending to false
    isSending.value = false;
  };

  request.onerror = onSubmitError;
  request.onabort = onSubmitError;

  request.open("POST", "./message.php");
  request.send(data);
}

onMounted(() => {
  if (!isTouchscreen()) {
    new Parallax(document.getElementById("contact-container"));
    new Parallax(document.getElementById("contact-info-container"));
    new Parallax(document.getElementById("form-container"));
  } 

  setTimeout(() => {
    gsap.from(".contact-title, .contact-subtitle, .icons", {
      duration: 0.75,
      x: -300,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".contact-title",
        start: "center 75%",
        end: "center bottom",
        toggleActions: "play none resume reverse",
      }
    });

    gsap.from(".contact-form", {
      duration: 0.75,
      x: 300,
      scale: 0,
      opacity: 0,
      scrollTrigger: {
        trigger: ".contact-title",
        start: "top 75%",
        end: "center bottom",
        toggleActions: "play none resume reverse",
      }
    });
  }, 0);
});
</script>


<style scoped>
.contact-input {
  @apply disabled:bg-slate-50 dark:disabled:bg-slate-900 disabled:dark:text-slate-500 disabled:text-slate-400;
  @apply dark:text-slate-50 bg-slate-100 dark:bg-slate-800 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5 dark:border-slate-700 dark:focus:ring-blue-400 dark:focus:border-blue-400;
}

.submit-btn {
  @apply focus:ring-purple-200 dark:focus:ring-purple-800 disabled:shadow-none disabled:dark:shadow-none shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80;
  @apply disabled:bg-blue-300 disabled:hover:bg-blue-300 dark:disabled:bg-slate-700 dark:disabled:text-slate-400;
  @apply bg-blue-600 hover:bg-blue-500 transition-all duration-200 ease-in-out text-slate-50 py-3 px-5 rounded-lg;
}

#form-container {
  pointer-events: all !important;
}
</style>