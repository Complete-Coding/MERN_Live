#include<iostream>
using namespace std;
int main(){
//int a[10],n,sum=0;
//cout<<"Enter your value of array";
//cin>>n;
//for(int i=0;i<n;i++){
//	cout<<"Enter value";
//	cin>>a[i];
//	sum = sum+i;
//}
//// finding of array of largest
//int max = a[0];
//int min = a[0];
//for(int i=0;i<n;i++){
//	if(a[i]>max){
//		max = a[i];
//	}
//	if(a[i]<min){
//		min = a[i];
//	}
//}
//
//
//// dispaly of array value
//for(int i=0;i<n;i++){
//	cout<<a[i]<<"\t";
//}
//
//cout<<"sum of array value"<<sum<<endl;
//cout<<"max of array value"<<max<<endl;
//cout<<"min of array value"<<min<<endl;

//int a[10],n;
//cout<<"Enter your value of array:";
//cin>>n;
//for(int i=0;i<n;i++){
//	cout<<"Enter value:";
//	cin>>a[i];
//}
//
//for(int i=0;i<n;i++){
//	for(int j=0;j<n-1;j++){
//		int temp = a[j];
//		     a[j] = a[j+1];
//		     a[j+1] = temp;
//	}
//}
//
//// display value
//for(int i=0;i<n;i++){
//	cout<<a[i]<<"\t";
//}

int a[10],n,val,p;
cout<<"Enter value of array:";
cin>>n;
for(int i=0;i<n;i++){
	cout<<"Enter value:";
	cin>>a[i];
}
cout<<"Enter new value of array:";
cin>>val;
cout<<"Enter new position of array:";
cin>>p;
for(int i=n-1;i>=p-1;i--){
	a[i+1] = a[i];
}
a[p-1] = val;
n--;
// dispaly
for(int i=0;i<n;i++){
	cout<<a[i]<<"\t";
}
	return 0;
}
