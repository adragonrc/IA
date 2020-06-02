

class node{
    constructor(c, id, x, y, parent){
        this.c = c;
        this.canMove =  c !='-' && c !='#';
        this.id = id;
        this.x = x;
        this.y = y;
        this.parent = parent;
        this.childs = new Array();
    }
    isFin(){
        return c == '$';
    }
    addChild(child){
        this.childs.push(child);
        child.parent = this
    }
}
class Thread{
    constructor(){
        this.nodoInicial = null;
    }
}


class Maze{        
    constructor(map, start) {
        this.map = map;
        this.start = start;
        this.lista = new Array(start);
    }

    isFin2(){
        return this.lista[0].isFin();
    }
    
    moverTop(node){
        return this.map[node.x-1][node.y];
    }
    moverBott(node){
        return this.map[node.x+1][node.y];
    }
    moverRigth(node){
        return this.map[node.x][node.y+1];
    }
    moverLefth(node){
        return this.map[node.x][node.y-1];
    }

    addNeighBords(){
        var nodePos = this.lista.pop();

        var node = nodePos.moverBott();
        if(node.canMove){
            lista.push(node);
        }
        node = this.nodePos.moverRigth();
        if(node.canMove){
            lista.push(node);
        }
        node = this.nodePos.moverLefth();
        if(node.canMove){
            lista.push(node);
        }
        node = this.nodePos.moverTop();
        if(node.canMove){
            lista.push(node);
        }
        
        return nodePos;
    }

    f(node){
        if(isFin2()){
            return true;
        }
        
        nodePos = this.addNeighBords();
        if(node != null) node.addChild(nodePos);

        return this.f(nodePos);
    }

    moveTo(point){
        this.map[point.x][point.y].canMove = false;
        this.path.push(this.map[point.x][point.y].id);
        var isFin = this.profundidade(point);
        if(!isFin) this.path.pop();
    //     console.log("id path", this.path[this.path.length]);
        
        return isFin;
    }

    isfin(point){
        return this.map[point.x][point.y].c == '$';
    }
    
    profundidade(posicion){
        if(this.isfin(posicion)){
            return true;
        }
        var isFin = false;
        
        var p = posicion.moverTop();
        if(!isFin && this.canMove(p)){
            isFin = this.moveTo(p);
        }
        p = posicion.moverRigth();
        if(!isFin && this.canMove(p)){
            isFin = this.moveTo(p);
        }
        p = posicion.moverLefth();
        if(!isFin && this.canMove(p)){
            isFin = this.moveTo(p);
        }
        p = posicion.moverBott();
        if(!isFin && this.canMove(p)){
            isFin = this.moveTo(p);
        }
        return isFin;
    }
}
