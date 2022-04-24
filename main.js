(function(){
self.Board = function(width, height){
    this.width = width;
    this.height = height;
    this.playing = false;
    this.game_over = false;
    this.bars = [];
    this.ball = null;
    this.playing = false;
}
self.Board.prototype = {
    get elements(){
        let elements = this.bars.map(function(bar){return bar});
        elements.push(this.ball);
        return elements;
    }
}
})();

