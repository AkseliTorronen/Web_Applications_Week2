import "./styles.css";

if (document.readyState !== "loading") {
  initialize_code();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initialize_code();
  });
}
function initialize_code() {
  const add_comment_button = document.getElementById("add-comment");
  const remove_comments_button = document.getElementById("remove-comments");

  add_comment_button.addEventListener("click", function () {
    const comments = document.getElementById("comment-section");
    const new_comment = document.createElement("div");
    new_comment.className = "comment";

    let new_rating = document.createElement("li");
    new_rating.className = "comment-rating";
    new_rating.innerHTML = document.getElementById("rating").value;
    new_comment.appendChild(new_rating);

    let new_item = document.createElement("li");
    new_item.className = "comment-text";
    new_item.innerHTML = document.getElementById("comment-area").value;
    new_comment.appendChild(new_item);

    let remove_button = document.createElement("button");
    remove_button.className = "remove-comment";
    remove_button.name = "remove-button";
    remove_button.id = "remove-button";
    remove_button.innerHTML = "remove this comment";
    remove_button.addEventListener("click", function () {
      remove_button.parentNode.parentNode.removeChild(remove_button.parentNode);
    });
    remove_button.style.visibility = "hidden";
    new_comment.appendChild(remove_button);
    comments.appendChild(new_comment);
  });

  remove_comments_button.addEventListener("click", function () {
    let result = confirm("I dunno like confirm or sum shid?");
    if (result) {
      let remove_btns = document.getElementsByClassName("remove-comment");
      if (remove_btns) {
        for (let x = 0; x < remove_btns.length; x++) {
          remove_btns[x].style.visibility = "visible";
        }
      }
    } else {
      console.log("shid");
    }
  });
}

/** document.getElementById("app").innerHTML = `
 *<h1>Hello Vanilla!</h1>
 *<div>
 *  We use the same configuration as Parcel to bundle this sandbox, you can find more
 *  info about Parcel
 *  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
 *</div>
 *`;
 */
