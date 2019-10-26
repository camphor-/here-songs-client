import { SocketMessage } from '@/models/SocketMessage'

// TODO: SOCKET_URLの設定
const SOCKET_URL = `${process.env.BASE_WEBSOCKET_URL}/ws`

const WebSocketPlugin = (store: any) => {
  let socket: WebSocket | null = null

  store.subscribe((mutation: { type: string; payload: any }) => {
    if (mutation.type === 'currentSession/setSession') {
      if (mutation.payload) {
        socket = new WebSocket(SOCKET_URL)
        socket.onmessage = (e: MessageEvent) => {
          console.log(e.data)
          const message = JSON.parse(e.data) as SocketMessage
          // TODO: 残りケースの実装 cf) https://github.com/camphor-/here-songs-server/blob/master/docs/API.md#get-apiv2ws
          switch (message.type) {
            case 'ADDTRACK':
              store.commit('currentSession/addTrack', message.track)
              break
            case 'NEXTTRACK':
              store.commit('currentSession/nextTrack', message.head)
              break
            case 'PLAY':
              store.commit('currentSession/setPaused', false)
              break
            case 'PAUSE':
              store.commit('currentSession/setPaused', true)
              break
            case 'RESUME':
              store.commit('currentSession/setPaused', false)
              break
            case 'INTERRUPT':
              break
            case 'PROGRESS':
              break
            default:
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const _: never = message
          }
        }
      }
    }
  })
}
export default WebSocketPlugin
