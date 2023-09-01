window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
            document.getElementById('overlay').style.display = "block"
        },
        3000
    )
});

const closed = document.getElementById('closed');

closed.addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
    document.getElementById('overlay').style.display = "none"
});