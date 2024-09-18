#include<iostream>
using namespace std;
int main(){
	int a[10],n,sum=0;
	cout<<"\n Enter size of array n:";
	cin>>n;
	for(int i=0;i<n;i++){
		cout<<"\n Enter array Element:";
		cin>> a[i];
		sum = sum+a[i];
	}
	// finding max & min
	int max = a[0];
	int min = a[0];
	for(int i=0;i<n;i++){
	if(a[i]>max){
		max = a[i];
	}
	if(a[i]<min){
		min = a[i];
	}
}
	// display array
	for(int i=0;i<n;i++){
		cout<<a[i]<<"\t";
	}
	cout<<"\n sum of array element:"<<sum;
	cout<<"\n max of array element:"<<max;
	cout<<"\n min of array element:"<<min;
	return 0;
}
