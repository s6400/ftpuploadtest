const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
    user: process.env.user,
    // Password optional, prompted if none given
    password: process.env.password,
    host: process.env.host,
    port: 21,
    localRoot: process.env.localRoot,
    remoteRoot: process.env.remoteRoot,
    // include: ["*", "**/*"],      // this would upload everything except dot files
    include: process.env.include,
    // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
    exclude: process.env.exclude,
    // delete ALL existing files at destination before uploading, if true
    deleteRemote: process.env.deleteRemote,
    // Passive mode is forced (EPSV command is not sent)
    forcePasv: process.env.forcePasv,
    // use sftp or ftp
    sftp: false,
};
console.log(process.env)
ftpDeploy
    .deploy(process.env)
    .then((res) => console.log("finished:", res))
    .catch((err) => console.log(err));

