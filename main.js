var a="AB##C#DE##F##"
var NodeList=[] //用来储存二叉树的节点
var totpoint=0 //用来记录节点的数量
function Node(l,r,nodevalue){
    this.l=l;
    this.r=r;
    this.nodevalue =nodevalue;
}
function creatBinTree(now) {
    var x
    x=prompt()
    if (x=='#'){

    }
    else{
        NodeList[now]=new Node(-1,-1,x);
        totpoint=totpoint+1;
        NodeList[now].l=totpoint;
        creatBinTree(totpoint);
        totpoint=totpoint+1;
        NodeList[now].r=totpoint;
        creatBinTree(totpoint);
    }
    console.log(x)
}
var root=new Node(1,2,"a")
console.log("你好")
creatBinTree(totpoint)
console.log(NodeList)