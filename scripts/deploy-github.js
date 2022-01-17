const ghpages = require("gh-pages");

// npm run deploy

// replace with your repo url
ghpages.publish(
  "public",
  {
    branch: "master",
    repo: "https://github.com/ericbilaver/ericbilaver.github.io.git",
  },
  () => {
    console.log("Deploy Complete!");
  }
);
