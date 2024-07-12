import React, { useEffect, useState } from "react";
import { useAuth } from "../hook/useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import ArtistList from "../components/ArtistList";
import PlayBack from "./PlayBack";
import HomePage from "./HomePage";


function Dashboard({ code }) {

  
  const spotifyApi = new SpotifyWebApi({
    clientId: "5bfddca63a0945f98acf7a810d02ae24",
  });

  const accessToken = useAuth(code);
  const [title, setTitle] = useState("Sherali");  
  const [title2, setTitle2] = useState("Shoxruh") 
  const [title3, setTitle3] = useState("Ummon") 
  const [title4, setTitle4] = useState("Elyor") 
  const [title5, setTitle5] = useState("Ulug`bek") 
  // const [artist1, setArtist1] = useState("")

  const [play, setPlay] = useState("")
  const [playing, setPlaying] = useState(false)


  const choosePlay = (item) => {
    setPlay(item.uri.uri);
    setPlaying(true)
  }

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken, title, title2]);

  const [artist, setArtist] = useState([])
  


  useEffect(() => {
      spotifyApi.searchTracks(title).then((res) => {
        setArtist(
          res.body.tracks.items.map((item) => {
            const data = {
              img: item.album.images[0].url,
              name: item.name,
              uri: item.artists[0],
            };
            return data;
          })
        );
      });
   
  }, [title, title3, title2, title4, title5, accessToken,]);



  const [secondPerson, setSecondPerson] = useState([])

  useEffect(() => {
      spotifyApi.searchTracks(title2).then((res) => {
        setSecondPerson(
          res.body.tracks.items.map((item) => {
            const data = {
              img: item.album.images[0].url,
              name: item.name,
              uri: item.artists[0],
            };
            return data;
          })
        );
      });
  }, [title, title3, title2, title4, title5, accessToken]);

  const [thirdPerson, setThirdPerson] = useState([])
  useEffect(() => {
    spotifyApi.searchTracks(title3).then((res) => {
      setThirdPerson(
        res.body.tracks.items.map((item) => {
          const data = {
            img: item.album.images[0].url,
            name: item.name,
            uri: item.artists[0],
          };
          return data;
        })
      );
    });
}, [title, title3, title2, title4, title5, accessToken]);

const [forthPerson, setForthPerson] = useState([])
  useEffect(() => {
    spotifyApi.searchTracks(title4).then((res) => {
      setForthPerson(
        res.body.tracks.items.map((item) => {
          const data = {
            img: item.album.images[0].url,
            name: item.name,
            uri: item.artists[0],
          };
          return data;
        })
      );
    });
}, [title, title3, title2, title4, title5, accessToken]);


const [fifthPerson, setFifhPerson] = useState([])
  useEffect(() => {
    spotifyApi.searchTracks(title5).then((res) => {
      setFifhPerson(
        res.body.tracks.items.map((item) => {
          const data = {
            img: item.album.images[0].url,
            name: item.name,
            uri: item.artists[0],
          };
          return data;
        })
      );
    });
}, [title, title3, title2, title4, title5, accessToken]);

// const [firstArtist, setFirtsArtist] = useState([])
// useEffect(() => {

// spotifyApi.searchAlbums(artist1).then((res) => {
//   setFirtsArtist(
//     res.body.tracks.items.map((item) => {
//       const data = {
//         img: item.album.images[0].url,
//         name: item.name,
//         uri: item.artists[0],
//       };
//       return data;
//     })
//   );
// });
// }, [title, title3, title2, title4, title5, accessToken]);

  // useEffect(() => {
  //   if (title) {
  //     spotifyApi.searchTracks(title).then((res) => {
  //       setArtist(
  //         res.body.tracks.items.map((item) => {
  //           const data = {
  //             img: item.album.images[0].url,
  //             name: item.name,
  //             uri: item.artists[0],
  //           };
  //           return data;
  //         })
  //       );
  //     });
  //   } else {
  //     setArtist([]);
  //   }
  // }, [title, accessToken]);

// const seeAllmusic = () => {
//   if(seeAllmusic) {
//    {artist.slice(0,20).map((item, index) => (
//     <ArtistList key={index} choosePlay={() => choosePlay(item)} item={item} />
//   ))}}
  
