var nodes = document.querySelector("ul");
for (var k=0; k<nodes.children.length; k++) {
    var el = nodes.children[k];
    el.onclick = function (event) {
        event.target.style.backgroundColor = "yellow";
        console.log(k);
    }
};





// 에러로 인해 아직 미완성