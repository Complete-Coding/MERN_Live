#include<iostream>
using namespace std;
int main(){
	
	int a[10],n,low = 0,high,mid,val;
	cout<<"Enter your value:";
	cin>>n;
	for(int i=0;i<n;i++){
		cout<<"Enter value:";
		cin>>a[i];
	}
	cout<<"Enter your new value:";
	cin>>val;
	int f = 0;
	high = n-1;
	while(low<=high){
		mid =(low+high)/2;
		
		if(a[mid] == val){
			cout<<"element found"<<a[mid]<<endl;
			f = 1;
			break;
		}
		else if(a[mid]>val){
			high = mid-1;
		}
		else if(a[mid]<val){
			low = mid+1;
		}
	}
   
    if(f == 0){
  	 cout<<"element not found:";
  }
	
	// display value of array
//	for(int i=0;i<n;i++){
//		cout<<a[i]<<"\t";
//	}
	
	return 0;
}
