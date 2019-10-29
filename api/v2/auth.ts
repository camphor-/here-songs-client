export const getLoginUrl = () => {
  // create login URL
  const authScopes = [
    'user-read-playback-state',
    'user-read-currently-playing',
    'user-read-private',
    'user-modify-playback-state',
    'playlist-read-private',
    'playlist-modify-private'
  ]
  return `https://accounts.spotify.com/authorize?client_id=${
    process.env.SPOTIFY_CLIENT_ID
  }&response_type=code&redirect_uri=${encodeURIComponent(
    process.env.BASE_URL + '/callback'
  )}&scope=${authScopes.join(',')}`
}
