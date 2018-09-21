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
        "oil-company-detail": "oilCompany",
        "oil-station-detail": "oilStationApply",
        "oil-station-checked-detail": "oilStation"
      };
      const storeState = this.$store.state;
      let routeName = storeState.listPage.slideRoute.name || this.$route.name;
      return `/webAPI/${routeMap[routeName]}/getFile?id=${
        this.attachment.id
      }&fileName=${this.attachment.name}`;
    }
  }
};
</script>
