#include<iostream>
using namespace std;
int main(){
	int i,j,k;
	int a[10],b[10],c[10],n,n1;
	cout<<"\n Enter size of array n:";
	cin>>n;
	cout<<"\n Enter size of array n1:";
	cin>>n1;
	for(i=0;i<=n;i++){
		cout<<"Enter value of array n:";
		cin>>a[i];
	}
	for(i=0;i<=n1;i++){
	   cout<<"Enter value of array n1:";
		cin>>b[i];	
	}
	
	for(i=0,j=0,k=0;i<n && j<n1;){
       if(a[i]<=b[j]){
		c[k++]=a[i++];
	}	
	 else if(a[i]>b[j]){
	 	c[k++]=b[j++];
	 }
}
	 if(i<n){
	 	while(i<n){
	 		c[k++]=a[i++];
		 }
	 }
	 if(j<n1){
	 	while(i<n1){
	 		c[k++]=b[j++];
		 }
	 }
	
	// display array
      
      cout<<"\n";
   for(int i=0;i<n;i++){
     cout<<a[i]<<"\t";
   }
   cout<<"\n";
     for(int i=0;i<n1;i++){
     cout<<b[i]<<"\t";
   }
   cout<<"\n";
   for(int i=0;i<n+n1;i++){
   	 cout<<c[i]<<"\t";
   }
   
   return 0;
}
