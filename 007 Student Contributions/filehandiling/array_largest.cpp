#include<iostream>
using namespace std;
int main(){
	int a[10][10],b[10][10],c[10][10];
	int i,j,r1,r2,c1,c2;
	
	// input size of matrices
	cout<<"\n Enter size of matrix 1:";
	cin>>r1>>c1;
	
	// input size of matrices
	cout<<"\n Enter size of matrix 2:";
	cin>>r2>>c2;
	
	// checking condition for add and subtract matrices
	if(r1==r2 && c1==c2){
		cout<<"\n Matrices can be added or subtract";
		
		//input values in matrix
		cout<<"\nmatrix 1 values input:";
		for(i=0;i<r1;i++){
			for(j=0;j<c1;j++){
				cout<<"\nEnter value:";
				cin>>a[i][j];
			}
		}
		cout<<"\nmatrix 2 values input:";
		for(i=0;i<r2;i++){
			for(j=0;j<c2;j++){
				cout<<"\nEnter value:";
				cin>>b[i][j];
			}
		}
		// adding matrices
		for(i=0;i<r1;i++){
			for(j=0;j<c1;j++){
				c[i][j] = a[i][j] - b[i][j];
			}
		}
		//display matrices
		cout<<"\nmatrix 1 values\n";
		for(i=0;i<r1;i++){
			for(j=0;j<c1;j++){
				cout<<a[i][j]<<"\t";
			}
			cout<<"\n";
		}
		cout<<"\nMatrix 2 values\n";
		for(i=0;i<r2;i++){
			for(j=0;j<c2;j++){
				cout<<b[i][j]<<"\t";
			}
			cout<<"\n";
		}
		cout<<"\nmatrix 3 values\n";
		for(i=0;i<r1;i++){
			for(j=0;j<c1;j++){
				cout<<c[i][j]<<"\t";
			}
			cout<<"\n";
		}
	}else{
		cout<<"\nMatrices cannnot be added or subtracted:";
	}
	
	return 0;
}
