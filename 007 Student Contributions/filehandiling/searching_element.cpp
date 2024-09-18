#include<iostream>
using namespace std;

int main(){
	int a[10],n,val;
	cout<<"Enter your value";
		cin>>n;
		for(int i=0;i<n;i++){
			cout<<"Enter value:";
			cin>>a[i];
		}
		
		cout<<"Enter your search element:";
		cin>>val;
		int f=0;
		for(int i=0;i<n;i++){
			if(a[i] == val){
				cout<<"element found"<<val<<endl;
				f=1;
				break;
			}
		}
		if(f == 0){
			cout<<"element not found\n";
		}
		// dispaly array
		for(int i=0;i<n;i++){
			cout<<a[i]<<"\t";
		}
		
		return 0;
}
