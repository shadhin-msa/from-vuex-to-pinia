<script>
import { useEventStore } from "../stores/EventStore";
import EventCard from '../components/EventCard.vue'
import { onMounted, computed } from "vue";
export default {
  components: {
    EventCard
  },
  setup() {
    const eventStore = useEventStore()
    const fetchEvents = () => {
      eventStore.fetchEvents().catch(error => {
        this.$router.push({
          name: 'ErrorDisplay',
          params: { error: error }
        })
      })
    }

    // const events = computed( () => eventStore.events)

    onMounted(() => {
      fetchEvents()
    })
    return {
      eventStore,
      fetchEvents,
      // events
    }

  },
  computed: {
    // events() {
    //   return this.$store.state.events
    // }
  }
}
</script>

<template>
  <h1>Events for Good</h1>
  no of Events <b>{{eventStore.noOfEvents}}</b>
  <div class="events">
    <EventCard v-for="event in eventStore.events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
