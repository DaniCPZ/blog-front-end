<template>
  <InnerPageHero image-url="/images/image-3.jpg" title="Contact Us" />

  <div class="container mx-auto py-8 sm:py-12 px-4 sm:px-0">
    <div class="grid sm:grid-cols-3 sm:gap-4">
      <div>
        <span class="text-gray-500">Address:</span> {{ settings.address }}
      </div>
      <div><span class="text-gray-500">Phone:</span> {{ settings.phone }}</div>
      <div><span class="text-gray-500">Email:</span> {{ settings.email }}</div>
    </div>

    <div class="mt-8 sm:mt-16 grid sm:grid-cols-2 gap-8 sm:gap-12">
      <div>
        <iframe
          :src="settings.google_map_url"
          class="w-full"
          height="450"
          frameborder="0"
          style="border: 0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>

      <form class="p-8 bg-gray-300 shadow rounded space-y-4">
        <div>
          <input
            type="text"
            placeholder="Enter Name"
            class="
              px-4
              py-2
              w-full
              border
              focus:border-primary focus:outline-none
              rounded
              bg-gray-200
            "
            required
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Enter Email"
            class="
              px-4
              py-2
              w-full
              border
              focus:border-primary focus:outline-none
              rounded
              bg-gray-200
            "
            required
          />
        </div>

        <div>
          <input
            type="phone"
            placeholder="Phone Number"
            class="
              px-4
              py-2
              w-full
              border
              focus:border-primary focus:outline-none
              rounded
              bg-gray-200
            "
            required
          />
        </div>

        <div>
          <textarea
            placeholder="Enter Message"
            class="
              px-4
              py-2
              w-full
              border
              focus:border-primary focus:outline-none
              rounded
              bg-gray-200
            "
            rows="5"
            required
          ></textarea>
        </div>

        <button
          class="
            px-4
            py-2
            sm:px-6
            bg-primary
            text-white
            rounded
            focus:outline-none
          "
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import InnerPageHero from "../../components/InnerPageHero.vue";
import { useSettings } from "../../composables/useSettings.js";
export default {
  components: {
    InnerPageHero,
  },

  props: {},

  setup() {
    let { settings } = useSettings();
    return {
      settings,
    };
  },
};
</script>