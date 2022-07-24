<script>
import { useUserStore } from "../stores/UserStore";
export default {
  setup() {
    const userStore = useUserStore()

    return {
      userStore
      }
  },
}
</script>


<template>
  <div class="about">
    user Name is <b>{{userStore.lastName}}</b>
    <p>A site for events to better the world.</p>
  </div>
</template>
