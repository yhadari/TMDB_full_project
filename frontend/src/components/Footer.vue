<script setup></script>

<template>
  <footer>
    <div class="box">
      <div class="imageBox">
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
          alt="logo"
        />
        <router-link class="join" to="/signup">JOIN THE COMMUNITY</router-link>
      </div>
      <div class="links">
        <ul>
          <p class="title">THE BASICS</p>
          <li>About TMDB</li>
          <li>Contact Us</li>
          <li>Support Forums</li>
          <li>API</li>
          <li>System Status</li>
        </ul>
        <ul>
          <p class="title">GET INVOLVED</p>
          <li>Contribution Bible</li>
          <li>Add New Movie</li>
          <li>Add New TV Show</li>
        </ul>
        <ul>
          <p class="title">COMMUNITY</p>
          <li>Guidelines</li>
          <li>Discussions</li>
          <li>Leaderboard</li>
          <li>Twitter</li>
        </ul>
        <ul>
          <p class="title">LEGAL</p>
          <li>Terms of Use</li>
          <li>API Terms of Use</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  justify-content: center;
  width: 100%;
  height: var(--footerHeight);
  color: #fff;
  background-color: rgba(var(--tmdbDarkBlue), 1);
  font-size: 2rem;
}
footer img {
  width: 12.6rem;
  height: 12.6rem;
}
.box {
  width: 100%;
  max-width: 130rem;
  height: 70%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 4rem;
}
.imageBox {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 3rem;
}
.join {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22rem;
  height: 4.2rem;
  font-size: 1.86rem;
  font-weight: bold;
  text-decoration: none;
  background-color: #fff;
  color: rgba(var(--tmdbLightBlue));
  border-radius: 0.6rem;
  cursor: pointer;
}
.links {
  display: flex;
  gap: 4rem;
}
.links .title {
  font-weight: bold;
  margin-bottom: 0.6rem;
}
.links li {
  list-style: none;
  font-size: 1.6rem;
  margin-bottom: 0.4rem;
  cursor: pointer;
  letter-spacing: 0.6px;
}
</style>
