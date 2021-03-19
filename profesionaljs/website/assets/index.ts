import MediaPlayer from "@orionnorion/platzimediaplayer/"
import AutoPlay from '@orionnorion/platzimediaplayer/lib/plugins/AutoPlay'
import AutoPause from '@orionnorion/platzimediaplayer/lib/plugins/Auto_pause'
import Ads from '@orionnorion/platzimediaplayer/lib/plugins/Ads'
const video = document.querySelector("video")
const button: HTMLElement = document.querySelector("#playButton")
const buttonUnMute: HTMLElement = document.querySelector("#muteButton")
const player = new MediaPlayer({
    el: video, 
    plugins: [new AutoPlay(), new AutoPause(), new Ads()]
})

button.onclick = () => player.togglePlay()
buttonUnMute.onclick = () => player.toggleMute()

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error =>{
        console.log(error.message)
    })
}
