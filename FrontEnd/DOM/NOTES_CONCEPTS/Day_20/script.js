const reels = [
  {
    userName: "Aarav Mehta",
    userImage: "assets/1.png",
    caption: "Living the moment ✨",
    likes: 1204,
    shares: 45,
    comments: 98,
    isFollowed: false,
    video: 'assets/videos/1.mp4'
  },
  {
    userName: "Riya Sharma",
    userImage: "assets/2.png",
    caption: "Street vibes only 🖤",
    likes: 2340,
    shares: 120,
    comments: 210,
    isFollowed: true,
    video: 'assets/videos/2.mp4'
  },
  {
    userName: "Kabir Verma",
    userImage: "assets/3.png",
    caption: "Minimal but iconic",
    likes: 876,
    shares: 32,
    comments: 54,
    isFollowed: false,
    video: 'assets/videos/3.mp4'
  },
  {
    userName: "Ananya Gupta",
    userImage: null,
    caption: "Everyday fit check 🔥",
    likes: 3120,
    shares: 210,
    comments: 340,
    isFollowed: true,
    video: 'assets/videos/4.mp4'
  },
  {
    userName: "Vihaan Singh",
    userImage: null,
    caption: "Less talk, more style",
    likes: 640,
    shares: 18,
    comments: 29,
    isFollowed: false,
    video: 'assets/videos/5.mp4'
  },
  {
    userName: "Ishita Malhotra",
    userImage: null,
    caption: "Weekend energy ⚡",
    likes: 1540,
    shares: 76,
    comments: 112,
    isFollowed: true,
    video: 'assets/videos/6.mp4'
  },
  {
    userName: "Arjun Patel",
    userImage: null,
    caption: "Just vibing",
    likes: 980,
    shares: 40,
    comments: 61,
    isFollowed: false,
    video: 'assets/videos/7.mp4'
  },
  {
    userName: "Neha Kapoor",
    userImage: null,
    caption: "Style speaks louder",
    likes: 2890,
    shares: 190,
    comments: 275,
    isFollowed: true,
    video: 'assets/videos/8.mp4'
  },
  {
    userName: "Rohit Khanna",
    userImage: null,
    caption: "Daily dose of drip 💧",
    likes: 1100,
    shares: 55,
    comments: 89,
    isFollowed: false,
    video: 'assets/videos/9.mp4'
  },
  {
    userName: "Simran Kaur",
    userImage: null,
    caption: "Iconic moves only",
    likes: 4100,
    shares: 320,
    comments: 512,
    isFollowed: true,
    video: 'assets/videos/10.mp4'
  }
];

const allReels = document.querySelector(".all-reels");
let sum = ``;

reels.forEach((reel,i)=>{
    sum += `
       <div class="reel">
                  <video src=${reel.video} autoplay muted loop></video>
                  <div class="bottom">
                    <div class="user">
                        <div class="user-acc">
                        <img class="user-img" src=${reel?.userImage ?? 'assets/1.png'} alt="">
                        <h4>${reel.userName}</h4>
                        </div>
                        <button>${reel.isFollowed?'Following':'Follow'}</button>
                    </div>
                    <p>
                        ${reel.caption}
                    </p>
                  </div>
                  <div class="right">
                    <div class="like cl">
                        <h4><i class="ri-heart-line"></i></h4>
                        <h6>${reel.likes}</h6>
                    </div>
                    <div class="comment cl">
                        <h4><i class="ri-chat-3-line"></i></h4>
                        <h6>${reel.comments}</h6>
                    </div>
                    <div class="share cl">
                        <h4><i class="ri-share-forward-line"></i></h4>
                        <h6>${reel.shares}</h6>
                    </div>
                    <div class="remix cl">
                        <i class="ri-more-2-line"></i>
                    </div>
                  </div>
               </div>
    `
})

console.log(sum);
allReels.innerHTML = sum;


