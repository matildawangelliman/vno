/* eslint-disable */
// prettier-ignore
import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';

const Home = Vue.component("Home", {template: ` <div class="home"> <img id="vnoLogo" src="/assets/vnoLogo.png" /> <h1>A Vue / Deno Adapter</h1> <br /> <div class="logos"> <a href="https://github.com/oslabs-beta/vno" target="_blank"> <img id="gitLogo" src="/assets/git-logo.png" /></a> <a href="https://deno.land/x/vno@v1.0-beta.5" target="_blank"> <img id="denoLogo" src="/assets/deno-logo.png" /></a> </div> <div class="logoText"> <a class="docTags" id="gitText" href="https://github.com/oslabs-beta/vno" target="_blank" rel="noopener" >Git</a > <a class="docTags" id="denoText" href="https://deno.land/x/vno@v1.0-beta.5" target="_blank" rel="noopener" >Deno</a > </div> <br /> <!-- <h3 id="cliText">CLI Plugin</h3> <a class="docTags" href="https://github.com/oslabs-beta/vno/tree/main/command-line" target="_blank" rel="noopener" >Click Here</a > <br /> --> </div>`, name: 'Home', props: { msg: String, },});
const Team = Vue.component("name", {template: ` <div class="team"> <div class="flip-box"> <div class="flip-box-inner"> <div class="flip-box-front"> <img class="hoverImg" :src="picture" alt="image" border="0" width="250" height="250" /> </div> <div class="flip-box-back"> <h2>{{ name }}</h2> <h2>{{ email }}</h2> <h2>{{ linkedIn }}</h2> <h2>{{ github }}</h2> </div> </div> </div> <!-- <h2 id="about"> About: <br /> {{ about }} </h2> --> </div>`, props: ['name', 'email', 'github', 'linkdIn', 'about', 'picture'], name: 'Team',});
const Docs = Vue.component("docs", {template: ` <div id="docs"> <h1>Docs Page</h1> </div>`, name: 'docs',});
const App = new Vue({template: ` <div id="app"> <header> <ul class="nav"> <a @click="handelClick('Home')"><li>Home</li></a> <a @click="handelClick('Team')"><li>Team</li></a> <a @click="handelClick('Docs')"><li>Docs</li></a> </ul> </header> <div v-if="displayedComponent === 'Home'"> <Home /> </div> <div class="teamTest" v-else-if="displayedComponent === 'Team'"> <h1 id="meetTeam">Meet The Team</h1> <Team v-for="person in team" :key="person.id" :name="person.name" :about="person.about" :picture="person.picture" :email="person.email" :github="person.github" :linkdIn="person.linkdIn" /> </div> <div v-else-if="displayedComponent === 'Docs'"> <Docs /> </div> <div v-else-if="displayedComponent === 'Demo'"> <Demo /> </div> <p id="built">built with vno</p> </div>`, name: 'app', data() { return { displayedComponent: 'Home', team: [ { name: 'Mikey Gower', email: 'gowermikey@gmail.com', picture: '/assets/Mikey.jpg', about: 'Mikey loves wine. He also loves to party with said wine.', github: 'https://github.com/mggower', linkdIn: 'https://www.linkedin.com/in/mikeygower/', }, { name: 'Jordan Grubb', email: 'ImJordanGrubb@gmail.com', picture: '/assets/Jordan.jpg', about: 'Her drag name is Miss Diagnosed. She loves whiskey', github: 'https://github.com/jgrubb16', linkdIn: 'https://www.linkedin.com/in/j-grubb', }, { name: 'Kyle Jurassic', email: 'kjuresich@gmail.com', picture: '/assets/Kyle.jpg', about: 'He made our ReadMe, and he can read you for filth', github: 'http://github.com/kjurassic', linkdIn: 'http://linkedin.com/in/kyle-juresich/', }, { name: 'Andrew Rehrig', email: 'arehrig@gmail.com', picture: '/assets/Andrew.jpg', about: "She's beauty. She's grace. She loves a coding test. She can win any sewing challenge", github: 'https://github.com/andrew-rehrig', linkdIn: 'https://www.linkedin.com/in/andrew-rehrig/', }, ], }; }, methods: { handelClick: function (event) { this.displayedComponent = event; console.log(this.displayedComponent); }, }, components: { Home, Team, Docs, },});

App.$mount("#app");
export default App;
