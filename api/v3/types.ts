/* eslint-disable camelcase */

export interface Session {
  id: string
  name: string
  creator: Creator
  playback: Playback
  queue: Queue
}

export interface Creator {
  id: string
  display_name: string
}

export interface Playback {
  state: State
  device: Device | null
}

export type State = StopState | PauseState | PlayState

interface StopState {
  type: 'STOP'
}

interface PauseState {
  type: 'PAUSE'
  length: Number
  progress: Number
  remaining: Number
}

interface PlayState {
  type: 'PLAY'
  length: Number
  progress: Number
  remaining: Number
}

export interface Device {
  id: string
  is_restricted: boolean
  name: string
}

export interface Queue {
  head: number
  tracks: Track[]
}

export interface Track {
  uri: string
  id: string
  name: string
  duration_ms: number
  artists: Artist[]
  external_url: string
  album: Album
}

interface Artist {
  name: string
}

interface Album {
  name: string
  images: Image[]
}

interface Image {
  width: number
  height: number
  url: string
}

export interface User {
  id: string
  uri: string
  display_name: string
  is_premium: boolean
}

export type SocketMessage =
  | AddTrackMessage
  | NextTrackMessage
  | PlayMessage
  | PauseMessage
  | StopMessage
  | InterruptMessage
export interface BaseMessage {
  type: string
}

export interface AddTrackMessage extends BaseMessage {
  type: 'ADDTRACK'
}

export interface NextTrackMessage extends BaseMessage {
  type: 'NEXTTRACK'
  head: number
}

export interface PlayMessage extends BaseMessage {
  type: 'PLAY'
}

export interface PauseMessage extends BaseMessage {
  type: 'PAUSE'
}

export interface StopMessage extends BaseMessage {
  type: 'STOP'
}

export interface InterruptMessage extends BaseMessage {
  type: 'INTERRUPT'
}
