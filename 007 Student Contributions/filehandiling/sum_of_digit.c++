#include <iostream>
#include<math.h>
using namespace std;

void reverse(int arr[], int n){
 
 int start = 0;
 int end = n-1;
 while(start<=end){
    swap(arr[start],arr[end]);
    start++;
    end--;
 }
}

void printArray(int arr[], int n){

for(int i=0;i<=n;i++){
  cout<<arr[i] <<" ";
}
cout<<endl;
}

//int power(int num1, int num2){
//    int ans = 1;
//    for(int i=1;i<=num2;i++){
//       ans = ans*num1;
//	}
//	return ans;
//}

//bool isEven(int a){
// // odd
// if(a&1){
//   cout<<"Number is odd";
// }	
// else{
//   //Even
//   cout<<"Number is Even";
// }
//}

//int main(){
//int num;
//int i;
//int rem = 0;
//int sum = 0;
//cout<<"Enter your value num";
//cin>>num;
//for(i=1;i<=num;i++){
//    rem = num%10;
//    sum = sum+rem;
//    num = num/10;
//}
//cout<<"sum of digit"<<sum;

//int total;
//int num = 153;
//int rem;
//int xn = num;
//while(xn!=0){
//	rem = xn%10;
//	total = total+(rem*rem*rem);
//	xn = xn/10;
//}
//if(num == total){
//	cout<<"armstrong";
//}
//else{
//	cout<<"not a armstrong";
//}

//int sum;
//int rem;
//int num = 407;
//int xn = num;
//while(xn!=0){
// xn = xn%10;
// sum = sum+10*rem;
// xn = xn/10;
//}
//if(xn == num){
//  cout<<"palingdrom";
//}
//else{
//  cout<<"not palingdrom";
//}

//int sum;
//int rem;
//int num = 407;
//int xn = num;
//while(xn!=0){
//	xn = xn%10;
//	sum = sum+10*rem;
//	xn = xn/10;
//}
//if(xn == num){
//	cout<<"palindrom";
//}
//else{
//	cout<<"palindrom";
//}

//int rem,sum,n = 407;
//while(n!=0){
//  rem = n%10;
//  sum = sum*10+rem;
//  n = n/10;
//}
//cout<<"revrese of number"<<sum;

// array
string cars[4] = {"volvo","bmw","ford","mazda"};
//cout<<cars[0]<<endl;
//cout<<cars[1]<<endl;
//cout<<cars[2]<<endl;
//cout<<cars[3]<<endl;
//for(int i=0;i<=5;i++){
// cout<<i<<"="<<cars[i]<<endl;
//}

// check binary
//int n;
//cout<<"Enter your value:";
//cin>>n;
//int i = 0;
//int ans = 0;
//while(n!=0){
//  int bit = n & 1;
//  ans = (bit * pow(10 , i))+ans;
//  n = n>>1;
//  i++;
//}
//cout<<"Answer is"<<ans<<endl;

// number of reverse
//while(n!=0){
//int digit = n %10;
//ans = ans * 10 + digit;
// n = n/10;
//}

// squre

//int a,b;
//cin>>a>>b;
//int ans = 1;
//int i;
//for(i=1;i<=b;i++){
//  ans = ans * a;
//}
//cout<<"Answer is"<<ans;

// function
 
// int a,b;
// cin>>a>>b;
// int answer = power(a,b);
// cout<<"Answer is "<<answer<<endl;
// int a;
// cin>>a;
// int answer = isEven(a);
// cout<<answer;

//int arr[6] = {1,2,3,4,6,7,6};
//int brr[5] = {2,45,6,7,8,9};
//
//reverse(arr,6);
//reverse(brr,5);
//
//printArray(arr,6);
//printArray(brr,5);

	return 0;
}
