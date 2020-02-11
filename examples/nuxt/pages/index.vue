<template>
  <VStack :gap="[5, 6]">
    <Cover
      as="header"
      min-height="60vh"
      :css="{
        bg: 'primary'
      }"
    >
      <Box :pad="[3, 4]">
        <Heading
          level="1"
          :css="{
            color: 'background'
          }"
          >Cover</Heading
        >
      </Box>
      <!-- <div slot="footer">
        footer
      </div> -->
    </Cover>

    <!-- <button @click="count++">Add</button> -->
    <VStack
      gap="3"
      :css="{
        px: [3, 4]
      }"
    >
      <HStack gap="3">
        <Heading level="2">VStack</Heading>
        <Spacer />
        <Slider
          min="1"
          max="5"
          :value="count"
          @input="count = Number($event.target.value)"
          :css="{
            width: 'auto'
          }"
        />
        <Spacer />
        <Button variant="outline">Show Code</Button>
      </HStack>

      <VStack :gap="[2, 3, 4]">
        <Box
          :pad="[2, 3, 4]"
          v-for="i in count"
          :key="i"
          :css="{
            bg: 'muted'
          }"
        >
          <Heading level="3">VStack Child {{ i }}</Heading>
        </Box>
      </VStack>
    </VStack>

    <VStack
      gap="3"
      :css="{
        px: [3, 4]
      }"
    >
      <Heading level="2">Inline</Heading>
      <Inline :gap="[2, 3, 4]">
        <Box
          :pad="[2, 3, 4]"
          v-for="i in 9"
          :key="i"
          :css="{
            bg: 'muted'
          }"
        >
          <Heading level="3"
            >{{ i % 2 === 0 ? "A Slightly Longer" : "Short" }} Inline
            Child</Heading
          >
        </Box>
      </Inline>
    </VStack>

    <VStack
      gap="3"
      :css="{
        px: [3, 4]
      }"
    >
      <Heading level="2">HorizontalScroll</Heading>
      <label>
        Show scrollbar
        <Generic
          as="input"
          type="checkbox"
          min="1"
          max="10"
          :checked="showHorizontalScrollbar"
          @change="showHorizontalScrollbar = $event.target.checked"
          :css="{
            color: 'primary'
          }"
        />
      </label>
      <HorizontalScroll
        :gap="[2, 3, 4]"
        :show-scrollbar="showHorizontalScrollbar"
      >
        <Box
          pad="6"
          v-for="i in 25"
          :key="i"
          :css="{
            bg: 'muted'
          }"
        ></Box>
      </HorizontalScroll>
    </VStack>

    <VStack
      gap="3"
      :css="{
        px: [3, 4]
      }"
    >
      <Heading level="2">AspectRatio</Heading>
      <AspectRatio ratio="16:9">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/cjgxmtUAwTg"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </AspectRatio>
    </VStack>

    <VStack
      gap="3"
      :css="{
        px: [3, 4]
      }"
    >
      <Heading level="2">Grid</Heading>
      <Grid :gap="[2, 3, 4]" width="20rem">
        <Box
          :pad="[2, 3, 4]"
          v-for="i in count"
          :key="i"
          :css="{
            bg: 'muted'
          }"
        >
          <Heading level="3">Heading {{ i }}</Heading>
          <BaseText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis incidunt, ex at necessitatibus temporibus debitis
            assumenda, magni cupiditate sit molestias minus sequi velit quos
            eius. Iure labore explicabo placeat assumenda!
          </BaseText>
        </Box>
      </Grid>
    </VStack>
  </VStack>
</template>

<script>
export default {
  name: "layout",
  data: () => ({
    count: 5,
    showHorizontalScrollbar: false
  })
};
</script>
