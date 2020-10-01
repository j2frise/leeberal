<template>
    <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                <img :src="img" alt="" class="icon">
                <b>{{title}}</b>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                {{value}}
            </div>
    </div>

</template>

<script>

export default {
  name: "ElementCard",
  props: ['title', 'img', 'value']
};
</script>

<style lang="css" scoped>

.icon {
    width: 10px;
    margin-right: 5px;
    position: relative;
    top: -1px;
}

.row {
    margin-top: 10px;
}

</style>