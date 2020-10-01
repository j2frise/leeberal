<template>
      <div class="card-img text-center">
        <div class="img">
            <img :src="img" alt="">
        </div>
        <div class="info">
            <p>{{text}}</p>
        </div>
      </div>

</template>

<script>

export default {
  name: "CardImg",
  props: ['img', 'text']
};
</script>

<style lang="css" scoped>

</style>
