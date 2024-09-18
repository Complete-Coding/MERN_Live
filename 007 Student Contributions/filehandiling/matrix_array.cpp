#include<iostream>
using namespace std;
int main(){
	int a[10][10];
	int r,c;
	cout<<"\n Enter size of array n:";
	cin>>r>>c;
	for(int i=0;i<r;i++){
		for(int j=0;j<c;j++){
			cout<<" \n Enter array element:";
			cin>>a[i][j];
		}
	}
	// display array matrix
		for(int i=0;i<r;i++){
			for(int j=0;j<c;j++){
				cout<<a[i][j]<<"\t";
			}
			cout<<"\n";
		}
	return 0;
}