//  else{
//   {artist.slice(0,4).map((item, index) => (
//     <ArtistList key={index} choosePlay={() => choosePlay(item)} item={item} />
//   ))}}
//  }
  // useEffect(() => {
  //   if(!accessToken) return
  //   spotifyApi.searchTracks(title).then((res) => {
  //       setArtist(
  //         res.body.tracks.items.map((item) => {
  //           const data =  {
  //             img: item.album.images[0].url,
  //             name: item.name,
  //             uri: item.artists[0],
              
  //           };
  //           return data;
  //         })
  //       );
  //     });
  // }, [title, accessToken]);


 

  return (
    <div>
     <HomePage/>
     {/* <p onClick={() =>ShowAll("mixes")}>
      {showAllMixes ? "Hide" : "See All"}
      <div className={`flex justify-center w-full mb-10 ${showAllMixes ? "flex flex-wrap" : "overflow-x-hidden"} space-x-[31px]`}>
        {mixes.map((item) => (
          <Swiper 
          choosePlay={() => choosePlay(item)}
          key={item.uri.id}
          item={item}/>
 
        ))}

      </div>
     </p> */}
     <div className="m-5">
        <input 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className=" absolute w-[300px] mt-[-2145px] ml-[700px] p-2 border-[1.5px] border-slate-400 rounded-full outline-none bg-slate-800 text-white "
          type="text"
          placeholder="Search music"
        />
      </div>
     <div className=" ">
        <div className=" flex gap-[50px]  p-2 mt-[-2060px] ml-[330px] absolute  flex-wrap  ">
          {/* <button onClick={() => seeAllmusic(item)} >See All</button> */}
          {artist.slice(0,4).map((item, index) => (
            <ArtistList key={index} choosePlay={() => choosePlay(item)} item={item} />
          ))}
        </div>
      </div>
      <input 
          value={title2}
          onChange={(e) => setTitle2(e.target.value)}
          className=" absolute w-[300px] mt-[-1800px] ml-[700px] p-2 border-[1.5px] border-slate-400 rounded-full outline-none bg-slate-800 text-white "
          type="text"
          placeholder="Search music"
        />
      <div> 
      <h1 className="text-white ml-[330px] text-2xl absolute mt-[-1800px]">Made for you</h1>
        <div className="flex gap-[50px]  p-2 mt-[-1700px] ml-[330px] absolute  flex-wrap">
      {secondPerson.slice(0,4).map((item, index) => (
          <ArtistList key={index} choosePlay={() => choosePlay(item)} item={item} />
        ))}
      </div>
      </div>
      <input 
          value={title3}
          onChange={(e) => setTitle3(e.target.value)}
          className=" absolute w-[300px] mt-[-1450px] ml-[700px] p-2 border-[1.5px] border-slate-400 rounded-full outline-none bg-slate-800 text-white "
          type="text"
          placeholder="Search music"
        />
      <div>
        <h1 className="text-white ml-[330px] text-2xl absolute mt-[-1450px]">Recently played</h1>
        <div className="flex gap-[50px]  p-2 mt-[-1350px] ml-[330px] absolute  flex-wrap">
        {thirdPerson.slice(0,4).map((item, index) => (
            <ArtistList key={index} choosePlay={() => choosePlay(item)} item={item} />
          ))}
        </div>
      </div>
      <input 
          value={title4}
          onChange={(e) => setTitle4(e.target.value)}
          className=" absolute w-[300px] mt-[-1050px] ml-[700px] p-2 border-[1.5px] border-slate-400 rounded-full outline-none bg-slate-800 text-white "
          type="text"
          placeholder="Search music"
        />
      <div>
        <h1 className="text-white ml-[330px] text-2xl absolute mt-[-1050px]">Jump back in</h1>
        <div className="flex gap-[50px]  p-2 mt-[-950px] ml-[330px] absolute  flex-wrap">
        {forthPerson.slice(0,4).map((item, index) => (
            <ArtistList key={index} choosePlay={() => choosePlay(item)} item={item} />
          ))}
        </div>
      </div>
      <input 
          value={title5}
          onChange={(e) => setTitle5(e.target.value)}
          className=" absolute w-[300px] mt-[-600px] ml-[700px] p-2 border-[1.5px] border-slate-400 rounded-full outline-none bg-slate-800 text-white "
          type="text"
          placeholder="Search music"
        />
      <div>
        <h1 className="text-white ml-[330px] text-2xl absolute mt-[-600px]">Uniquely yours</h1>
        <div className="flex gap-[50px]  p-2 mt-[-500px] ml-[330px] absolute  flex-wrap">
        {fifthPerson.slice(0,4).map((item, index) => (
            <ArtistList key={index} choosePlay={() => choosePlay(item)} item={item} />
          ))}

        </div>
        <div className=" bg-[#464141] w-full mt-[-20px]">
      <PlayBack  setPlaying={setPlaying} playing={playing} play={play} accessToken={accessToken} />

        </div>
        
      </div>
      {/* <div>
      <input 
          value={artist1}
          onChange={(e) => setArtist1(e.target.value)}
          className=" absolute w-[300px] mt-[-1050px] ml-[700px] p-2 border-[1.5px] border-slate-400 rounded-full outline-none bg-slate-800 text-white "
          type="text"
          placeholder="Search music"
        />
      {firstArtist.slice(0,4).map((item, index) => (
        <ArtistList key={index} choosePlay={() => choosePlay(item)} item={item} />
      ))}

      </div> */}
      
      
    </div>
  );
}

export default Dashboard;
