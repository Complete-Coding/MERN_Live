#include<iostream>
using namespace std;
int main(){
	int a[10][10];
	int r,c;
	cout<<"\nEnter size of matrix:";
	cin>>r>>c;
	for(int i=0;i<r;i++){
		for(int j=0;j<c;j++){
			cout<<"\nEnter value:";
			cin>>a[i][j];
		}
	}
	
	// display value
	// square matrix
	if(r==c){
		for(int i=0;i<r;i++){
		for(int j=0;j<c;j++){
			if(i==j){
				cout<<a[i][j]<<"\t";
			}
			  else{
			  	cout<<"\t";
			  }
			
		}
		cout<<"\n";
	}
	}
	else{
		cout<<"\n matrix are not squre:";
	}
	// secondary multidimenional array
		if(r==c){
		for(int i=0;i<r;i++){
		for(int j=0;j<c;j++){
			if(i+j == r-1){
				cout<<a[i][j]<<"\t";
			}
			  else{
			  	cout<<"\t";
			  }
			
		}
		cout<<"\n";
	}
	}
	else{
		cout<<"\n matrix are not squre:";
	}
	
	// primary multidimenional array
		if(r==c){
		for(int i=0;i<r;i++){
		for(int j=0;j<c;j++){
			if(i==j){
				cout<<a[i][j]<<"\t";
			}
			  else{
			  	cout<<"\t";
			  }
			
		}
		cout<<"\n";
	}
	}
	else{
		cout<<"\n matrix are not squre:";
	}
	
	//uppercase array
		if(r==c){
		for(int i=0;i<r;i++){
		for(int j=0;j<c;j++){
			if(i>j){
				cout<<a[i][j]<<"\t";
			}
			  else{
			  	cout<<"\t";
			  }
			
		}
		cout<<"\n";
	}
	}
	else{
		cout<<"\n matrix are not squre:";
	}
	
	// lowercase array
		if(r==c){
		for(int i=0;i<r;i++){
		for(int j=0;j<c;j++){
			if(i<j){
				cout<<a[i][j]<<"\t";
			}
			  else{
			  	cout<<"\t";
			  }
			
		}
		cout<<"\n";
	}
	}
	else{
		cout<<"\n matrix are not squre:";
	}
	
	// transperent array
		if(r==c){
		for(int i=0;i<r;i++){
		for(int j=0;j<c;j++){
			if(i+j == r-1){
				cout<<a[j][i]<<"\t";
			}
			  else{
			  	cout<<"\t";
			  }
			
		}
		cout<<"\n";
	}
	}
	else{
		cout<<"\n matrix are not squre:";
	}
	
	return 0;
}
