<script setup></script>

<template>
  <section>
    <h1 class="title">Join Today</h1>
    <div class="joinBox">
      <div class="leftPart">
        <p>
          Get access to maintain your own
          <span>custom personal lists, track what you've seen</span> and search
          and filter for <span>what to watch next</span>—regardless if it's in
          theatres, on TV or available on popular streaming services like
          Netflix, Amazon Prime Video, FlixOlé, Zee5, and MUBI.
        </p>
        <button class="JoinBtn" @click="$router.push('/signup')">
          Sign Up
        </button>
      </div>
      <div class="rightPart">
        <ul>
          <li>Enjoy TMDB ad free</li>
          <li>Maintain a personal watchlist</li>
          <li>
            Filter by your subscribed streaming services and find something to
            watch
          </li>
          <li>Log the movies and TV shows you've seen</li>
          <li>Build custom lists</li>
          <li>Contribute to and improve our database</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  max-width: 130rem;
  height: 50rem;
  background-image: url(../assets/joinBackground.jpg);
  background-size: cover;
  background-position: 0 50%;
  padding: 3.6rem;
  color: #fff;
  letter-spacing: 1px;
}
.title {
  font-size: 3.2rem;
  margin-bottom: 2.4rem;
}
.joinBox {
  display: flex;
  gap: 4.8rem;
}
.JoinBtn {
  font-size: 1.6rem;
  padding: 1.2rem;
  text-decoration: none;
  border: none;
  width: 9.2rem;
  color: #fff;
  background-color: rgba(var(--accountPurple), 1);
  border-radius: 0.6rem;
  cursor: pointer;
}
.leftPart {
  font-size: 1.8rem;
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  line-height: 2.4rem;
}
.leftPart span {
  opacity: 0.6;
  font-style: italic;
}
.rightPart {
  line-height: 2rem;
  width: 30%;
  font-size: 1.4rem;
  opacity: 0.7;
}

@media screen and (max-width: 2600px) {
  section {
    height: 27.6rem;
    height: fit-content;
  }
}
</style>
