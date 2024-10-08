const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();


const config = {
    user: "github",
    // Password optional, prompted if none given
    password: "git_12_2gr2_n56E",
    host: "davida.ch-dns.net",
    port: 21,
    localRoot: __dirname + "/../dist/",
    remoteRoot: "./",
    // include: ["*", "**/*"],      // this would upload everything except dot files
    include: ["*", ".*"],
    // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
    exclude: [
        "thumbs/*",
        "qr/*",
    ],
    // delete ALL existing files at destination before uploading, if true
    deleteRemote: false,
    // Passive mode is forced (EPSV command is not sent)
    forcePasv: true,
    // use sftp or ftp
    sftp: false,
};

ftpDeploy
    .deploy(config)
    .then((res) => console.log("finished:", res))
    .catch((err) => console.log(err));

console.log(process.env.PATH)
