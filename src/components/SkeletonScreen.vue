<template>
  <div>
    <SkeletonScreenItem v-for="(item, index) in 8" :key="index">
    
    </SkeletonScreenItem>
  </div>
</template>

<script>
import SkeletonScreenItem from "./SkeletonScreenItem";
export default {
  components: { SkeletonScreenItem },
};
</script>

<style lang="scss" scoped>
</style>