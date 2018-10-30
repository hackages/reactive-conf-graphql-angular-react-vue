<template>
    <tr>
        <th>{{talk.id}}</th>
        <td>{{talk.title}}</td>
        <td>{{talk.room}}</td>
        <td>{{talk.startsAt | date}}</td>
        <td>
            <router-link
                    class="button is-info is-outlined"
                    :to="`/secure/talk/${talk.id}/speaker`"
            >Manage speakers
            </router-link>
        </td>
        <td>
            <router-link
                    :to="`/secure/talk/${talk.id}`"
                    class="button is-primary is-outlined"
            >Edit
            </router-link>
        </td>
        <td>
            <a
                    class="button is-danger is-outlined"
                    @click="deleteTalk(talk.id)"
            >Delete</a>
        </td>
    </tr>
</template>


<script>
import { date } from "../../../filters";

export default {
  name: "talk-table-row",
  props: {
    talk: {
      type: Object,
      required: true
    },
    deleteTalk: {
      type: Function
    }
  },
  data() {
    return {};
  },
  filters: {
    date
  }
};
</script>
