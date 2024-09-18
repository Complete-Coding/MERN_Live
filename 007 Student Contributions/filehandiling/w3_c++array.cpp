#include<iostream>
using namespace std;
int main(){
	int a[6],n,sum=0;
	cout<<"\n Enter size of array:";
	cin>>n;
	for(int i=0;i<n;i++){
	   cout<<"Enter value:";
	   cin>>a[i];
	   sum = sum+a[i];	
	}
	// display array;
	cout<<" array of element:\n\n";
	for(int i=0;i<n;i++){
		cout<<a[i]<<"\t";
	}
	 cout<<"\n array of element of sum:"<<sum;
}
