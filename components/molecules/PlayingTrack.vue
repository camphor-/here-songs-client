<template>
  <div class="playing">
    <div class="track-container">
      <img :src="playingTrack.album.images[1].url" alt="カバー画像" />
      <div class="track-info">
        <v-list-tile-title>{{ playingTrack.name }}</v-list-tile-title>
        <v-list-tile-sub-title
          >{{ artistNames }} -
          {{ playingTrack.album.name }}
        </v-list-tile-sub-title>
      </div>
    </div>

    <seekbar
      :length="playback.state.length"
      :progress="playback.state.progress"
      :remaining="playback.state.remaining"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Seekbar from '@/components/atoms/Seekbar.vue'
import { Playback, Track } from '@/lib/api/v3/types'
import { getArtistNames } from '@/lib/artist'

@Component({
  name: 'PlayingTrack',
  components: { Seekbar }
})
export default class extends Vue {
  @Prop({ required: true }) readonly playback!: Playback
  @Prop({ required: true }) readonly playingTrack!: Track

  get artistNames() {
    return getArtistNames(this.playingTrack.artists)
  }
}
</script>

<style lang="scss" scoped>
.playing {
  background-color: #ffffff;
  margin: 12px;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16);

  .track-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;

    img {
      width: 64px;
      height: 64px;
      object-fit: contain;
      margin-right: 12px;
    }
    .track-info {
      flex-grow: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
