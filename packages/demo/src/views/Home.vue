<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
      :class="
        $theme.css({
          bg: '#ccc'
        })
      "
    />
    <BaseText :css="{ bg: 'red' }">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque numquam
      sed fugiat corporis non maiores, ex debitis voluptatem illum! Animi
      consectetur at obcaecati similique natus repudiandae iure cupiditate
      voluptatum amet.</BaseText
    >
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  data: () => ({
    count: 5,
    showHorizontalScrollbar: false
  })
};
</script>
