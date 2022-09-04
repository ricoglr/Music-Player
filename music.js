class Music {
    constructor (title, singer, img, file){ //Her bir şarkımız için müzik bilglerini ekledik
        this.title = title;
        this.singer= singer;
        this.img= img;
        this.file= file;
    } 

    getName(){
        return this.title + " - " + this.singer; 
    }
}

const musicList = [
    new Music("Shouse","Won't Forget You","1.jpeg","1.mp3"),
    new Music("Daft Punk","Get Lucky","2.jpeg","2.mp3"),
    new Music("Coolio","Gangsta's Paradise","3.jpeg","3.mp3"),
    new Music("Outrunning Karma","Alec Benjamin","4.jpeg","4.mp3")
]
