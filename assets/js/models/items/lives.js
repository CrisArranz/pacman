class Lives {
  constructor(lives) {
    this.lives = lives;
    this.segment = document.getElementById("lives");
    this.segment.innerText = [...Array(lives).fill('c')].join().replaceAll(',', '  ');
  }

  draw(lives) {
    if (this.lives !== lives){
      this.lives = lives;
      this.segment.innerText = [...Array(lives).fill('c')].join().replaceAll(',', '  ');
    }
  }
}