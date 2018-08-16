var a="AB##C#DE##F##"
var NodeList=[] //用来储存二叉树的节点
var totpoint=0 //用来记录节点的数量
function Node(l,r,nodevalue){
    this.l=l;
    this.r=r;
    this.nodevalue =nodevalue;
}
Sa="ABDG##H###CE#I##F##"
// Sa="A#BCD##E###"
Sai=0;
function creatBinTree(now) {
    var x
    x=Sa[Sai]
    Sai++
    if (x=='#'){

    }
    else{
        NodeList[now]=new Node(-1,-1,x);

        totpoint=totpoint+1;//类似分配一个新的指针，给左子树分配空间，来储存将要创建的左子树
        var tmp=totpoint //暂存这个新的空间地址（类似指针）
        NodeList[now].l=totpoint;//并且指定当前节点的左子树的指针就是新分配的空间地址
        creatBinTree(totpoint);//用给的新空间创建
        if (!NodeList[tmp] )totpoint=totpoint-1;//如果左子树不存在，那么回收空间
        if (!NodeList[tmp] )NodeList[now].l=-1;//左子树不存在，自然当前节点的左子树没有引用

        totpoint=totpoint+1;
        tmp=totpoint
        NodeList[now].r=totpoint;
        creatBinTree(totpoint);
        if (!NodeList[tmp])totpoint=totpoint-1;//回收空间
        if (!NodeList[tmp] )NodeList[now].r=-1;//回收空间

    }
}

creatBinTree(totpoint)
console.log(NodeList)