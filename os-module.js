const os = require("os");

// console.log(os)

//info about current user
const user = os.userInfo();

// console.log(user);

// methods retuners the syste uptime in  seconds
// const address = os.cpus();

// const { "Wi-Fi": s } = address;
// console.log(address);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs);
