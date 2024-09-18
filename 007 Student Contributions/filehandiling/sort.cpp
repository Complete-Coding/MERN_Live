#include<iostream>
using namespace std;

int main(){

//    int a[10],n,sum = 0;
//    cout<<"\n enter size of array :";
//	cin>>n;
//	cout << "\nEnter array elements: ";
//    for(int i = 0; i < n; i++) {
//        cin >> a[i];
//    }
//	for(int i=0;i<n;i++){
//     for(int j=0;j<n-1;j++){
//       if(a[j]>a[j+1]){
//        int temp = a[j];
//            a[j] = a[j+1];
//            a[j+1] = temp;
//	   }
//	 }
//} 

	// display array
//	cout<<"\n array element are :\n";
//	for(int i=0;i<n;i++){
//		cout<<a[i]<<"\t";
//	}
/*
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
*/

//int a[10],n,val,pos;
//cout<<"Enter your value:";
//cin>>n;
//for(int i=0;i<n;i++){
//	cout<<"Enter value";
//	cin>>a[i];
//}
//cout<<"Enter your new value:";
//cin>>val;
//cout<<"Enter your new position:";
//cin>>pos;
//for(int i=n-1;i>=pos-1;i--){
//	a[i+1] = a[i];
//}
//a[pos-1] = val;
//n--;
//
//// display array
//  for(int i=0;i<n;i++){
//  	 cout<<a[i]<<"\t";
//  }

//int a[10],n,val,p;
//cout<<"Enter your value of array:";
//cin>>n;
//for(int i=0;i<n;i++){
//	cout<<"Enter your value:";
//	cin>>a[i];
//}
//
//cout<<"Enter your new value of array:";
//cin>>val;
//int f = 0;
//for(int i=0;i<n;i++){
//	if(a[i] == val){
//		p = i;
//		f = 1;
//		break;
//	}
//}
//if(f == 0){
//	
//	cout<<"Element is not found\n:";
//}
//else{
//   for(int i=p;i<n;i++){
//   	 a[i] = a[i+1];
//   }
//   n--;
//}

// sorting
int a[10],n;
cout<<"\n Enter size of array:";
cin>>n;
for(int i=0;i<n;i++){
	cout<<"\n Enter value:";
	cin>>a[i];
}

for(int i=0;i<n;i++){
	for(int j=0;j<n-1;j++){
		if(a[j]>a[j+1]){
			int temp = a[j];
			a[j] = a[j+1];
			a[j+1] = temp;
		}
	}
}

// dispaly value of array
for(int i=0;i<n;i++){
	cout<<a[i]<<"\t";
}
	return 0;
}
