module.exports = {

  async get1Cube100Rolls(agent) {
    return await agent
      .get("https://www.random.org/integers/?num=100&min=1&max=6&col=1&base=10&format=plain&rnd=new")
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log('error', err);
      })
  },

  async get1Cube1000Rolls(agent) {
    return await agent
      .get("https://www.random.org/integers/?num=1000&min=1&max=6&col=1&base=10&format=plain&rnd=new")
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log('error', err);
      })
  },

  async get1Cube5000Rolls(agent) {
    return await agent
      .get("https://www.random.org/integers/?num=5000&min=1&max=6&col=1&base=10&format=plain&rnd=new")
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log('error', err);
      })
  },

  async get2Cubes100Rolls(agent) {
    return await agent
      .get("https://www.random.org/integers/?num=100&min=1&max=6&col=2&base=10&format=plain&rnd=new")
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log('error', err);
      })
  },

  async get2Cubes1000Rolls(agent) {
    return await agent
      .get("https://www.random.org/integers/?num=1000&min=1&max=6&col=2&base=10&format=plain&rnd=new")
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log('error', err);
      })
  },

  async get2Cubes5000Rolls(agent) {
    return await agent
      .get("https://www.random.org/integers/?num=5000&min=1&max=6&col=2&base=10&format=plain&rnd=new")
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log('error', err);
      })
  }

};

