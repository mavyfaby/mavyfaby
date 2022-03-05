<template>
  <section class="not-full h-[200px] flex justify-center items-center bg-slate-800">
    <div class="flex flex-col gap-4">
      <p class="text-slate-300 text-center font-medium text-sm sm:text-base mx-4">&copy; 2022 Maverick Fabroa. All rights reserved.</p>
      <div>
        <div class="flex justify-center gap-3">
          <div v-for="media in social" :key="media.name">
            <a :href="media.url" target="_blank">
              <mdicon
                class=" text-slate-400 hover:scale-[1.4] hover:rotate-[-360deg] cursor-pointer transition-all ease-in-out duration-500"
                size="32"
                :name="media.name">
              </mdicon>
            </a>
          </div>
        </div>
      </div>
      <p class="text-blue-300 text-center font-medium text-sm sm:text-base mx-4">
        <a class="text-sm" href="./privacy-policy" target="_blank">Privacy Policy</a>
      </p>
    </div>
  </section>
</template>

<script setup>
const social = [
  { name: "github", url: "https://github.com/mavyfaby" },
  { name: "facebook", url: "https://web.facebook.com/mavyfaby" },
  { name: "linkedin", url: "https://www.linkedin.com/in/mavyfaby" },
];
</script>