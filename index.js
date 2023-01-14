
import {posts}  from './posts.js';
 

//on like icon click listener
document.addEventListener('click', function(e){
    if(e.target.dataset.like){
        like(e.target.dataset.like)
    }
})


//on post image  duble click listener

document.addEventListener('dblclick', function(e){
    const target = e.target.dataset.likeImage
    const targetPost= posts.filter(function(p){
        
        return p.id == target
    })[0]
    if(target && !targetPost.isLiked){
        like(target)
         const img =   document.getElementById(`icon-${target}`);
                img.style.display="block"
        setTimeout(()=>{
            img.style.display="none"
        }, 500)
    }
})

//liking fuuction

function like(postId){
    const targetPost= posts.filter(function(p){
        
        return p.id == postId
    })[0]
    if(targetPost.isLiked){
        targetPost.likes--
    }
    else{
        targetPost.likes++
    }
    targetPost.isLiked = !targetPost.isLiked
    render()
}

//Posts Render 
function render(){

    let html = ''
    posts.forEach(post => {
        let likeClass = ''
        if(post.isLiked){
            likeClass = 'fa-solid liked'
        }
        else{
            likeClass = 'unlike'
        }
       html +=
           ` <div class="post">
                 <div class="post_header">
                     <img class="avatar_img" src="${post.avatar}" alt="courbet" >
                     <div class="post_author">
                        <h3 class="author_name">${post.name}</h3>
                        <p class="author_location">${post.location}</p>
                     </div>
                 </div>
               <div class="post_content">
               <div class="post_img-container">
                  <img src="${post.img}" alt="coubet post" class="post_img" data-like-image="${post.id}" >
                  <i  class="fa-solid fa-heart like-icon liked" id="icon-${post.id}" ></i>
                </div>
                  <div class="post_body">
                      <div class="post_actions">
                      <i  class=" far fa-heart icon ${likeClass}" id="heart" data-like="${post.id}"></i>
                      <img src="images/icon-comment.png" alt="Heart" class="icon" id="comment">
                      <img src="images/icon-dm.png" alt="Heart" class="icon" id="direct">
                 </div>
                 <div class="post_details">
                   <p class="post_likes">${post.likes} Likes</p>
                   <p class="post_comment"><span class="author_user">${post.username}</span>${post.comment}</p>
                 </div>
              </div>
             </div>
        </div>
`
});
document.getElementById('feed')
.innerHTML = html
 }

 render()






