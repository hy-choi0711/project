const songs = [
  {
    title: '#1',
    artist: 'Imagine Dragons',
    description: '나는 언제나 넘버 원이야.',
    cover: 'https://i.scdn.co/image/ab67616d0000b273fc915b69600dce2991a61f13',
    link: 'https://youtu.be/C3AGbtAnFLA?si=9EQsU9skD56JFF7H'
  },
  {
    title: '10,000 Hours',
    artist: 'Dan + Shay, Justin Bieber',
    description: '사랑을 알아가는 긴 여정.',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Dan_%2B_Shay_and_Justin_Bieber_-_10%2C000_Hours.png',
    link: 'https://youtu.be/Y2E71oe0aSM?si=wZ1qiUnxzYZy5Qre'
  },
  {
    title: '2085',
    artist: 'AJR',
    description: '이제 2085년이야.',
    cover: 'https://i.namu.wiki/i/Wv7Hwuh61K9WRg_TJEPSZ93XDmH_ey_R72Mk9KnN6hX5U_zOmIsIm-6AxOWSs6kaoYpIb6cAsYsYxXD61kLuqQ.webp',
    link: 'https://youtu.be/0q-TiXo9OD8?si=vKCsLNw4NqJ7uo5Q'
  },
  {
    title: '7 Years',
    artist: 'Lukas Graham',
    description: '내가 7살이었을 때.',
    cover: 'https://i.namu.wiki/i/PqJeXQA7m0Y92I9OHnu3qi-fGDAaZT2rfnUcZSuHNIlERAVd4_MnkbqlqjDQ4CENJuKWuUbEJK2zwIv_SO0Nqw.webp',
    link: 'https://youtu.be/LHCob76kigA?si=NP3W4uIhBVIcbnUJ'
  },
  {
    title: 'Alone',
    artist: 'Alan Walker',
    description: '나는 내가 혼자가 아니란 것을<br>알아.',
    cover: 'https://i1.sndcdn.com/artworks-jXgAJLAugg2hDdE6-oN3cYA-t500x500.jpg',
    link: 'https://youtu.be/1-xGerv5FOk?si=YdP3ColGYzW4QF7m'
  },
  {
    title: 'Amsterdam',
    artist: 'Imagine Dragons',
    description: '힘든 나 자신을 위해.',
    cover: 'https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/080/374/458/80374458_1381112205348_1_600x600.JPG/dims/resize/Q_80,0',
    link: 'https://youtu.be/8F8ulEOrhOM?si=scaQ1Icyw9S12c9y'
  },
  {
    title: 'Arcade',
    artist: 'Duncan Laurence',
    description: '사랑은 지는 게임이라는 것을.',
    cover: 'https://i.namu.wiki/i/y3MRw_sX9rExFEASJLbODkRQ-Twbz6VSvF1m5KLMWXZR2h_M1ITj870yM20yMQKpXV4Szt8Y_oVcasM3DKLQZA.webp',
    link: 'https://youtu.be/51u5fnyrGj4?si=2xrfPlzj8v4uZDmO'
  },
  {
    title: 'Architect',
    artist: 'Livingston',
    description: '슬픔 따위 막아낼거야.',
    cover: 'https://image.bugsm.co.kr/album/images/200/346709/34670933.jpg?version=20240701173122.0',
    link: 'https://youtu.be/0gF31eURPNA?si=Ozk9nKy9-N61ns4I'
  },
  {
    title: 'At My Worst',
    artist: 'Pink Sweat$',
    description: '내가 가장 안 좋을 때도.',
    cover: 'https://image.bugsm.co.kr/album/images/500/9686/968619.jpg',
    link: 'https://youtu.be/VXzAJd8UJl8?si=RpDKyGxYq_nDIacw'
  },
  {
    title: 'Attention',
    artist: 'Charlie Puth',
    description: '넌 관심받고만 싶어하잖아.',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Charlie_Puth_-_Attention_%28Official_Single_Cover%29.png/800px-Charlie_Puth_-_Attention_%28Official_Single_Cover%29.png',
    link: 'https://youtu.be/nfs8NYg7yQM?si=3LTDdiR8Xt1vuUrI'
  },
  {
    title: 'Baby',
    artist: 'Justin Bieber, Ludacris',
    description: '나는 아이였어.',
    cover: 'https://i.scdn.co/image/ab67616d0000b2735cf75855a2200cbe8ada3f08',
    link: 'https://youtu.be/kffacxfA7G4?si=gVyKdRjwuTF0SDv0'
  },
  {
    title: 'Bad',
    artist: 'Christopher',
    description: '알아? 너는 나빠.',
    cover: 'https://i1.sndcdn.com/artworks-000572565827-5jh07i-t500x500.jpg',
    link: 'https://youtu.be/T6tTohWiu5A?si=PpZqhgVKkUOPbxo3'
  },
  {
    title: 'Bad Liar',
    artist: 'Imagine Dragons',
    description: '나는 거짓말을 잘 못하거든.',
    cover: 'https://image.bugsm.co.kr/album/images/200/8896/889692.jpg?version=20210309002800.0',
    link: 'https://youtu.be/uEDhGX-UTeI?si=wjlfuD5f68oLcXmj'
  },
  {
    title: 'Bang!',
    artist: 'AJR',
    description: '뱅!',
    cover: 'https://i.namu.wiki/i/klt8UqWnMQIRBMXDVGmB6cnicI2fmInZeJmXU9zwiUE697LuU5aRbHq1_Jktt1sQfm0oR3O9RPA38lHzhBXByQ.webp',
    link: 'https://youtu.be/4THFRpw68oQ?si=6s97ykO1WbB3fqZb'
  },
  {
    title: 'Battle Cry',
    artist: 'Imagine Dragons',
    description: '트랜스포머 : 사라진 시대 OST.',
    cover: 'https://image.bugsm.co.kr/album/images/500/4352/435239.jpg',
    link: 'https://youtu.be/ZgB2qItM76g?si=e4jH7oI_wzMf_YQr'
  },
  {
    title: 'Beautiful Things',
    artist: 'Benson Boone',
    description: '아름다운 노래.',
    cover: 'https://i.scdn.co/image/ab67616d0000b273bef221ea02a821e7feeda9cf',
    link: 'https://youtu.be/Oa_RSwwpPaA?si=TyRETRwqvi3I-RjC'
  },
  {
    title: 'Believer',
    artist: 'Imagine Dragons',
    description: '고통은 나를 더 강하게 만들 뿐.',
    cover: 'https://upload.wikimedia.org/wikipedia/ko/1/1f/%EC%9D%B4%EB%A7%A4%EC%A7%84_%EB%93%9C%EB%9E%98%EA%B3%A4%EC%8A%A4_-_Believer.jpg',
    link: 'https://youtu.be/7wtfhZwyrcc?si=9_RmOysi66hovpZy'
  },
  {
    title: 'Birds',
    artist: 'Imagine Dragons',
    description: '새들은 다른 방향으로 날아가네.',
    cover: 'https://i.scdn.co/image/ab67616d0000b273da6f73a25f4c79d0e6b4a8bd',
    link: 'https://youtu.be/vOXZkm9p_zY?si=e7XxekY-u4oRMbMF'
  },
  {
    title: 'Bleeding Out',
    artist: 'Imagine Dragons',
    description: '너를 위해 피 흘리는 것.',
    cover: 'https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/080/374/458/80374458_1381112205348_1_600x600.JPG/dims/resize/Q_80,0',
    link: 'https://youtu.be/QFKHScAStsU?si=bGRj__zrMCKEVQPF'
  },
  {
    title: 'Blue (Da Ba Dee)',
    artist: 'Eiffel 45, Gabry Ponte',
    description: '난 파랑이야.',
    cover: 'https://i.scdn.co/image/ab67616d0000b273121c39c86d8b05c14022edfe',
    link: 'https://youtu.be/kyzIQKuSqBs?si=XhjUep4L9g4s244J'
  },
];

function renderMusicList() {
  const musicList = document.getElementById('music-list');
  
  songs.forEach(song => {
    const musicDiv = document.createElement('div');
    musicDiv.classList.add('music');
    
    musicDiv.innerHTML = `
      <img src="${song.cover}" alt="album cover">
      <div class="music-explain">
        <h1>${song.title}</h1>
        <h2>${song.artist}</h2>
        <p>${song.description}</p>
        <a href="${song.link}" target="_blank">들으러 가기</a>
      </div>
    `;
    
    musicList.appendChild(musicDiv);
  });
}

window.onload = renderMusicList;