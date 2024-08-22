// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

function pAequorFactory(specimenNum, dna) {
return {
  specimenNum,
  dna,
  mutate() {
    const randomIndex = Math.floor(Math.random() * 15) 
    let base;
    do {
      base = returnRandBase();
    } while (base === dna[randomIndex]);
    this.dna[randomIndex] = base;
  },
  compare(pAequor) {
    let similarityCount = 0;
    for(let i = 0; i < this.dna.length; i++) {
      if(this.dna[i] === pAequor[i]) {
        similarityCount++
      }
    }
    const percentageSimilarity = Math.floor((similarityCount / 15) * 100);
    console.log(`specimen #1 and specimen #2 have ${percentageSimilarity}% DNA in common`)
  },
  willLikelySurvive() {
    let CCount = 0;
    let GCount =0;
    this.dna.forEach((base) => {
      if(base === 'C') {
        CCount++;
      }if(base === 'G') {
        GCount++;
      }
    })
    if (CCount > 8 || GCount > 8) {
      return true;
    }else return false;
  }
}
}

const testOb = pAequorFactory(5, mockUpStrand());
const createBatch = () => {
  const batch = [];
  for(let i = 1; i <= 30; i++) {
    const object = pAequorFactory(i, mockUpStrand());
    batch.push(object);
  }
  return batch;
}
const batch = createBatch();



