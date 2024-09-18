#include<iostream>
using namespace std;
main(){
	int a[10][10],b[10][10],c[10][10]={0};
	int i, j, k, r1, r2, c1, c2;
	
	//input size of matrices
	cout<<"\n Enter size of matrix 1 : ";
	cin>>r1>>c1;
	
	cout<<"\nEnter size of matrix 2 : ";
	cin>>r2>>c2;
	
	//checking condition for add and subtract matrices
	if(c1==r2){
		cout<<"\nMatrices can be multiplied";
		
		//input values in matrix
		cout<<"\nMatrix 1 values input";
		for(i=0;i<r1;i++){
			for(j=0;j<c1;j++){
				cout<<"\nEnter value : ";
				cin>>a[i][j];
			}
		}
		
		cout<<"\nMatrix 2 values input";
		for(i=0;i<r2;i++){
			for(j=0;j<c2;j++){
				cout<<"\nEnter value : ";
				cin>>b[i][j];
			}
		}
		
		//multiply matrices
		for(i=0;i<r1;i++){
			for(j=0;j<c2;j++){
				for(k=0;k<c1;k++){
					c[i][j] = c[i][j] + a[i][k] * b[k][j];
				}
			}
		}
		
		//display matrices
		cout<<"\nMatrix 1 values\n";
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
		
		cout<<"\nMatrix 3 values\n";
		for(i=0;i<r1;i++){
			for(j=0;j<c2;j++){
				cout<<c[i][j]<<"\t";
			}
			cout<<"\n";
		}
			
	} else {
		cout<<"\nMatrices cannot be multiplied";
	}
}
