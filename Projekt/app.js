function sequencer() {
  
  const percs = new Tone.Player("./Sound/percs1.wav").toMaster();
  const claps = new Tone.Player("./Sound/claps1.wav").toMaster();
  const bass = new Tone.Player("./Sound/bass1.wav").toMaster();

  let index = 0;

  Tone.Transport.scheduleRepeat(repeat, "8n");
  Tone.Transport.start();

  function repeat() {
    let step = index % 8;
    
    let percsInputs = document.querySelector(
      `.percs input:nth-child(${step + 1})`
    );
    let clapsInputs = document.querySelector(
      `.claps input:nth-child(${step + 1})`
    );
    let bassInputs = document.querySelector(
      `.bass input:nth-child(${step + 1})`
    );

 
  
   
    
    if (percsInputs.checked) {
      percs.start();
    }
    if (bassInputs.checked) {
      bass.start();
    }
    if (clapsInputs.checked) {
      claps.start();
    }
    
    index++;

    
  }
}

sequencer();