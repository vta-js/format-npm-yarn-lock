const format = require("./format");

format().then(res => {
  if (res === "NOLOCKFILE") {
    let run = false;
    let count = 0;
    const interval = setInterval(() => {
      if (run) return;
      run = true;
      count += 1;
      if (count > 10) {
        clearInterval(interval);
      }
      format().then(res2 => {
        run = false;
        if (res2 === "SUCCESS") {
          clearInterval(interval);
        }
      });
    }, 600);
  }
});
