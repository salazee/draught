window.onload =function(){
    const canvas = document.getElementById("board");
    const boardSize = 18;
    const squareSize = boardSize;
    const ctx = canvas.getContext("2d")

function draw(){
    for ( let row = 0; row<18; row++){
        for( let col=0; col <18; col++){
           if((col + row ) % 2==0) {
            ctx.fillStyle = '#ffffff';
           }else{ctx.fillStyle= '#000000';

           }
           ctx.fillRect(col*squareSize, row*squareSize, squareSize, squareSize);
        }
    }
}
    draw();
};
