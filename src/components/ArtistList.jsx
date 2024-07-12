import React from "react";

function ArtistList({ item, choosePlay }) {
  return (
    <>
    <div className="">
    <div onClick={() => choosePlay(item)} className=' items-center space-x-3 justify-between gap-[6px] p-3   rounded-md bg-[#121212] w-[130px] hover:bg-[#1a1a1a]' key={item.uri.id}>
    <img className='rounded-md' src={item.img} alt="Img" width={222} height={220} />
    <div className='flex flex-col gap-[8px]'>
        <h2 className='text-[#f8f8f8] text-[16px] font-semibold'>{item.name}</h2>
        <p className='text-[#B3B3B3] font-normal text-[12px] '>{item.uri.name}</p>
    </div>
</div>
    </div>
     
    </>
  

  );
}

export default ArtistList;
