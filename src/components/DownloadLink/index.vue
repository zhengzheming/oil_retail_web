<template>
  <a
    :href="downloadUrl"
    class="text-link"
    target="_blank">{{ attachment.name }}</a>
</template>

<script>
export default {
  name: "DownloadLink",
  props: {
    attachment: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    downloadUrl() {
      let routeMap = {
        "oil-company": "oilCompany"
      };
      const curMatchedRoute = this.$route.matched.map(route => route.name);
      const matchedModule = Object.keys(routeMap).find(moduleName => {
        return curMatchedRoute.includes(moduleName);
      });
      return `/api/${matchedModule}/getFile/?id=${this.attachment.id}`;
    }
  }
};
</script>
