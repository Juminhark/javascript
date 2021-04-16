# [cdnjs](https://cdnjs.com/)

## css-animation

```js
.img-container img {
 animation: rotate 3s linear infinite;

 animation-play-state: paused;
}

.music-container.play .img-container img {
 animation-play-state: running;
}

@keyframes rotate {
 from {
  transform: rotate(0deg);
 }

 to {
  transform: rotate(360deg);
 }
}
```

```js
<div class="music-container play">
```

- 위 상태면 animation이 running, play가 없으면 paused

## timeupdate

- currentTime : 재생시간
- duration : 전체시간

```js
audio.addEventListener('timeupdate', (e) =>
	console.log(e.srcElement.currentTime)
);
```

## audio sound volume change

- hint

```js
audio.volume = 0.2;
```
