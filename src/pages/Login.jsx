import React from 'react'



function Login() {
    const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=5bfddca63a0945f98acf7a810d02ae24&response_type=code&redirect_uri=http://localhost:5173&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-read-recently-played"

  return (
    <div className='flex items-center justify-center h-[100vh] bg-black'>
        <a className='bg-green-500 p-3 rounded-md font-semibold text-white' href={AUTH_URL}>Login to Spotify</a>
        
    </div>
  )
}

export default Login