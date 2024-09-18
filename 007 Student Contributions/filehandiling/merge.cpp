
#include<iostream>
using namespace std;
int main(){
	int j,i,k;
	int a[10],b[10],c[10],n,n1;
	cout<<"Enter your value of array n:";
	cin>>n;
	cout<<"Enter your value of array n1:";
	cin>>n1;
	for(int i=0;i<n;i++){
		cout<<"Enter your value n:";
		cin>>a[i];
	}
	for(int i=0;i<n1;i++){
		cout<<"Enter your value n1:";
		cin>>b[i];
	}
//	for(int i=0;i<n;i++){
//		for(int j=0;j<n-1;j++){
//			if(a[j]>a[j+1]){
//			 int temp = a[j];
//			      a[j] = a[j+1];
//			      temp = a[j];
//			}
//		}
//	}
//	for(int i=0;i<n1;i++){
//		for(int j=0;j<n1-1;j++){
//			if(a[j]>a[j+1]){
//			 int temp = a[j];
//			      a[j] = a[j+1];
//			      temp = a[j];
//			}
//		}
//	}
	for(i=0,j=0,k=0;i<n && j<n1;){
		if(a[i]<=b[j]){
			c[k++]=a[i++];
		}
		else if(a[i]>b[j]){
			c[k++] = b[j++];
		}
	}
	if(i < n){
		while(i<n){
			c[k++] = a[i++];
		}
	}
	if(j<n1){
	   while(j<n1){
	   	 c[k++] = b[j++];
	   }
	}
	// dispaly array
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
