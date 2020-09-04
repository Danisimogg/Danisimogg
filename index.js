const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar = Array(progressBarCapacity)
        .fill('▁')
        .map((value, index) => index < passedProgressBarIndex ? '█' : value)
        .join('')
    return `{ ${progressBar} }`
}

const readme = `\
### <img  src="https://i.imgur.com/NImY1Yq.gif" width=100%>
###
---


|🔭 I’m currently working on something cool 

|👨‍💻 All of my projects are available at https://github.com/danisimogg

|⚡  I’m currently learning everything 

|💬  2020 Goals: Contribute more to Open Source projects

---

### Languages and Tools:

![React](https://img.shields.io/badge/-React-black?style=flat-square&logo=react)
![JavaScript](https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript)
![Nodejs](https://img.shields.io/badge/-Nodejs-black?style=flat-square&logo=Node.js)
![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3)
![Bootstrap](https://img.shields.io/badge/-Bootstrap-563D7C?style=flat-square&logo=bootstrap)
![Azure](https://img.shields.io/badge/Azure-black?style=flat-square&logo=azure)
![Git](https://img.shields.io/badge/-Git-black?style=flat-square&logo=git)
![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github)

---

 <details open>
 <summary> &#x1f4c8; <b>My Github Stats</b>: </summary>

<br>

<p align = "center">
  <img src = "https://github-readme-stats.vercel.app/api?username=danisimogg&show_icons=true&theme=dark&line_height=27">
  <img src = "https://github-readme-stats.vercel.app/api/top-langs/?username=danisimogg&hide=html&theme=dark">
</p>

</details>


<details open> 
 <summary><b>💻 Check Out My Last Repos ⬇️</b></summary>
<p align = "center">
<a href = "https://github.com/Danisimogg/cra-react-redux-template"><img align="center"  src="https://github-readme-stats.vercel.app/api/pin/?username=Danisimogg&repo=cra-react-redux-template&theme=dark" /></a> <a href = "https://github.com/Danisimogg/better-travel">
<img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=Danisimogg&repo=better-travel&theme=dark" /></a> </p>

</details>

<details> 
 <summary>🖥 <b>My programming stats</b>: </summary>
 
<br>


 </details>



---

<p align="center"> 
⏳ Year progress { ████████████████████▁▁▁▁▁▁▁▁▁▁ } 67.69 %



---
### Spotify Playing 🎧
<div align="center">
<p align="center">

[![Spotify](https://spotify-status-checker-danisimo-git-master.danisimogg.vercel.app/api/spotify)](https://open.spotify.com/user/21xa6ruj5ey7ax6cnp4f655by)

</p>
</div>

</br>

---

  <p>
    <img src="https://profile-counter.glitch.me/danisimogg/count.svg" />
    <a  href="https://github.com/Danisimogg?tab=followers">
    <img align="right" src="https://img.shields.io/github/followers/danisimogg?label=Followers&logo=GitHub&style=for-the-badge" alt="GitHub badge" />
  </a>
    </p>
`

console.log(readme)