<template>
      <div class="lists">
          
        <h4>{{title}}</h4>
        <ul>
            <li v-for="(element, index) in elements" :key="index"> <a :href="element.link">{{element.name}}</a></li>
        </ul>
      </div>

</template>

<script>

export default {
  name: "Lists",
  props: ['title', 'elements']
};
</script>

<style lang="css" scoped>

</style>
