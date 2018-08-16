var a="AB##C#DE##F##"
var NodeList=[] //用来储存二叉树的节点
var totpoint=0 //用来记录节点的数量
var Sai=0;//表示处理到给出字符串的第几个
var Sa="ABDG##H###CE#I##F##"//按照前序给出的字符串，不足的补#
// var Sa="A#BCD##E###"
function Node(l,r,nodevalue){
    this.l=l;
    this.r=r;
    this.nodevalue =nodevalue;
}
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
function preOrder(root){
    console.log(NodeList[root].nodevalue);
    if (NodeList[root].l!=-1)
        preOrder( NodeList[root].l)
    if (NodeList[root].r!=-1)
        preOrder( NodeList[root].r)
}
function inOrder(root){
    if (NodeList[root].l!=-1){
        inOrder(NodeList[root].l)
    }
    console.log(NodeList[root].nodevalue)
    if (NodeList[root].r!=-1)
        inOrder( NodeList[root].r)
}
function postOrder(root){
    if (NodeList[root].l!=-1)
        postOrder(NodeList[root].l)
    if (NodeList[root].r!=-1)
        postOrder(NodeList[root].r)
    console.log(NodeList[root].nodevalue)
}
creatBinTree(totpoint)
console.log('下面开始前序遍历')
preOrder(0)
console.log('下面开始中序遍历')
inOrder(0)
console.log('下面开始后序遍历')
postOrder(0)

console.log(NodeList)