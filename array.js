/*You are given a string S, and your task is to return an array B(having a size of 2), 
where B[0] contains the count of character A (uppercase) in string S and B[1] contains
 the count of character D (uppercase) in string S.*/
let st="AbaDd";
let B = [0, 0]; // B[0] for 'A', B[1] for 'D'
for (let i = 0; i < st.length; i++) {
    if (st[i] === 'A') 
    {
        B[0]++;
        console.log(B[0]);
    } else if (st[i] === 'D') 
    {
        B[1]++;
        console.log(B[1]);
    }
}

/*You are given a string S containing both uppercase and lowercase letters. You need to find out the number of vowels in the 
given string.*/ 
let s0="Prepbytes";
let co=0;
for(let i of s0)
{
    if(i=="A" ||i=="a"||
        i=="E"||i=="e"||
        i=="I"|| i=="i"||
        i=="O"||i=="o"||
        i=="U"||i=="u")
        {
            co=co+1;
        }
}
console.log(co);

/*You are given two strings S1 and S2 (containing both uppercase and lowercase letters), You need to retrun a string which is the 
concatenation of both the given strings.*/

let s1="Prep";
let s2="bytes";
let s3;
s3=s1.concat(s2);
console.log(s3);

/*You are given a string S, and your task is to return the length of the string S.*/ 

let S="Cedqe";
let l=S.length;
console.log(l);

/*You are given a string S consisting of two letters A and D,where each character represent the winner of N games played between Aditya 
and Danish, where letter A represents the win of Aditya and letter D represents the win of Danish. You need to find out the that which 
player wins the maximum number of games or there is a draw between them.*/ 

let s="ADDAAADDD";
let a=0,d=0;
for(let i of s)
{
    if(i=="A")
    {
         a=a+1;
    }
    else if(i=="D")
    {
         d=d+1;
    }
}
if(a>d)
{
    console.log("Winner is Aditiya");
}
else if(d>a)
{
    console.log("Winner is Danish");
}
else
console.log("Game is draw");


/*You are given two strings S and P, 
and your task is to concatenate them and return the joining string.*/ 

let Str=["PrepBytes" ,"Technologies"];

let res=Str.join();
console.log(res);

/*You are given a string S,
 Your task is to check wether the given string is a Palindrome or not.*/ 

 let strn=prompt("Enter the string");
 let ln=strn.length;
 for(let i=0;i<ln/2;i++)
 {
    if(strn[i]!==strn[ln-1-i])
    {
        console.log("True");
    }
    else{
        console.log("False");
    }
 }

 /*You are given a string S, 
 Your task is to Reverse the string. String can contain both upppercase lowercase letters.*/

 let stn=prompt("Enter the string");
 let len=stn.length;
 let sr="";
 for(let i=len-1;i>=0;i--)
 {
 sr=sr+stn[i];
 }
 console.log(sr);

 /*You are given two strings S1 and S2, 
 Your task is to print YES if both strings are same else print NO.*/ 

 let str1="Prepbytes";
 let str2="Prepbytes";
 if(str1.toUpperCase()==str2.toUpperCase())
 {
    console.log("Yes");
 }
 else{
    console.log("No");
 }

 /*You are given a string S, Your task is to split the string with respect to spaces.*/ 
 const str="I am shweta agarwal";
 const arr=str.split("");
 console.log(arr);

 /*You are given a string S containing both uppercase and lowercase letters. You need to find out the number of vowels and the number of 
consonants in the given string. */

str="Prepbytes";
let c=0,v=0;
for(let i of str)
{
    if(i=="A" || i=="a"||i=="E"||i=="e"||i=="I"||i=="i"||i=="O"||i=="o"||i=="U"||i=="u")
        c=c+1;
    else{
        v=v+1;
    }
}
console.log(c);
console.log(v);

  
  