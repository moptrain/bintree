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
//下面三个是递归遍历
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
//下面两个是非递归访问
function nonRPreOrder(){
    var S=Array();//Stack,储存指针（Nodelist的下标）
    S[0]=0;
    while  (S.length>0){
        x=S.pop() //返回栈顶元素的指针
        // console.log(S)
        console.log(NodeList[x].nodevalue)
        if (NodeList[x].r!=-1) S.push(NodeList[x].r);//右指针入栈，是因为先入栈的后出栈
        if (NodeList[x].l!=-1) S.push(NodeList[x].l);//左指针入栈

    }
}
function nonRInOrder(){
    var S=Array()
    var pointer=0
    do{
        while (pointer!=-1){
            S.push(pointer)
            pointer=NodeList[pointer].l
        }
        var x=S.pop()
        console.log(NodeList[x].nodevalue)
        if (NodeList[x].r!=-1){
            pointer=NodeList[x].r
        }

    }
    while (S.length>0||pointer!=-1)
}

creatBinTree(totpoint)
console.log(NodeList)
console.log('下面开始前序遍历')
preOrder(0)
console.log('下面开始中序遍历')
inOrder(0)
console.log('下面开始后序遍历')
postOrder(0)
