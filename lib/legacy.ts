// Keep previously shared project URLs usable after separating the collections.
const research = ['ai-chemist','aifs','alphafold-db','matdiffract','materials-project','mattergen'];
const archive='https://github.com/Mine77/ai4s-atlas/blob/main/archive/listed-companies/';
export const legacy:Record<string,string>={
  ...Object.fromEntries(research.map(id=>[id,'/research/'+id+'/'])),
  'periodic-neon':'/startups/periodic-labs/',
  'emerald-cloud-lab':'/startups/emerald-cloud-lab/',
  'rentosertib':archive+'rentosertib.md',
  'xtalpi-cathode':archive+'xtalpi-cathode.md',
};
