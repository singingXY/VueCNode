<template>
  <div class="main">
    <transition name="fade">
      <loading v-if="isLoading"></loading>
    </transition>
    <div class="user-list">
      <div class="user-list-title">{{loginname}}收藏的话题</div>
      <ul class="list">
        <li v-for="list in collect"
            :key="list.id">
          <router-link :to="{ name: 'user', params: { loginname: list.author.loginname}}">
            <img class="avatar"
                 :src="list.author.avatar_url"
                 :alt="list.author.loginname" />
          </router-link>
          <p>
            <span class="type"
                  :class="{'typegood': list.good}"
                  v-if="list.tab">{{types[list.tab]}}</span>
            <span class="type typetop"
                  v-if="list.top">置顶</span>
          </p>
          <p class="title">
            <router-link :to="{ name: 'article', params:{ id: list.id }}">{{list.title}}</router-link>
          </p>
          <p class="count">
            <span>{{list.reply_count}}</span>
            /{{list.visit_count}}
          </p>
          <p class="date">{{changeTime(list.last_reply_at)}}</p>
        </li>
        <li v-if="collect == false">还没有收藏的话题，快去收藏吧( •̀ ω •́ )y</li>
      </ul>
    </div>
  </div>
</template>

<script>
import common from '../common.js'
import Loading from '@/components/loading.vue'
export default {
  name: 'collect',
  components: {
    Loading
  },
  data () {
    return {
      isLoading: true,
      loginname: this.$route.params.loginname,
      collect: [],
      types: { share: '分享', ask: '问答', job: '招聘', dev: '客户端测试' }
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.$fetch(common.api + '/topic_collect/' + this.loginname).then(
        collect => {
          this.isLoading = false
          this.collect = collect.data
          // console.log(this.collect);
        }
      )
    }
  }
}
</script>

<style scoped>
.list {
  margin-top: 0;
}
</style>
