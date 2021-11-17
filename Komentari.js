function Komentar(comment, br) {
   let postID = "NewPost" + br;
   let commentSpaceID = "CommentSpace" + br;
   let commentID = "comments" + br;
   let p = document.getElementById(commentID);
   let prevPost = p.cloneNode(true);
   document.getElementById(postID).innerHTML = comment;
   document.getElementById(commentSpaceID).appendChild(prevPost);
}