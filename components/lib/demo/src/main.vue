<template>
  <h1 class="z-demo">Demo {{someProp}}</h1>
</template>

<script>
export default {
  name: 'z-demo',
  props: {
    someProp: {
      type: String
    }
  }
}
</script>
