const template = document.createElement("template");
template.innerHTML = /*html*/`
  <style>
    * {
      font-family: sans;
    }

    span {
      width: 4rem;
      display: inline-block;
      text-align: center;
    }

    button {
      width: 4rem;
      height: 4rem;
      border: none;
      border-radius: 10px;
      background-color: seagreen;
      color: white;
    }
  </style>
  <audio id="player" controls src=""></span>
  <button id="pause">||</button>
  <button id="play">></button>`;

class AudioPlayer extends HTMLElement {
  constructor() {
    super();
    this.isPlaying = false;
    this.trackIndex = 0;
    this.audioFile = new Audio();
    this.trackTitle = '';
    this.tracks = [];
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.getElementById("pause").onclick = () => this.inc();
    this.shadowRoot.getElementById("play").onclick = () => this.dec();
    this.update(this.count);
  }

  play() {
    this.update(++this.count);
  }

  dec() {
    this.update(--this.count);
  }

  update(count) {
    this.shadowRoot.getElementById("count").innerHTML = count;
  }
}

customElements.define("taocode-audio-player", AudioPlayer);
