import { defineStore } from "pinia";
import EventService from "../services/EventService";

export const useEventStore = defineStore('eventStore', {
  state: () => ({ events:[], event: {} }),
  // state: function () {
  //   return { events:[] }
  // }
  getters: {
    noOfEvents: state => state.events.length
  },
  actions: {
    createEvent(event) {
      return EventService.postEvent(event)
        .then((response) => {
          this.events.push(response.data)
        })
        .catch(error => {
          throw error
        })
    },    
    fetchEvent (id) {
      const existingEvent = this.events.find(event => event.id === id)
      if(existingEvent) {
        console.log('existing....')
        this.event = existingEvent
        return Promise.resolve()
      } else {
        console.log('find in db....')
        return EventService.getEvent(id)
          .then(response => {
            this.event = response.data
          })
          .catch(error => {
            throw error
          })
      }
    },
    fetchEvents() {
      return EventService.getEvents()
        .then(response => {
          this.events = response.data
        })
        .catch(error => {
          throw error
        })
    }
  }
})
