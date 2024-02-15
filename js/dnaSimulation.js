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

// Object factory for pAequor specimens with unique DNA
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,

    mutate() {
      indexToMutate = Math.floor(Math.random() * dna.length)
      // console.log(`Index to mutate: ${indexToMutate}`);
      baseToMutate = dna[indexToMutate]
      // console.log(`Base to mutate: ${baseToMutate}`)
      while (dna[indexToMutate] === baseToMutate) {
        dna[indexToMutate] = returnRandBase();
        // console.log(`New Random Base: ${dna[indexToMutate]}`)
      }
    },

    complementStrand() {
      let complement = [];
      // iterate over array and return pair
      for (const base of this.dna) {
        switch (true) {
          case (base === 'A'):
            complement.push('T')
            break;
          case (base === 'T'):
            complement.push('A')
            break;
          case (base === 'C'):
            complement.push('G')
            break;
          case (base === 'G'):
            complement.push('C')
            break;
        }
      }
      // return complementary strand
      return complement;

    },

    compareDNA(pAequor) {
      let cmmnBaseCnt = 0;
      for (let i = 0; i < pAequor.dna.length; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          cmmnBaseCnt++;
        }
      }
      const pctCommon = Math.round(cmmnBaseCnt / pAequor.dna.length * 100)

      // console.log(`specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${pctCommon}% DNA in common`);

      return pctCommon;
    },

    willLikelySurvive() {
      let CorG = 0;
      for (const base of this.dna){
        if (base === 'C' || base === 'G') {
          CorG++;
        }
      }
      // console.log(`Total for C & G bases: ${CorG}`)
      const survivalPct = Math.round(CorG / this.dna.length * 100)
      // console.log(`Chance of survival: ${survivalPct}`)
      return ( survivalPct >= 60)
    }
  }
}


const produceSpecimines = (qty) => {
  const specimens = []
  for (let i = 0; i < qty; i++) {
    // console.log(i)
    let specimenSurvives = false;
    let specimen; // undefined until produced
    while (!specimenSurvives) {
      specimen = pAequorFactory(i, mockUpStrand())
      specimenSurvives = specimen.willLikelySurvive()
    } 
    specimens.push(specimen);
  }
  return specimens;
}

const mostRelated = batch => {
  let pctRelated = 0;
  let mstRelated = 0;
  let spcmn1;
  let spcmn2;

  for (let i = 0; i < batch.length; i++) {
    for (let j = 0; j < batch.length; j++) {
      if (i !== j) {
        pctRelated = batch[i].compareDNA(batch[j]);
        if (pctRelated > mstRelated) {
          mstRelated = pctRelated;
          spcmn1 = batch[i];
          spcmn2 = batch[j];
        }
      }
    }
  }
  console.log(`Specimen #${spcmn1.specimenNum} and Specimen #${spcmn2.specimenNum} have ${mstRelated}% DNA in common.`);

  return {
    spcmn1,
    spcmn2,
    mstRelated
  }
}

const batch = produceSpecimines(1000);

// Test that all specimen in batch are capable of surviving

surviving = batch.every(specimen => specimen.willLikelySurvive())

if (surviving) {
  console.log('All collected specimins are likely to survive...\n')
} else {console.log('Something is broken...\n')}

let pair = mostRelated(batch);

console.log(`- Specimin #${pair.spcmn1.specimenNum}...\n\tBase: ${pair.spcmn1.dna.join('')}\n\tComp: ${pair.spcmn1.complementStrand().join('')}`)
console.log(`- Specimin #${pair.spcmn2.specimenNum}...\n\tBase: ${pair.spcmn2.dna.join('')}\n\tComp: ${pair.spcmn1.complementStrand().join('')}`)

const mutatePair = (spcmn1, spcmn2, qty) => {
  for (let i = qty; 0 < i; i--) {
    spcmn1.mutate();
    spcmn2.mutate();
  }
  
  console.log(`\nAfter ${qty} generations, Specimen #${spcmn1.specimenNum} and specimen #${spcmn2.specimenNum} have ${spcmn1.compareDNA(spcmn2)}% DNA in common`);
  console.log(`- Specimin #${spcmn1.specimenNum}...\n\tBase: ${spcmn1.dna.join('')}\n\tComp: ${spcmn1.complementStrand().join('')}`)
  console.log(`- Specimin #${spcmn2.specimenNum}...\n\tBase: ${spcmn2.dna.join('')}\n\tComp: ${spcmn1.complementStrand().join('')}`)
}

mutatePair(pair.spcmn1, pair.spcmn2, 5)
