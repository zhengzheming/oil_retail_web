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
      return `/webAPI/${routeMap[this.$route.name]}/getFile?id=${
        this.attachment.id
      }&fileName=${this.attachment.name}`;
    }
  }
};
</script>
