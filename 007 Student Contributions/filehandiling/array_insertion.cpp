#include<iostream>
using namespace std;
 int main(){
 	
//  int a[10],n,val,p;
//  cout<<"size of array: ";
//  cin>>n;
//  for(int i=0;i<n;i++){
//  cout<<"Enter values of array \n";
//  cin>>a[i];
// }
//	 
//cout<<"Enter New value of array";
//cin>>val;
//cout<<"Enter position of array";
//cin>>p;
//for(int i=n-1;i>=p-1;i--){
//a[i+1] = a[i]; 	
// }
//a[p-1] = val;
//n++;
////display array;
// for(int i=0;i<n;i++){
// cout<< a[i]<<"\t";
// }
 	
 	int a[10],n,v,p;
 	cout<<"size of array: ";
 	cin>>n;
 	for(int i=0;i<n;i++){
 		cout<<"Enter values of array \n";
 		cin>>a[i];
	 }
	 
	 cout<<"Enter New value of array";
	 cin>>v;
	 
	 //find position
	 for(int i=0;i<n;i++){
	 	if(a[i] < v && a[i+1]>=v){
	 		p = i+1;
		 }
	 }
 	
 	for(int i=n-1;i>=p;i--)
 		a[i+1] = a[i];
 		
	a[p] = v;
 	n++;
	 
 	
 	 for(int i=0;i<n;i++){
	 	cout<< a[i]<<"\t";
	 }
 	
 	return 0;
 }
