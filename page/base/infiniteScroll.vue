<template>
  <div class="container">
    <div class="wrap" ref="wrap" @scroll="handleScroll">
      <div class="content" ref="content">
        <div class="item" v-for="ele in visibleData" :key="ele">
          <span>这是第--</span>
          <span>{{ele}}</span>
          <span>--个元素！！</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const initData = {
  // 预设值
  itemHeight: 50,
  buffCount: 0,
  data: []
}
const total = 10000
for (let i = 0; i < total; i++) {
  initData.data.push(`${i}+++${Math.ceil(Math.random() * 10)}`)
}

export default {
  data() {
    return {
      ...initData,
      visiableHeight: 0,
      visibleCount: 0,
      visibleData: []
    }
  },
  methods: {
    updateVisibleData(offsetStart) {
      // visibleDate从startIndex开始计算，此时前面共有startIndex个元素。（（从零开始） 1 + （之前元素）startIndex -1）
      const start = Math.floor(offsetStart / this.itemHeight)
      const end = start + this.visibleCount + 1 // +1 在滑动过程中，可能出现start、end各一半。实际显示元素+1
      this.visibleData = this.data.slice(start, end)

      this.$refs.content.style.paddingTop = start * this.itemHeight + 'px'
      // 总高度 paddingTop + visibleHeight + paddingBottom
      this.$refs.content.style.paddingBottom =
        (this.data.length - start - this.visibleCount) * this.itemHeight + 'px'
    },
    handleScroll() {
      // 滚动事件
      const offsetStart = this.$refs.wrap.scrollTop
      console.log(offsetStart)
      this.updateVisibleData(offsetStart)
    }
  },
  mounted() {
    this.visiableHeight = this.$refs.wrap.clientHeight
    this.visibleCount = Math.ceil(this.visiableHeight / this.itemHeight) + this.buffCount
    this.handleScroll()
  },
  updated() {
    console.log('----update----')
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.wrap {
  width: 300px;
  height: 500px;
  border: 1px solid pink;
  overflow-y: scroll;
}

.item {
  height: 49px;
  // text-align: center;
  border-bottom: 1px solid #999;
}
</style>
