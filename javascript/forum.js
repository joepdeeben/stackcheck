//let vakList = document.querySelectorAll('.vakken ul li'); // pakt alle vakken in de html van forum
//vakList.forEach(function(vak) {
//    category.addEventListener('click', function() {
//        let vakId = this.id;
//        fetch(vakUrl + vakId) // hier moeten we de link naar de database invoeren en kunnen zo de threads per vak ophalen en weergeven.
//
//        }
//    }

function addComment() {
  let threadPosts = document.getElementById("thread-posts");
  let textArea = document.querySelector(".content");
  let postContent = textArea.value;
  let newPost = document.createElement("div");
  newPost.classList.add("post");
  newPost.innerHTML = '<div class="post-info"><div id="username"><b>Username</b></div><div id="datum"><b>Datum</b></div></div><div class="post-content"><h4>Post Titel</h4><p>' + postContent + '</p></div><div class="post-acties"><a href="#">Beantwoorden</a></div>';
  threadPosts.appendChild(newPost);
  textArea.value = "";
}

