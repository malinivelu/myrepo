var movies={
    name:"Peter",
    duration:"3hours",
    rating:5
}
function updateDetails(){
    movies.name=document.getElementById("movieName").value ;
    movies.duration=document.getElementById("movieDuration").value ;
    movies.rating=document.getElementById("movieRating").value ;
    console.log(movies)
    document.getElementById("movieName").value="" ;
    document.getElementById("movieDuration").value="" ;
    document.getElementById("movieRating").value="" ;
}
function printDetails() {
    var x = document.createElement("TR")
    x.setAttribute("id","myTr");
    var d = document.getElementById("mytable").appendChild(x);
    document.innerHTML = "<td>" + movies.name + "</td>" + "<td>" + movies.duration + "</td>" + "<td>" + movies.rating + "</td>" ;
    
}