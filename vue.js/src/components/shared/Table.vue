<template>
    <div>
        <table class="table">
            <thead>
            <tr>
                <th v-for=" label of labels" :key="label">
                    <abbr :title="label">{{label}}</abbr>
                </th>
            </tr>
            </thead>
            <tfoot>
            <tr>
                <th v-for=" label of labels" :key="label">
                    <abbr :title="label">{{label}}</abbr>
                </th>
            </tr>
            </tfoot>
            <slot></slot>
        </table>
        <nav class="pagination">
            <a
                    class="pagination-previous"
                    title="This is the first page"
                    :disabled="isDisabled(total, amountPerPage, pageNumber, -1)"
                    @click="!isDisabled(total, amountPerPage, pageNumber, -1) && navigateToPage(pageNumber - 1)"
            >
                Previous
            </a>
            <a
                    class="pagination-next"
                    :disabled="isDisabled(total, amountPerPage, pageNumber, 1)"
                    @click="!isDisabled(total, amountPerPage, pageNumber, 1) && navigateToPage(pageNumber + 1)">
                Next page
            </a>
            <ul class="pagination-list">
                <li v-for=" (page,index) in pagesArray" :key="index">
                    <a
                            class="pagination-link"
                            :class="{
                'is-current':pageNumber === (index + 1)
              }"
                            @click="navigateToPage(index + 1)">
                        {{index + 1}}
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
  name: "cp-table",
  props: {
    labels: {
      type: Array,
      required: true
    },
    amountPerPage: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    pageNumber: {
      type: Number,
      default: 1
    },
    navigateToPage: {
      type: Function
    }
  },
  methods: {
    isDisabled(total, amountPerPage, pageNumber, operation) {
      const res =
        pageNumber + operation < 1 ||
        Math.ceil(total / amountPerPage) < pageNumber + operation;
      return res || null;
    }
  },
  computed: {
    pagesArray() {
      return new Array(Math.ceil(this.total / this.amountPerPage)).fill(1);
    }
  }
};
</script>
