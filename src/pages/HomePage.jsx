import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import VideoLibraryRoundedIcon from '@mui/icons-material/VideoLibraryRounded';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import   './Stayle.css'
function HomePage() {
  return (
    <div>
        <div className='Banner'>
            <a href=""><KeyboardArrowLeftOutlinedIcon fontSize='large' className='text-white bg-[#292828] ml-[50px] p-1 rounded-[50%]'/></a>
            <a href=""><KeyboardArrowRightOutlinedIcon fontSize='large' className='text-white bg-[#292828] p-1 absolute rounded-[50%] ml-[20px]'/></a>
            <p className='mt-[150px] ml-[50px] text-white text-3xl font-Circular Std font-sans'>Good afternoon</p>
            <h1 className='mt-[650px] text-white text-2xl ml-[50px]'>Your top mixes</h1>
         </div>
        <div className='bg-black w-[280px] h-[3000px] relative  text-white flex flex-col items-start'>
            <button className='ml-5'>
            <a href="/"><HomeOutlinedIcon/></a>
            <span className='ml-2 mt-[2px] absolute font-semibold'>Home</span></button>
            <button className='ml-5 mt-3'>
                <a href=""><SearchRoundedIcon/></a>
                <span className='ml-2 mt-[2px] absolute text-slate-300 '>Search</span></button>
            <button className='ml-5 mt-3'>
                <a href=""><VideoLibraryRoundedIcon/></a>
                <span className='ml-2 mt-[2px] absolute text-slate-300'>Your Library</span></button>
            <button className='ml-5 mt-[50px]'>
                <a href=""><AddBoxOutlinedIcon/></a>
                <span className='ml-2 mt-[2px] absolute text-slate-300'>Create Playlist</span></button>
            <button className='ml-5 mt-[20px]'>
                <a className="item_liked ml-1" href=""><FavoriteBorderRoundedIcon className='mt-[-4px]' fontSize='inherit'/></a>
                <span className='ml-2 mt-[-1px] absolute text-slate-300'>Liked Songs</span></button>
                <div className='line'>
                    <div className='flex flex-col space-y-3 text-slate-400 mt-5'>
                        <p>Chill Mix</p>
                        <p>Insta Hits</p>
                        <p>Your Top Songs 2021</p>
                        <p>Mellow Songs</p>
                        <p>Anime Lofi & Chillhop Music</p>
                        <p>BG Afro “Select” Vibes</p>
                        <p>Afro “Select” Vibes</p>
                        <p>Happy Hits!</p>
                        <p>Deep Focus</p>
                        <p>Instrumental Study</p>
                        <p>OST Compilations</p>
                        <p>Nostalgia for old souled mill...</p>
                        <p>Mixed Feelings</p>
                    </div>
                </div>
        </div>
        <div className=' bg-black w-[280px] absolute mt-[-3000px] h-[3000px] ml-[1069px] items-end'>
        <div className=' text-white flex flex-col items-start'>
            <button className='ml-5'>
            {/* <a href="/"><HomeOutlinedIcon/></a> */}
            <span className=' ml-[-10px] mt-[2px] absolute text-slate-300'>Friend Activity</span>
            <a href=""><PersonAddOutlinedIcon className='ml-[180px] text-slate-300'/></a>
            <a href=""><CloseOutlinedIcon className=' mt-[3px] ml-[10px] text-slate-300 absolute'/></a></button>
            <p className='mt-5 text-slate-300 p-3'>Let friends and followers on Spotify see what you’re listening to.</p>
            <div className='flex flex-col p-2 text-slate-300 '>
                <a href=""><PersonOutlineOutlinedIcon fontSize='large' className='bg-[#2c3331] p-1 w-[62px] h-[62px] rounded-[50%] mt-5'/></a>
                <div className='bg-[#2c3331] w-[90px] h-[7px] rounded-md absolute mt-[22px] ml-[45px]'>
                    <p className='bg-[#2c3331] w-[70px] h-[7px] rounded-md absolute mt-[10px] ml-[px]'/> 
                    <p className='bg-[#2c3331] w-[70px] h-[7px] rounded-md absolute mt-[20px] ml-[px]'/> 
                    </div>
                <a href=""><PersonOutlineOutlinedIcon fontSize='large' className='bg-[#2c3331] p-1 w-[62px] h-[62px] rounded-[50%] mt-5'/></a>
                <div className='bg-[#2c3331] w-[90px] h-[7px] rounded-md absolute mt-[78px] ml-[45px]'>
                    <p className='bg-[#2c3331] w-[70px] h-[7px] rounded-md absolute mt-[10px] ml-[px]'/> 
                    <p className='bg-[#2c3331] w-[70px] h-[7px] rounded-md absolute mt-[20px] ml-[px]'/> 
                    </div>
                <a href=""><PersonOutlineOutlinedIcon fontSize='large' className='bg-[#2c3331] p-1 w-[62px] h-[62px] rounded-[50%] mt-5'/></a>
                <div className='bg-[#2c3331] w-[90px] h-[7px] rounded-md absolute mt-[134px] ml-[45px]'>
                    <p className='bg-[#2c3331] w-[70px] h-[7px] rounded-md absolute mt-[10px] ml-[px]'/> 
                    <p className='bg-[#2c3331] w-[70px] h-[7px] rounded-md absolute mt-[20px] ml-[px]'/> 
                    </div>
                    <p className='p-1 mt-2 '> Go to Settings   Social and enable “Share my listening activity on Spotify.’ You can turn this off at any time.</p>
                    <button className=" w-[200px] ml-[30px]  mt-[20px] bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow">
                    SETTINGS
                    </button>
            </div>
           
        </div>
        </div>
       
    </div>
  )
}

export default HomePage