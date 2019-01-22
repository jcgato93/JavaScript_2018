function divisionEntera(dividendo, divisor){

    if (dividendo < divisor) {
        return 0
    }

    return 1 + divisionEntera(dividendo - divisor, divisor)

}



// ====   Ejemplo de recursividad , Tree ====
/**
 *  Se basa en que un objeto Tree tiene como propiedad una lista
 *  ya sea de nodos instancias de Tree ó números, y el total 
 *  de la suma de dichos números y de cada nodo 
 * 
 *                  Tree
 *                 /  \  \ 
 *              Tree Tree  lista
 *             |       |         \
 *            lista   lista      [1,2,3]
 *           [1,2,3]  [1,2,3]                      
 * 
 *  El resultado seria 18
 */

class Tree{
    
    
    constructor(){
        this.leaf = new Array();    
        this.total= 0;
    }

    isATree(node){        
        if(node instanceof Tree){
            return true
        }

        return false;
    }

    countLeaf(leafs){        
       return leafs.reduce((a,b)=> a+b, 0);
    }

    getTotal(tree){        
        this.total = 0;        

        for (let i = 0; i < tree.leaf.length; i++) {
            const element = tree.leaf[i];
            
            if(this.isATree(element)){

              this.total += this.getTotal(element);

            }else if(element.length > 0){
               this.total += this.countLeaf(element);
            }else{
              this.total += element
            }

        }

       return this.total;
    }


    printTotal(){
        console.log(this.total);
    }

}



tree1 = new Tree();
tree2 = new Tree();
tree3 = new Tree();

tree1.leaf.push(1,2,3);
tree2.leaf.push(1,2,3);
tree3.leaf.push(1,2,3);

tree1.leaf.push(tree2,tree3);


tree1.getTotal(tree1);
tree1.printTotal();
