let lists = document.getElementsByClassName("list");
let joks = document.getElementsByClassName("joko");
let jimmy = document.getElementsByClassName("jim");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");
let kananBox = document.getElementById("kanan");
let kiriBox = document.getElementById("kiri");
let tengenBox = document.getElementById("tengen");
let kiwoBox = document.getElementById("kiwo");
let luarBox = document.getElementById("luar");

for (list of lists) {
  list.addEventListener("dragstart", function (e) {
    let selected = e.target;

    rightBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    rightBox.addEventListener("drop", function (e) {
      rightBox.appendChild(selected);
      selected = null;
    });

    leftBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    leftBox.addEventListener("drop", function (e) {
      leftBox.appendChild(selected);
      selected = null;
    });

    luarBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    luarBox.addEventListener("drop", function (e) {
      luarBox.appendChild(selected);
      selected = null;
    });
  });
}

for (list of joks) {
  list.addEventListener("dragstart", function (e) {
    let selected = e.target;

    kananBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    kananBox.addEventListener("drop", function (e) {
      kananBox.appendChild(selected);
      selected = null;
    });

    kiriBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    kiriBox.addEventListener("drop", function (e) {
      kiriBox.appendChild(selected);
      selected = null;
    });

    luarBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    luarBox.addEventListener("drop", function (e) {
      luarBox.appendChild(selected);
      selected = null;
    });
  });
}

for (list of jimmy) {
  list.addEventListener("dragstart", function (e) {
    let selected = e.target;

    tengenBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    tengenBox.addEventListener("drop", function (e) {
      tengenBox.appendChild(selected);
      selected = null;
    });

    kiwoBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    kiwoBox.addEventListener("drop", function (e) {
      kiwoBox.appendChild(selected);
      selected = null;
    });

    luarBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    luarBox.addEventListener("drop", function (e) {
      luarBox.appendChild(selected);
      selected = null;
    });
  });
}
