#include<iostream>
using namespace std;

int main(){

    int a[10],n,sum = 0;
    cout<<"\n enter size of array :";
	cin>>n;
	cout << "\nEnter array elements: ";
    for(int i = 0; i < n; i++) {
        cin >> a[i];
    }
	for(int i=0;i<n;i++){
     for(int j=0;j<n-1;j++){
       if(a[j)>a[j+1]){
        int temp = a[j];
            a[j] = a[j+1]
            a[j+1] = temp;
	   }
	 }
	}

	// display array
	cout<<"\n array element are :\n";
	for(int i=0;i<n;i++){
		cout<<a[i]<<"\t";
	}

//	int a[10],n,sum = 0;
//	cout<<"\n enter size of array :";
//	cin>>n;
//	for(int i=0;i<n;i++){
//		cout<<"\n enter value";
//		cin>>a[i];
//		sum = sum+a[i];
//	}
//	
//	// finding max & min;
//	int max = a[0];
//	int min = a[0];
//	for(int i=0;i<n;i++){
//		if(a[i]>max){
//			max = a[i];
//		}
//		if(a[i]<min){
//			min = a[i];
//		}
//	}
//	// displat array
//	cout<<"\n array element are :\n";
//	for(int i=0;i<n;i++){
//		cout<<a[i]<<"\t";
//	}
//	cout<<"\n sum of array element is = "<<sum;
//	cout<<"\n max of array element is = "<<max;
//	cout<<"\n min of array element is = "<<min;
	return 0;
}
