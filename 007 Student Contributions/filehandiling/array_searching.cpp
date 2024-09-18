#include<iostream>
using namespace std;
 int main()
 {	
 	int a[10],n,val, f=0,pos;
 	cout<<"Enter your value";
 	cin>>n;
 	for(int i=0;i<n;i++){
 		cout<<"Enter value";
 		cin>>a[i];
	 }
	 
	 // New value delete in array
	 cout<<"Enter your new value";
	 cin>>val;
	 for(int i=0;i<n;i++){
	 	if(a[i]==val){
	 		pos = i;
	 		f = 1;
	 		break;
		 }
	 }
	 if(f == 0){
	 	cout<<"element not found\n";
	 }
	 else{
	 	for(int i=pos;i<n;i++){
	 		a[i] = a[i+1];
	 		
		 }
		 n--;
	 }
	 // display value
	 for(int i=0;i<n;i++){
	 	cout<<a[i]<<"\t";
	 }
 	return 0;
 }
