import React, { useState } from "react"
import Image from "next/image"

import {NaviTwo} from "./../components/navi"

export default function GuanacoPage(props){

// for large screen lateral menu
let menuOptsArr=[
        "bio",
        "eventos",
        "discografia",
        "videos",
        "lyrics"
    ]

let instagramLink ="https://www.instagram.com/guanaco_mc/"
let twitterLink = "https://twitter.com/guanaco_mc?s=17"
let facebookLink = "https://www.facebook.com/guanacomcoficial/"
let youtubeLink = "https://www.youtube.com/channel/UCAbqgPCOhrOYMhpmPsbPXvg"
let spotifyLink = "https://open.spotify.com/artist/7hU7xPPEEDgzWw3Ao8SupC?si=UIn1jimpTLer-Fgjv1csZg&dl_branch=1"
let soundcloudLink = "https://soundcloud.com/guanaco-mc/tracks";
let managmentNumber = "00593996027198";
let managementEmail = "mabelenlara@gmail.com"

let spotifyPlayerEmbedding = <iframe src="https://open.spotify.com/embed/artist/7hU7xPPEEDgzWw3Ao8SupC?theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>

let albumArr=[
    {
        "imageLink": "/cholonizacion.jpg",
        "albumName": "Cholonizacion",
        "releaseYear": 2021,
        "youtubeMusicLink": "https://music.youtube.com/playlist?list=OLAK5uy_nFYVYV8LDK6AFgW1ZJke2lQlZctv8rHQk&feature=share",
        "spotifyLink": "https://open.spotify.com/album/1GQi1yenQMfJPqUz1toqvm?si=DpGLyxdjRIm0jCTNDwu1AA&dl_branch=1"
    },
    {
        "imageLink": "/blasfemia.jpg",
        "albumName": "Blasfemia",
        "releaseYear": 2018,
        "youtubeMusicLink": "https://music.youtube.com/playlist?list=OLAK5uy_mwJn2-rybQnKD1C-USEb0VxuZTsKaT29w&feature=share",
        "spotifyLink": "https://open.spotify.com/album/0jdWJQNZGVPurfLKVvXeje?si=geJ8o3MAQwGYhdCbaGdSOw&dl_branch=1"
    },
    {
        "imageLink": "/raiz.jpg",
        "albumName": "Raiz",
        "releaseYear": 2013,
        "youtubeMusicLink": "https://music.youtube.com/playlist?list=OLAK5uy_msXDNHZu8Kn7lyjyrWLwaSh4R-I4z9YfA&feature=share",
        "spotifyLink": "https://open.spotify.com/album/5mD62fu4zrv7GVdnPevo8H?si=yNFgZ_roQ8eJzwwgg5gqYg&dl_branch=1"
    },
    {
        "imageLink": "/raiz.jpg",
        "albumName": "Primer Round",
        "releaseYear": 2007,
        "youtubeMusicLink": "https://music.youtube.com/playlist?list=OLAK5uy_lIpfBMtb7cMLVREnXmIW8G3_wrPZvbkYI&feature=share",
        "spotifyLink": "https://open.spotify.com/album/5mPDuemk0uvLVF76JhZLiB?si=fafAo-ejRpK63s3HJ9hi5w&dl_branch=1"
    },
    {
        "imageLink": "/leccionesDeSana.jpg",
        "albumName": "Lecciones de Saña y Maña",
        "releaseYear": 2002,
        "youtubeMusicLink": "https://music.youtube.com/playlist?list=OLAK5uy_lDjF3AdsPQmVLLkVyhUzFhhBIdjyDOXvY&feature=share",
        "spotifyLink": "https://open.spotify.com/album/27yUzP6UJ4vu25TdDrZIvO?si=d9kSW8BJTUq5KKHC3oEOhQ&dl_branch=1"
    },
]

let videoArr=[
    {
        "videoLink": "PWxuAbU3axQ",
        "videoTitle": "Cholonización ft. Emicida",
        "releaseDate": 2018,
        "videoType": "music video"
    },
    {
        "videoLink": "JQJbkOH9TPA",
        "videoTitle": "MUÉVETE ft. Karina Clavijo",
        "releaseDate": 2018,
        "videoType": "music video"
    },
    {
        "videoLink": "FnfD8S3CwQs",
        "videoTitle": "EPK Blasfemia",
        "releaseDate": 2016,
        "videoType": "EPK"
    },
    {
        "videoLink": "IXCvWzSxulo",
        "videoTitle": "El Original",
        "releaseDate": 2018,
        "videoType": "music video"
    },
    {
        "videoLink": "a5CB7BFGj8M",
        "videoTitle": "Siembra",
        "releaseDate": 2012,
        "videoType": "music video"
    },
    {
        "videoLink": "91L3pO8X9aE",
        "videoTitle": "Vamos pa la calle ft. Elder",
        "releaseDate": 2013,
        "videoType": "music video"
    },
    {
        "videoLink": "J_RvnNMgDN4",
        "videoTitle": "Fuego (Feat. Alika)",
        "releaseDate": 2018,
        "videoType": "music video"
    },
    {
        "videoLink": "2tMrIXRId80",
        "videoTitle": "EPK 2013 - 2014",
        "releaseDate": 2013,
        "videoType": "EPK"
    },
    {
        "videoLink": "TKDM9bZ8PBU",
        "videoTitle": "Me Voy - Sesiones Al Parque",
        "releaseDate": 2019,
        "videoType": "live music"
    },
    {
        "videoLink": "KvUueg4GCYo",
        "videoTitle": "Soledad - Epicentro Arte En Vivo",
        "releaseDate": 2016,
        "videoType": "live music"
    },
    {
        "videoLink": "PJm001Zu7TQ",
        "videoTitle": "Canción Para Juan - Epicentro Arte En Vivo",
        "releaseDate": 2016,
        "videoType": "live music"
    },
    {
        "videoLink": "zhkrJ1G-Ajk",
        "videoTitle": "Lejos - Epicentro Arte En Vivo",
        "releaseDate": 2016,
        "videoType": "live music"
    },
]

// for floating mobile menu
// let menuIconArr=[
        // <AssignmentIndIcon />,
        // <MicIcon />,
        // <AlbumIcon />,
        // <TvIcon />,
        // <MenuBookIcon />
    // ]

    // Bio
    // Merch
    // Cholonizacion
    // discografia
    // eventos
    // 

// Landing: 
// Cholonizacion landing. Spotify mini player, Merch, 

    return(
        <>
        Guana MC Landing Page
        </>
    )

}