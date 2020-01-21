const axios = require('axios');
const owner = process.argv[2];
const repo = process.argv[3];
const sha = process.argv[4];

(async ()=>{
    await axios.get(`http://localhost:8080/ci-callback?owner=${owner}&repo=${repo}&sha=${sha}`);
})();