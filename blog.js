var flag = 1;
var denovi=["Понеделник","Вторник","Среда","Четврток","Петок","Сабота","Недела"];
function Post(myPost){
    if(flag){
        flag=0;
        document.getElementById("date-time").innerHTML=Time();
        document.getElementById('newPost').innerHTML=myPost;
    }else{

        let p=document.getElementById('posts');
        let prevPost=p.cloneNode(true);

        document.getElementById("date-time").innerHTML=Time();
        document.getElementById('newPost').innerHTML=myPost;

        document.getElementById('myBlog').appendChild(prevPost);
    }
    }

    function Time(){
        let date=new Date();
        let h = date.getHours();
        let m = date.getMinutes();
        m = checkTime(m);
        h = checkTime(h);
        var dateString=denovi[date.getDay()]+", "+date.getDate()+"."+date.getMonth()+"."+date.getFullYear()+" "+h + ":" + m;
        return dateString;
    }
function checkTime(i) {
    if (i < 10) { i = "0" + i }
    return i;
}